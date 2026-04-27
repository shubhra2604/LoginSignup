# 🚀 LoginSignup - Full Stack Authentication App

A complete **MERN stack authentication system** with secure login, signup, and protected user dashboard. This project demonstrates real-world full-stack development with proper deployment and authentication practices.

---

## 🌐 Live Demo

- **Frontend**: https://login-app-client-t61m.onrender.com
- **Backend API**: https://login-app-server-uu44.onrender.com

---

## 🛠 Tech Stack

### Frontend

- React 18 (Vite)
- React Router
- Context API (State Management)

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas

### Authentication

- JWT (JSON Web Tokens)
- bcryptjs (Password Hashing)

---

## 🏗 Architecture

Frontend (React + Vite) → Render Static Site
Backend (Node + Express) → Render Web Service
Database → MongoDB Atlas
Authentication → JWT-based system

---

## ✨ Features

- ✅ User Signup & Login
- ✅ Secure Authentication with JWT
- ✅ Protected Routes (Frontend + Backend)
- ✅ User Dashboard
- ✅ Logout Functionality
- ✅ Password Hashing (bcrypt)
- ✅ Error Handling & Validation
- ✅ Fully Deployed (Frontend + Backend)

---

## 📂 Project Structure

```
LoginSignup/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── server/                # Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/shubhra2604/LoginSignup.git
cd LoginSignup
```

---

### 2️⃣ Backend Setup

```
cd server
npm install
cp .env.example .env
```

Update `.env`:

```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`server/.env`)

```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Frontend (`client/.env`)

```
VITE_API_URL=http://localhost:5000
```

---

## 📡 API Endpoints

### 🔹 Signup

**POST** `/api/auth/signup`

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "passwordConfirm": "password123"
}
```

---

### 🔹 Login

**POST** `/api/auth/login`

```
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### 🔹 Get Current User

**GET** `/api/auth/me`
(Requires JWT Token)

---

## 📸 Screenshots

> _(Add screenshots here before submitting)_

```
/screenshots/login.png
/screenshots/dashboard.png
```

---

## 🚀 Deployment

- **Frontend** deployed on Render (Static Site)
- **Backend** deployed on Render (Web Service)
- MongoDB hosted on MongoDB Atlas

---

## ⚠️ Challenges Faced

- Handling **client-side routing issue on refresh** (fixed using rewrite rules)
- Debugging **build failures in CI/CD (Render)**
- Managing **environment variables across frontend & backend**
- Properly separating **client and server deployment**

---

## 💡 Why This Project?

This project demonstrates:

- Full-stack development using MERN stack
- Secure authentication system using JWT
- Real-world deployment with frontend + backend separation
- Debugging and problem-solving in production environments

---

## 🔮 Future Improvements

- Email verification system
- Password reset functionality
- Social login (Google, GitHub)
- Refresh token implementation
- Rate limiting & security enhancements
- Logging and monitoring

---

## ❤️ Author

**Shubhra Kiran Bid**
GitHub: https://github.com/shubhra2604

---

## ⭐ Final Note

This project was built as part of an internship assessment to showcase **full-stack development, deployment, and authentication skills**.

---
