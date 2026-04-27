# Login App - Full Stack Authentication

A complete MERN stack authentication application with login, signup, and user dashboard.

## Tech Stack

- **Frontend**: React 18 + Vite + React Router
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

```
LoginPage/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Auth context
│   │   ├── api.js         # API calls
│   │   ├── App.jsx        # Main app
│   │   └── index.css      # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── server/                # Express backend
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    ├── middleware/        # Custom middleware
    ├── server.js          # Main server
    ├── package.json
    └── .env.example
```

## Setup Instructions

### 1. MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Create a database user with read/write access
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

### 2. Backend Setup

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env` with your values:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_secret_key_here
PORT=5000
CLIENT_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

Server runs at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

## Features

✅ User Registration (Signup)
✅ User Login with JWT
✅ Protected Routes
✅ User Dashboard
✅ Logout Functionality
✅ Password Hashing with bcrypt
✅ Email Validation
✅ Error Handling

## API Endpoints

**POST** `/api/auth/signup` - Register new user

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "passwordConfirm": "password123"
}
```

**POST** `/api/auth/login` - Login user

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**GET** `/api/auth/me` - Get current user (requires JWT token)

## Deployment on Vercel

### Backend Deployment (Railway/Heroku Alternative)

Since Vercel is primarily for frontend, deploy backend to:

- **Railway**: [railway.app](https://railway.app) - Free, easy setup
- **Heroku**: [heroku.com](https://heroku.com)
- **Render**: [render.com](https://render.com)

### Frontend Deployment

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set environment variables:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```
5. Deploy!

## Testing

1. Sign up with a new account
2. Verify the user is stored in MongoDB
3. Login with the credentials
4. View the dashboard
5. Logout

## Security Features

- Passwords hashed with bcryptjs
- JWT token-based authentication
- Protected API routes
- Email validation
- CORS enabled for frontend

## Troubleshooting

**"Cannot connect to MongoDB"**

- Check your connection string in `.env`
- Ensure IP whitelist includes your IP on MongoDB Atlas

**"CORS error"**

- Check `CLIENT_URL` in backend `.env`
- Ensure it matches your frontend URL

**"Token expired"**

- Clear localStorage and login again
- Token expires in 7 days

## Next Steps

- Add email verification
- Add password reset functionality
- Add user profile editing
- Add social login (Google, GitHub)
- Add refresh tokens
- Implement rate limiting
- Add logging and monitoring

---

Built with ❤️ for learning MERN stack
