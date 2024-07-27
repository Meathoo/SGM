from fastapi import FastAPI, Depends, HTTPException, status, APIRouter
from fastapi import Request
from fastapi import Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security  import  HTTPBasic , HTTPBasicCredentials 
from fastapi.security import OAuth2PasswordBearer
import random 
from supabase import create_client, Client

url = "https://eourvyqlvhxbxlxqyljy.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvdXJ2eXFsdmh4YnhseHF5bGp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTEyMDYwNSwiZXhwIjoyMDM2Njk2NjA1fQ.EBkkyKuVvHH27AQ09IhQAYHIRkqcEqPYMqojyqv0wCQ"


app = FastAPI()
supabase: Client = create_client(url, key)

origins = [
    "http://localhost:3000",  # 允許這個來源
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # 你可以限制特定的來源
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sessions = {}

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
@app.get("/auth")
async def auth(session_id: str = Depends(oauth2_scheme)):
    # print(session_id)
    if session_id is None or int(session_id) not in sessions:
        raise HTTPException(
            status_code=401,
            detail="Invalid session ID",
        )
    user = supabase.table("member").select("name").eq("id", sessions[int(session_id)]).execute()
    # print(user.data[0]['name'])
    if len(user.data):
        return user.data[0]['name']
    return ""

@app.post("/login")
async def login(formData: dict):
    res = supabase.table("member").select("*").eq("email", formData['email']).eq("password", formData['password']).execute()
    print("From login:",res)
    def create_session(user_id: int):
        session_id = len(sessions) + random.randint(0, 1000000)
        sessions[session_id] = user_id
        return session_id

    session_id = create_session(res.data[0]["id"])
    if len(res.data)>0:
        return {"message": "Login Successfully", "session_id": session_id}
    return {"message": "Login Failed"}

@app.post("/register")
async def register(formData: dict):
    if len(formData['cardID'])!=12 or formData['cardID'].isdigit()==False:
        raise HTTPException(
            status_code=401,
            detail="Invalid card ID",
        )
    user = supabase.table("member").insert({"name": formData['name'], "cardID": formData['cardID'], "email": formData['email'], "password": formData['password']}).execute()
    if user:
        return {"message": "User created successfully"}
    return {"message": "User creation failed"}