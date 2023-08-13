# Playing with FastAPI documentation

## setting up virtual  environment
python3 -m venv env
source .evn/bin/activate

## packages needed
pip install fastapi
pip install "uvicorn[standard]"

or
pip install -r requirements.txt

## Run the app
uvicorn main:app --reload