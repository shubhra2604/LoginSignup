# Deployment Guide: Render & GitHub

Deploy your Login App to Render using GitHub integration.

## Prerequisites

- GitHub account (code already pushed)
- Render account (free tier available at [https://render.com](https://render.com))
- MongoDB Atlas account (for database)

## Step 1: Set Up MongoDB Atlas

If you haven't already:

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your database credentials
6. Add Render's IP addresses to Network Access:
   - In MongoDB Atlas: **Network Access** → **Add IP Address**
   - Click "Allow Access from Anywhere" (for development) or add `0.0.0.0/0`

**Your MongoDB URI will look like:**
```
mongodb+srv://username:password@cluster.mongodb.net/loginapp?retryWrites=true&w=majority
```

## Step 2: Deploy Server to Render

### 2.1 Create a New Web Service

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click "New+" → "Web Service"
3. Select "Deploy an existing repository"
4. Connect your GitHub account and authorize Render
5. Select your `LoginSignup` repository
6. Click "Connect"

### 2.2 Configure the Web Service

Fill in the following details:

| Field | Value |
|-------|-------|
| **Name** | `login-app-server` (or your preferred name) |
| **Environment** | `Node` |
| **Region** | Select closest to your users |
| **Branch** | `main` |
| **Build Command** | `npm install` |
| **Start Command** | `node server/server.js` |
| **Plan** | `Free` (or Starter for production) |

### 2.3 Add Environment Variables

Click "Advanced" and add environment variables:

```
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
NODE_ENV = production
CLIENT_URL = https://your-client-domain.onrender.com
PORT = 5001
```

### 2.4 Deploy

Click "Create Web Service"

**Wait for deployment to complete.**

Your server will be available at: `https://login-app-server.onrender.com` (or similar)

**Note:** On Render's free tier, the service will spin down after 15 minutes of inactivity. Upgrade to Starter ($7/month) for 24/7 availability.

## Step 3: Deploy Client to Render

### 3.1 Create a New Static Site

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click "New+" → "Static Site"
3. Select "Deploy an existing repository"
4. Select your `LoginSignup` repository
5. Click "Connect"

### 3.2 Configure the Static Site

Fill in the following:

| Field | Value |
|-------|-------|
| **Name** | `login-app-client` |
| **Root Directory** | `client` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### 3.3 Add Environment Variables

In the "Environment" section, add:

```
VITE_API_URL = https://login-app-server.onrender.com
```

(Replace with your actual server URL from Step 2)

### 3.4 Deploy

Click "Create Static Site"

**Wait for deployment to complete.**

Your client will be available at: `https://login-app-client.onrender.com` (or similar)

## Step 4: Update Server Environment Variable

Now that you have the client URL, go back to the **server** service:

1. Click on your `login-app-server` service
2. Go to **Settings** → **Environment**
3. Update `CLIENT_URL` to your actual client domain: `https://login-app-client.onrender.com`
4. Scroll down and click **Deploy** to redeploy with the updated configuration

## Step 5: Test Your Deployment

1. Visit your client URL: `https://login-app-client.onrender.com`
2. Try signing up with a new email
3. Login with the same credentials
4. Verify you can access the dashboard

## Continuous Deployment

Both services are connected to your GitHub repository. Every push to the `main` branch will automatically trigger a new deployment.

To deploy changes:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Watch the deployments in real-time in your Render dashboard.

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:

1. Go to your **server** service on Render
2. Check that `CLIENT_URL` environment variable is set correctly
3. Verify `server.js` has:
   ```javascript
   cors({
     origin: process.env.CLIENT_URL,
     credentials: true,
   })
   ```
4. Redeploy the server

### MongoDB Connection Failed

1. Verify `MONGODB_URI` is correct in server environment variables
2. Check MongoDB Atlas Network Access allows your IP
3. Try adding `0.0.0.0/0` (allow anywhere) temporarily to test
4. Ensure the database user has permission to access your database

### Service Not Starting

1. Check **Logs** in your Render service dashboard
2. Verify `Start Command` is correct: `node server/server.js`
3. Ensure `PORT` is set to `5001` (or leave unset for auto-assignment)
4. Check that all environment variables are set

### Slow First Request

On the free tier, services spin down after 15 minutes. The first request after spindown takes ~30 seconds to wake up. This is normal.

**Solution:** Upgrade to a Starter plan ($7/month) for 24/7 availability.

## Render Plans

| Plan | Cost | Features |
|------|------|----------|
| **Free** | $0 | Auto-spin down, limited resources |
| **Starter** | $7/month | 24/7 availability, more resources |
| **Standard** | $12/month | Higher performance |
| **Pro** | $19/month | Production-grade |

For production use, Starter plan is recommended.

## Rollback

If you need to rollback to a previous deployment:

1. Go to your service on Render
2. Click **Deploys**
3. Find the deployment you want
4. Click **"Re-deploy"** or **"Rollback"** if available

## Custom Domain (Optional)

To use your own domain:

1. Go to your service → **Settings**
2. Scroll to **Custom Domain**
3. Enter your domain (e.g., `app.yourdomain.com`)
4. Update your DNS records as instructed

## Monitoring

Render provides basic monitoring. For more advanced monitoring:

1. Install **Sentry** for error tracking (free tier available)
2. Use **Loggly** or **Papertrail** for log aggregation
3. Set up **Uptime monitoring** with a service like UptimeRobot (free)

## Need Help?

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Node.js Deployment Guide](https://render.com/docs/deploy-node)
