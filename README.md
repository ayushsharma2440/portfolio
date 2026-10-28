# Ayush Sharma � Portfolio

A full-stack developer portfolio built with **React + Vite** (frontend) and **Node.js + Express + MongoDB** (backend).

?? **Live Demo:** : https://portfolio-one-sage-roo1l1mxcl.vercel.app

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, Vite, Bootstrap 5, React Router |
| Backend | Node.js, Express, MongoDB (Atlas) |
| Deployment | Railway |

---

## Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repo
```bash
git clone https://github.com/ayushsharma2440/portfolio.git
cd portfolio
```

### 2. Backend
```bash
cd backend
cp .env.example .env   # fill in your MONGO_URI and FRONTEND_URL
npm install
npm start              # runs on http://localhost:5000
```

### 3. Frontend
```bash
cd frontend
cp .env.example .env   # set VITE_API_URL=http://localhost:5000
npm install
npm run dev            # runs on http://localhost:5173
```

---

## Environment Variables

### `backend/.env`
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: `5000`) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `FRONTEND_URL` | Frontend URL for CORS (e.g. `http://localhost:5173`) |

### `frontend/.env`
| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL (e.g. `http://localhost:5000`) |

---

## Features

- ?? Dark / Light mode toggle
- ?? Resume download as **PDF** or **DOCX** (served from backend)
- ?? Contact form with MongoDB storage
- ? Particle animations, smooth transitions
- ?? Fully responsive

---

> Built by [Ayush Sharma](https://github.com/ayushsharma2440)
