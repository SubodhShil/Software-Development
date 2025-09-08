from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import List
import os
import uuid
import base64
import shutil
import logging
from datetime import datetime
from fpdf import FPDF
from pymongo import MongoClient
from langchain_google_genai import GoogleGenerativeAI
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from youtube_transcript_api import YouTubeTranscriptApi

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(title="Aora API",
              description="API for processing images to text using Gemini and generating PDFs")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
MONGODB_URI = os.getenv("MONGODB_URI")
DB_NAME = "aora_db"
COLLECTION_NAME = "image_processing"

# Create temp directories
UPLOAD_DIR = "temp/uploads"
PDF_DIR = "temp/pdfs"
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(PDF_DIR, exist_ok=True)

# Get Google API key
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY not found in environment variables")

# Initialize MongoDB client


def get_mongodb_client():
    client = MongoClient(MONGODB_URI)
    try:
        # Check connection
        client.admin.command('ping')
        logger.info("MongoDB connection established")
        return client
    except Exception as e:
        logger.error(f"MongoDB connection error: {e}")
        raise HTTPException(
            status_code=500, detail="Database connection error")

# Initialize Gemini model for image and text processing


def get_gemini_vision_model():
    try:
        model = ChatGoogleGenerativeAI(
            model="gemini-pro-vision"
        )
        return model
    except Exception as e:
        logger.error(f"Error initializing Gemini model: {e}")
        raise HTTPException(
            status_code=500, detail="AI model initialization error")


def get_gemini_text_model():
    try:
        model = ChatGoogleGenerativeAI(
            model="models/gemini-2.0-flash",
        )
        return model
    except Exception as e:
        logger.error(f"Error initializing Gemini text model: {e}")
        raise HTTPException(
            status_code=500, detail="AI model initialization error")

# Request models


class ImageProcessResponse(BaseModel):
    task_id: str
    message: str


class PDFGenerateRequest(BaseModel):
    task_id: str
    title: str = "Aora Generated Document"
    include_original_images: bool = False

class SummarizeRequest(BaseModel):
    video_url: str

# Endpoints

@app.post("/summarize")
async def summarize_video(
    request: SummarizeRequest,
    text_model: GoogleGenerativeAI = Depends(get_gemini_text_model)
):
    try:
        video_id = request.video_url.split("v=")[-1]
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        transcript = " ".join([d['text'] for d in transcript_list])

        prompt_template = "Summarize the following text:\n\n{text}\n\nSummary:"
        prompt = PromptTemplate(template=prompt_template, input_variables=["text"])
        chain = LLMChain(llm=text_model, prompt=prompt)

        summary = chain.run(text=transcript)

        return {"summary": summary}
    except Exception as e:
        logger.error(f"Error summarizing video: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/upload-images/", response_model=ImageProcessResponse)
async def upload_images(
    files: List[UploadFile] = File(...),
    mongodb_client: MongoClient = Depends(get_mongodb_client)
):
    try:
        # Generate a unique task ID
        task_id = str(uuid.uuid4())
        task_dir = os.path.join(UPLOAD_DIR, task_id)
        os.makedirs(task_dir, exist_ok=True)

        # Save uploaded files
        file_paths = []
        file_names = []
        for file in files:
            # Validate file type
            if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg')):
                raise HTTPException(
                    status_code=400,
                    detail=f"File {file.filename} is not a supported image type. Only .png, .jpg and .jpeg are supported."
                )

            file_path = os.path.join(task_dir, file.filename)
            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
            file_paths.append(file_path)
            file_names.append(file.filename)

        # Save task info to MongoDB
        db = mongodb_client[DB_NAME]
        collection = db[COLLECTION_NAME]

        collection.insert_one({
            "task_id": task_id,
            "status": "uploaded",
            "file_count": len(files),
            "file_names": file_names,
            "created_at": datetime.now(),
            "processed": False
        })

        logger.info(f"Received {len(files)} images for task {task_id}")

        return ImageProcessResponse(
            task_id=task_id,
            message=f"Successfully uploaded {len(files)} images. Use this task_id to generate PDF."
        )

    except Exception as e:
        logger.error(f"Error uploading images: {str(e)}")
        if os.path.exists(task_dir):
            shutil.rmtree(task_dir)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/process-images/")
