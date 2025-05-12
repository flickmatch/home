from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
import google.generativeai as genai
import os

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY")) 

# Local models
local_models = {
    "gpt2": pipeline("text-generation", model="gpt2"),
}

@app.get("/")
def read_root():
    return {"message": "FastAPI backend is running!"}

@app.post("/generate")
async def generate_text(
    model_name: str = Form(...),
    prompt: str = Form(...)
):
    if model_name in local_models:
        generator = local_models[model_name]
        result = generator(prompt, max_length=100, do_sample=True)
        return {"model_used": model_name, "output": result[0]["generated_text"]}

    elif model_name == "gemini":
        model = genai.GenerativeModel("gemini-2.0-flash")
        chat = model.start_chat()
        result = chat.send_message(prompt)
        return {"model_used": "gemini", "output": result.text}

    else:
        raise HTTPException(status_code=400, detail="Model not available.")
if __name__ == "__main__":
    import uvicorn
    print("Device set to use cpu")
    uvicorn.run(app, host="0.0.0.0", port=3000)