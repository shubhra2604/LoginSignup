# Deployment Guide: Vercel & GitHub

This guide covers deploying the Login App to Vercel using GitHub.

## Prerequisites

- GitHub account (with code pushed)
- Vercel account (free tier available)
- MongoDB Atlas account (for database)

## Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy Server to Vercel

### 2.1 Connect Server Repository

1. Go to [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Choose the `server` directory as the root directory
5. Click "Deploy"

### 2.2 Set Environment Variables

After deployment, go to **Settings → Environment Variables** and add:

```
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
NODE_ENV = production
CLIENT_URL = https://your-client-domain.vercel.app
```

Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas):

1. Create a cluster
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your database credentials

### 2.3 Redeploy

After setting environment variables, click "Redeploy" to apply them.

**Your server URL:** `https://your-server-name.vercel.app`

## Step 3: Deploy Client to Vercel

### 3.1 Create New Project for Client

1. Go to [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository again
4. Choose the `client` directory as the root directory
5. Under "Build and Output Settings", ensure:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### 3.2 Set Environment Variables

Go to **Settings → Environment Variables** and add:

```
VITE_API_URL = https://your-server-name.vercel.app
```

### 3.3 Redeploy

After setting environment variables, click "Redeploy".

**Your client URL:** `https://your-client-name.vercel.app`

## Step 4: Update Server Environment Variables

Go back to your server project on Vercel and update:

```
CLIENT_URL = https://your-client-name.vercel.app
```

Then redeploy the server.

## Step 5: Update Client API URL (if needed)

If the client's `api.js` uses hardcoded localhost, update it to use the environment variable:

```javascript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";
```

Then redeploy the client.

## Testing Deployment

1. Visit your client URL: `https://your-client-name.vercel.app`
2. Try signing up with a new account
3. Try logging in
4. Verify the token is stored correctly

## Continuous Deployment

Both projects are now connected to your GitHub repository. Any push to the main branch will automatically trigger a deployment.

## Troubleshooting

### CORS Issues

If you see CORS errors, ensure your server's `server.js` has the correct CLIENT_URL:

```javascript
cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
});
```

### MongoDB Connection Error

- Verify your MongoDB URI is correct
- Add Vercel IP addresses to MongoDB Atlas Network Access whitelist
- In MongoDB Atlas → Network Access, click "Allow Access from Anywhere" (or add Vercel's IP)

### Environment Variables Not Loading

- Redeploy after adding environment variables
- Check if the variable name matches in code and Vercel dashboard

## Rollback

To rollback to a previous deployment:

1. Go to Vercel project
2. Click "Deployments"
3. Select the deployment you want
4. Click "Promote to Production"
