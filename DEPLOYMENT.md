# Deployment Guide

## Step 1: Deploy Backend

### Option A: Deploy to Railway (Recommended - Free)

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project" → "Deploy from GitHub"
   - Select your LoginPage repository
   - Select the `server` folder as the root directory
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A strong random string
     - `CLIENT_URL`: Your frontend Vercel URL (e.g., https://youruserame-login.vercel.app)
     - `NODE_ENV`: production
   - Deploy!

3. **Get Backend URL**
   - Railway will provide your backend URL: `https://your-app.railway.app`
   - Note this for the frontend setup

### Option B: Deploy to Heroku

1. Go to [heroku.com](https://heroku.com) and create account
2. Install Heroku CLI: `brew tap heroku/brew && brew install heroku`
3. Login: `heroku login`
4. Create app: `heroku create your-app-name`
5. Add buildpack: `heroku buildpacks:add heroku/nodejs`
6. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI="your_mongodb_uri"
   heroku config:set JWT_SECRET="your_secret"
   heroku config:set CLIENT_URL="your_frontend_url"
   ```
7. Deploy: `git push heroku main`

## Step 2: Deploy Frontend to Vercel

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "LoginPage/client" as the root directory
   - Add environment variable:
     ```
     VITE_API_URL=https://your-backend-url.railway.app
     ```
   - Click "Deploy"

3. **Get Frontend URL**
   - Your app will be live at Vercel's provided URL

## Step 3: Update API Configuration

1. **Update Backend CLIENT_URL**
   - Go back to Railway/Heroku dashboard
   - Update `CLIENT_URL` to your Vercel frontend URL
   - Redeploy if necessary

2. **Frontend API Configuration**
   - The `VITE_API_URL` environment variable should point to your backend
   - Ensure `/api/client/src/api.js` uses the correct base URL

## Step 4: Test Production

1. Go to your Vercel frontend URL
2. Try signing up with a new account
3. Check MongoDB Atlas to verify user was created
4. Login with the same credentials
5. Verify you see your user info on the dashboard

## MongoDB Atlas Setup (If not done yet)

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account
3. Click "Create" to build a new cluster
4. Choose free tier (M0)
5. Select AWS and a region close to you
6. Click "Create Deployment"
7. Create database user:
   - Username: `your_username`
   - Password: Generate a strong password
8. Get connection string:
   - Click "Connect"
   - Choose "Drivers"
   - Copy connection string
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

## Environment Variables Summary

### Backend (.env)

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_super_secret_key_minimum_32_characters
PORT=5000
NODE_ENV=production
CLIENT_URL=https://your-domain.vercel.app
```

### Frontend (Vercel)

```
VITE_API_URL=https://your-backend-url.railway.app
```

## Verify Deployment

✅ Frontend loads at Vercel URL
✅ Can access login page
✅ Can sign up with new email
✅ User data saved in MongoDB
✅ Can login with credentials
✅ Dashboard shows user info
✅ Logout works correctly

## Troubleshooting

**"Failed to fetch" errors**

- Check backend URL in environment variables
- Ensure backend is running and accessible
- Check CORS settings in backend

**MongoDB connection error**

- Verify connection string syntax
- Check username and password
- Ensure IP address is whitelisted in MongoDB Atlas

**Token issues**

- Clear browser localStorage
- Logout and login again
- Check JWT_SECRET is consistent

## Monitoring

### View Backend Logs

- Railway: Dashboard → Logs
- Heroku: `heroku logs --tail`

### Monitor Database

- MongoDB Atlas → Collections → Monitor usage

### Frontend Performance

- Vercel Analytics: Dashboard → Analytics

## Custom Domain (Optional)

### On Vercel

1. Go to Project Settings → Domains
2. Add custom domain
3. Update DNS records at your domain provider

### On Railway

1. Go to Project → Settings → Networking
2. Add custom domain
3. Update DNS records

---

Once deployed, share your live URLs with others to test the application!
