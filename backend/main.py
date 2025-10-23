from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from nameConvert import convert_any_name

app = FastAPI()

class NameInput(BaseModel):
    name: str

@app.post("/convert")
async def convert_name(data: NameInput):
    qwerty = await convert_any_name(data.name)
    if(type(qwerty)==str):
        return {"qwerty":qwerty}
    else:
        result = qwerty["qwerty"]
        return {"qwerty": result}
@app.get("/")
def read_root():
    return {"message": "Running..."}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)