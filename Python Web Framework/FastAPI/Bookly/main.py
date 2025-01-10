from fastapi import FastAPI, Query
from typing import Optional

app = FastAPI()


@app.get('/')
async def read_root():
    return {"message": "Hello World"}


# Path parameter
@app.get('/greet/{name}')
async def greet_name(name: str) -> dict:
    return {"message": f"Hello {name}"}


# Query parameter
@app.get('/story')
async def public_story(name: str, year: int) -> dict:
    return {
        "storyBook": name,
        "yearPublished": year
    }

"""  

# Handling query and path parameter together

1. http://127.0.0.1:8000/clients?name=subodh&order=sweets&quantity=30

2. http://127.0.0.1:8000/clients/subodh/sweets/30

"""


@app.get('/clients/{name}/{order}/{quantity}')
async def client_details_path(name: str, order: str, quantity: int):
    return {
        "client": name,
        "orderName": order,
        "orderQuantity": quantity
    }


@app.get('/clients')
async def client_details_query(name: str = Query(...), order: str = Query(...), quantity: int = Query(...)):
    return {
        "client": name,
        "orderName": order,
        "orderQuantity": quantity
    }

# optional query parameter


@app.get('/test1')
async def test1(name: Optional[str] = "random_user", age: int = 0) -> dict:
    return {
        "name": name,
        "age": age
    }
