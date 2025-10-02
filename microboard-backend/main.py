import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn


app = FastAPI()


@app.get("/items")
def get_items():
    items = [
        {
            "id": 1,
            "title": "title 1",
        },
        {
            "id": 2,
            "title": "title 2",
        },
        {
            "id": 3,
            "title": "title 3",
        },
    ]
    random.shuffle(items)
    return items


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "rooksgc.ru",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