async def process_images(
    request: PDFGenerateRequest,
    mongodb_client: MongoClient = Depends(get_mongodb_client),
    vision_model: GoogleGenerativeAI = Depends(get_gemini_vision_model),
    text_model: GoogleGenerativeAI = Depends(get_gemini_text_model)
):
    try:
        task_id = request.task_id
        task_dir = os.path.join(UPLOAD_DIR, task_id)

        if not os.path.exists(task_dir):
            raise HTTPException(status_code=404, detail="Task not found")

        # Get task info from MongoDB
        db = mongodb_client[DB_NAME]
        collection = db[COLLECTION_NAME]
        task_info = collection.find_one({"task_id": task_id})

        if not task_info:
            raise HTTPException(
                status_code=404, detail="Task information not found in database")

        # Get all images from the task directory
        image_files = [f for f in os.listdir(
            task_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]

        if not image_files:
            raise HTTPException(
                status_code=404, detail="No images found for this task")

        # Process each image with Gemini Vision API
        all_texts = []
        extracted_contents = []

        for img_file in image_files:
            img_path = os.path.join(task_dir, img_file)

            # Convert image to base64
            with open(img_path, "rb") as image_file:
                base64_image = base64.b64encode(
                    image_file.read()).decode('utf-8')

            # Create LangChain messages
            messages = [
                HumanMessage(
                    content=[
                        {
                            "type": "text",
                            "text": "Extract all text content from this image. Format it properly while preserving the structure and meaning. If there are tables or lists, maintain their format as much as possible."
                        },
                        {
                            "type": "image_url",
                            "image_url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    ]
                )
            ]

            # Process with Gemini Vision model
            response = vision_model.invoke(messages)
            extracted_text = response.content

            # Store both the extracted text and file info
            extracted_contents.append({
                "filename": img_file,
                "text": extracted_text
            })
            all_texts.append(extracted_text)

            logger.info(f"Processed image {img_file}")

        # Optional: Use Gemini to improve formatting and organization
        if len(all_texts) > 1:
            combined_text = "\n\n--- Next Image ---\n\n".join(all_texts)
            format_prompt = PromptTemplate(
                input_variables=["text", "title"],
                template="""
                Your task is to organize the following extracted text from multiple images into a coherent document.
                
                Document Title: {title}
                
                Extracted Text:
                {text}
                
                Please create a well-formatted document from this text. Maintain the logical flow, correct any obvious OCR errors, 
                organize into sections if appropriate, and ensure it reads smoothly. Do not add any information that isn't in the original text.
                """
            )

            format_chain = LLMChain(llm=text_model, prompt=format_prompt)
            formatted_result = format_chain.invoke({
                "text": combined_text,
                "title": request.title
            })

            # Use the formatted text for the PDF
            final_text = formatted_result["text"]
        else:
            final_text = all_texts[0]

        # Generate PDF from extracted texts
        pdf_path = generate_pdf(final_text, extracted_contents,
                                task_id, request.title, request.include_original_images)

        # Update MongoDB with processing info
        collection.update_one(
            {"task_id": task_id},
            {
                "$set": {
                    "processed": True,
                    "processed_at": datetime.now(),
                    "pdf_path": pdf_path,
                    "extracted_text_count": len(all_texts)
                }
            }
        )

        return FileResponse(
            path=pdf_path,
            filename=f"aora_document_{task_id}.pdf",
            media_type="application/pdf"
        )

    except Exception as e:
        logger.error(f"Error processing images: {str(e)}")

        # Update MongoDB with error info
        if 'collection' in locals() and task_id:
            collection.update_one(
                {"task_id": task_id},
                {
                    "$set": {
                        "error": str(e),
                        "error_at": datetime.now()
                    }
                }
            )

        raise HTTPException(status_code=500, detail=str(e))


def generate_pdf(text, extracted_contents, task_id, title="Aora Generated Document", include_images=False):
    """Generate a PDF from extracted text with optional image inclusion."""
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)

    # Add title page
    pdf.add_page()
    pdf.set_font("Arial", 'B', size=24)
    pdf.cell(0, 20, title, ln=True, align='C')
    pdf.set_font("Arial", size=12)
    pdf.cell(
        0, 10, f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}", ln=True, align='C')
    pdf.cell(0, 10, f"Document ID: {task_id}", ln=True, align='C')

    # Add content
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    # Handle text content
    lines = text.split('\n')
    for line in lines:
        if line.strip() == "--- Next Image ---":
            pdf.add_page()
            continue

        # Check if line might be a header (simple heuristic)
        if len(line.strip()) > 0 and len(line.strip()) < 50 and line.strip() == line.strip().upper():
            pdf.set_font("Arial", 'B', size=14)
            pdf.multi_cell(0, 10, line)
            pdf.set_font("Arial", size=12)
        else:
            pdf.multi_cell(0, 10, line)

    # Optionally include original images
    if include_images:
        pdf.add_page()
        pdf.set_font("Arial", 'B', size=16)
        pdf.cell(0, 10, "Original Images", ln=True)

        task_dir = os.path.join(UPLOAD_DIR, task_id)

        for content in extracted_contents:
            pdf.add_page()
            pdf.set_font("Arial", 'B', size=12)
            pdf.cell(0, 10, f"File: {content['filename']}", ln=True)

            img_path = os.path.join(task_dir, content['filename'])

            # Get image dimensions
            try:
                pdf.image(img_path, x=10, y=30, w=190)
            except Exception as e:
                logger.error(f"Error adding image to PDF: {str(e)}")
                pdf.cell(0, 10, f"[Error including image: {str(e)}]", ln=True)

    # Save the PDF
    pdf_path = os.path.join(PDF_DIR, f"{task_id}.pdf")
    pdf.output(pdf_path)
    logger.info(f"Generated PDF at {pdf_path}")

    return pdf_path


@app.get("/task/{task_id}")
async def get_task_status(
    task_id: str,
    mongodb_client: MongoClient = Depends(get_mongodb_client)
):
    try:
        db = mongodb_client[DB_NAME]
        collection = db[COLLECTION_NAME]
        task_info = collection.find_one({"task_id": task_id})

        if not task_info:
            raise HTTPException(status_code=404, detail="Task not found")

        # Convert MongoDB document to dict and remove _id field
        task_dict = {k: v for k, v in task_info.items() if k != "_id"}

        # Convert datetime objects to strings
        for key, value in task_dict.items():
            if isinstance(value, datetime):
                task_dict[key] = value.isoformat()

        return task_dict

    except Exception as e:
        logger.error(f"Error getting task status: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
def read_root():
    return {
        "message": "Welcome to Aora API",
        "status": "online",
        "version": "1.0.0"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
