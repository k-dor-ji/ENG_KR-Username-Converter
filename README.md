# Hangul Name Converter (HNC)

## Overview

The Hangul Name Converter (HNC) is a full stack web application inspired by a popular Korean trend of creating usernames by spatially mapping Korean Hangul names to QWERTY English layouts. The project uses Python for linguistic mapping and React/Tailwind CSS for a sleek user interface.

## Architecture

- **Frontend:** React + Tailwind CSS (via Vite)
- **Backend:** FastAPI (Python) on Uvicorn server
- **Libraries:**  
  - `jamo` for decomposing Hangul  
  - `googletrans` for translation  
  - `time` and `logging` for internal features

### Project Structure
```
HNC/
├─ backend/
│ ├─ krList.py
│ ├─ krMappings.py
│ ├─ main.py
│ ├─ nameConvert.py
│ ├─ requirements.txt
│ ├─ translation.log
├─ frontend/
│ ├─ public/
│ ├─ src/
│ ├─ package.json
│ ├─ mapping.jsx
└─ README.md
```
## Features

- Converts English usernames to QWERTY-mapped Korean equivalents via API
- React frontend with instant output updates
- Python backend for translation, decomposition, and QWERTY mapping

### Workflow

1. Validate input in frontend
2. Send POST request to backend `/convert` endpoint
3. Backend processes:
    - Overrides check
    - English to Korean translation
    - Hangul decomposition
    - QWERTY mapping
4. Result instantly displayed on frontend

## Setup

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend
```
cd backend
python -m venv venv
source venv/bin/activate # For Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
### Frontend

```
cd hnc
npm install
npm run dev
```

## Future Improvements

- Improved error handling
- Enhanced translation logic
- Cloud deployment
- Save and export functions
- Reverse QWERTY-to-Hangul conversion
- Support for non-translatable usernames

---
