import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Alert,
    ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const OCRFeature = ({ images, setImages, requestPermissions }) => {
    const [imageUrl, setImageUrl] = useState("");
    const [extractedText, setExtractedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentProcessingIndex, setCurrentProcessingIndex] = useState(null);

    // Extract text from images using AI API
    const extractTextFromImages = async () => {
        if (images.length === 0) {
            Alert.alert("No Images", "Please select images to extract text from.");
            return;
        }

        setIsLoading(true);
        setExtractedText("");
        let allExtractedText = "";

        try {
            for (let i = 0; i < images.length; i++) {
                setCurrentProcessingIndex(i);
                const image = images[i];
                
                console.log(`Processing image ${i + 1}/${images.length}:`, image.uri);

                const response = await fetch('http://127.0.0.1:8000/image_to_text/extract_text', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        image_url: image.uri
                    })
                });

                console.log('Response status:', response.status);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('API Error:', errorText);
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const data = await response.json();
                console.log('API Response:', data);

                // Handle different possible response formats
                let extractedFromImage = '';
                if (data.extracted_text) {
                    extractedFromImage = data.extracted_text;
                } else if (data.text) {
                    extractedFromImage = data.text;
                } else if (data.result) {
                    extractedFromImage = data.result;
                } else if (typeof data === 'string') {
                    extractedFromImage = data;
                } else {
                    console.log('Unexpected response format:', data);
                    extractedFromImage = 'No text found in this image.';
                }

                // Add extracted text with image indicator if multiple images
                if (images.length > 1) {
                    allExtractedText += `--- Image ${i + 1} ---\n${extractedFromImage}\n\n`;
                } else {
                    allExtractedText = extractedFromImage;
                }
            }

            setExtractedText(allExtractedText.trim());
            
            if (allExtractedText.trim()) {
                Alert.alert("Success", "Text extracted successfully from all images!");
            } else {
                Alert.alert("Info", "No text was found in the selected images.");
            }

        } catch (error) {
            console.error('OCR API Error:', error);
            Alert.alert(
                "Error", 
                `Failed to extract text: ${error.message}. Please check your connection and try again.`
            );
        } finally {
            setIsLoading(false);
            setCurrentProcessingIndex(null);
        }
    };

    // Extract text from a single image URL
    const extractTextFromUrl = async (url) => {
        setIsLoading(true);
        setExtractedText("");

        try {
            console.log('Processing URL:', url);

            const response = await fetch('http://127.0.0.1:8000/image_to_text/extract_text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    image_url: url
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            let extractedFromImage = '';
            if (data.extracted_text) {
                extractedFromImage = data.extracted_text;
            } else if (data.text) {
                extractedFromImage = data.text;
            } else if (data.result) {
                extractedFromImage = data.result;
            } else if (typeof data === 'string') {
                extractedFromImage = data;
            } else {
                extractedFromImage = 'No text found in this image.';
            }

            setExtractedText(extractedFromImage);
            Alert.alert("Success", "Text extracted successfully from URL!");

        } catch (error) {
            console.error('OCR URL Error:', error);
            Alert.alert("Error", `Failed to extract text from URL: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Load image from URL
    const handleLoadUrl = () => {
        if (imageUrl.trim()) {
            // Basic validation for URL
            if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
                setImages([...images, { uri: imageUrl }]);
                setImageUrl(""); // Clear the input after adding
            } else {
                Alert.alert(
                    "Invalid URL",
                    "Please enter a valid image URL starting with http:// or https://"
                );
            }
        }
    };

    // Load image from URL and immediately extract text
    const handleLoadUrlAndExtract = async () => {
        if (imageUrl.trim()) {
            if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
                // Add to images first
                setImages([...images, { uri: imageUrl }]);
                // Then extract text directly from URL
                await extractTextFromUrl(imageUrl);
                setImageUrl(""); // Clear the input after processing
            } else {
                Alert.alert(
                    "Invalid URL",
                    "Please enter a valid image URL starting with http:// or https://"
                );
            }
        }
    };

    // Take a photo with camera
    const takePhoto = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            saveToPhotos: true
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImages([...images, ...result.assets]);
        }
    };

    // Handle selecting images from gallery
    const pickImages = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImages([...images, ...result.assets]);
        }
    };

    // Remove an image from the selected images
    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        
        // Clear extracted text if no images left
        if (newImages.length === 0) {
            setExtractedText("");
        }
    };

    // Clear all images and extracted text
    const clearAll = () => {
        setImages([]);
        setExtractedText("");
        setImageUrl("");
    };

    return (
        <>
            <View style={styles.urlContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Image URL"
                    value={imageUrl}
                    onChangeText={setImageUrl}
                    placeholderTextColor="#888"
                    editable={!isLoading}
                />
                <TouchableOpacity 
                    style={[styles.urlButton, isLoading && styles.buttonDisabled]} 
                    onPress={handleLoadUrl}
                    disabled={isLoading}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.urlButton, styles.extractButton, isLoading && styles.buttonDisabled]} 
                    onPress={handleLoadUrlAndExtract}
                    disabled={isLoading}
                >
                    <Text style={styles.buttonText}>Extract</Text>
                </TouchableOpacity>
            </View>

            {images.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Ionicons
                        name="document-text"
                        size={80}
                        color="#ddd"
                        style={styles.emptyIcon}
                    />
                    <Text style={styles.emptyText}>No images selected</Text>
                    <Text style={styles.instructionText}>
                        Take a photo, select from gallery, or enter an image URL to extract text
                    </Text>
                </View>
            ) : (
                <ScrollView style={styles.imageScrollView}>
                    <View style={styles.imageGrid}>
                        {images.map((image, index) => (
                            <View key={index} style={styles.imageContainer}>
                                <Image source={{ uri: image.uri }} style={styles.image} />
                                <TouchableOpacity
                                    style={styles.removeButton}
                                    onPress={() => removeImage(index)}
                                    disabled={isLoading}
                                >
                                    <Ionicons name="close-circle" size={24} color="red" />
                                </TouchableOpacity>
                                {isLoading && currentProcessingIndex === index && (
                                    <View style={styles.processingOverlay}>
                                        <ActivityIndicator color="white" size="small" />
                                        <Text style={styles.processingText}>Processing...</Text>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            )}

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[styles.button, isLoading && styles.buttonDisabled]} 
                    onPress={takePhoto}
                    disabled={isLoading}
                >
                    <Ionicons name="camera" size={24} color="white" />
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, isLoading && styles.buttonDisabled]} 
                    onPress={pickImages}
                    disabled={isLoading}
                >
                    <Ionicons name="images" size={24} color="white" />
                    <Text style={styles.buttonText}>Gallery</Text>
                </TouchableOpacity>

                {images.length > 0 && (
                    <TouchableOpacity 
                        style={[styles.button, styles.clearButton, isLoading && styles.buttonDisabled]} 
                        onPress={clearAll}
                        disabled={isLoading}
                    >
                        <Ionicons name="trash" size={24} color="white" />
                        <Text style={styles.buttonText}>Clear</Text>
                    </TouchableOpacity>
                )}
            </View>

            {images.length > 0 && (
                <TouchableOpacity
                    style={[styles.actionButton, isLoading && styles.buttonDisabled]}
                    onPress={extractTextFromImages}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator color="white" />
                            <Text style={styles.loadingText}>
                                {currentProcessingIndex !== null 
                                    ? `Processing ${currentProcessingIndex + 1}/${images.length}...`
                                    : 'Extracting text...'
                                }
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.actionButtonText}>Extract Text from All Images</Text>
                    )}
                </TouchableOpacity>
            )}

            {extractedText ? (
                <View style={styles.extractedContainer}>
                    <View style={styles.extractedHeader}>
                        <Text style={styles.extractedTitle}>Extracted Text:</Text>
                        <TouchableOpacity 
                            onPress={() => setExtractedText("")}
                            style={styles.clearTextButton}
                        >
                            <Ionicons name="close" size={20} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.extractedScrollView} nestedScrollEnabled>
                        <Text style={styles.extractedContent}>{extractedText}</Text>
                    </ScrollView>
                </View>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
    urlContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    input: {
        flex: 1,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        color: "#333"
    },
    urlButton: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        marginLeft: 5
    },
    extractButton: {
        backgroundColor: "#2ecc71"
    },
    buttonDisabled: {
        backgroundColor: "#95a5a6",
        opacity: 0.6
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    emptyIcon: {
        marginBottom: 20
    },
    emptyText: {
        fontSize: 18,
        color: "#888",
        marginBottom: 10
    },
    instructionText: {
        fontSize: 14,
        color: "#888",
        textAlign: "center"
    },
    imageScrollView: {
        flex: 1
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5
    },
    imageContainer: {
        width: "33.33%",
        padding: 5,
        position: "relative"
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 8
    },
    removeButton: {
        position: "absolute",
        right: 8,
        top: 8,
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius: 12
    },
    processingOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    processingText: {
        color: "white",
        fontSize: 12,
        marginTop: 5
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
        paddingBottom: 30
    },
    button: {
        backgroundColor: "#4a90e2",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    clearButton: {
        backgroundColor: "#e74c3c"
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        marginLeft: 8
    },
    actionButton: {
        backgroundColor: "#2ecc71",
        padding: 15,
        alignItems: "center",
        marginHorizontal: 20,
        borderRadius: 8,
        marginBottom: 20
    },
    actionButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    loadingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    loadingText: {
        color: "white",
        fontSize: 14,
        marginLeft: 10
    },
    extractedContainer: {
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        margin: 20,
        maxHeight: 300
    },
    extractedHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        paddingBottom: 10
    },
    extractedTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    clearTextButton: {
        padding: 5
    },
    extractedScrollView: {
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    extractedContent: {
        fontSize: 16,
        lineHeight: 24
    }
});

export default OCRFeature;