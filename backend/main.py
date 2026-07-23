from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import fitz

app = FastAPI(
    title="AI Resume Analyzer API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Skills Database
SKILLS = [
    "python",
    "java",
    "javascript",
    "react",
    "html",
    "css",
    "node.js",
    "mongodb",
    "sql",
    "mysql",
    "git",
    "github",
    "docker",
    "fastapi",
    "django",
    "flask",
    "c++",
    "c#",
    "php"
]


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully 🚀"
    }


@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    pdf = fitz.open(stream=await file.read(), filetype="pdf")

    text = ""

    for page in pdf:
        text += page.get_text()

    text_lower = text.lower()

    found_skills = []

    for skill in SKILLS:
        if skill in text_lower:
            found_skills.append(skill)

    missing_skills = []

    for skill in SKILLS:
        if skill not in found_skills:
            missing_skills.append(skill)

    score = int((len(found_skills) / len(SKILLS)) * 100)

    if score >= 80:
        level = "Excellent Resume"

    elif score >= 60:
        level = "Good Resume"

    elif score >= 40:
        level = "Average Resume"

    else:
        level = "Needs Improvement"

    return {
        "filename": file.filename,
        "score": score,
        "level": level,
        "skills_found": found_skills,
        "missing_skills": missing_skills,
        "text": text
    }