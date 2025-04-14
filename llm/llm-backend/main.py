from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
import google.generativeai as genai

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
genai.configure(api_key="GEMINI_API_KEY")  # Replace with os.getenv(...) for safety

# Local models
local_models = {
    "gpt2": pipeline("text-generation", model="gpt2"),
}

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
