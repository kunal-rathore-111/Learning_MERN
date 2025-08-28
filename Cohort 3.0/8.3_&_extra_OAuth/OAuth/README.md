# Google OAuth Authentication System
A complete Google OAuth authentication system built with Node.js, Express, and MongoDB. It allows users to log in with their Google accounts and provides session-based authentication with logout functionality and a minimal responsive frontend.

---

## ✨ Features
- Google OAuth 2.0 authentication via Passport  
- Session management with express-session  
- MongoDB integration for persistent user storage  
- CORS enabled for cross-origin requests  
- Lightweight frontend with dynamic DOM updates  
- Production-ready Vercel deployment configuration  
- Support for both development and production environments  

---

## 📁 Project Structure
```text
OAuth/
├── client/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server/
│   ├── db/
│   │   ├── db.js
│   │   └── userModel.js
│   ├── node_modules/
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── vercel.json
│   └── .gitignore
└── README.md
```

---

## 🚀 Quick Start
### 1) Install Dependencies
```bash
cd server
npm install
```

### 2) Create .env
```text
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGOO_URL=your_mongodb_connection_string
```

### 3) Google OAuth Setup (Console)  
- Go to Google Cloud Console → APIs & Services → Credentials.  
- Create OAuth 2.0 Client ID (Application type: Web application).  
- Add Authorized redirect URIs for both environments:  

Production: `https://your-vercel-app.vercel.app/google/callback`  
Development: `http://localhost:3000/google/callback`  

Copy the Client ID and Client Secret into your .env.  

### 4) Run the Server
```bash
npm run dev  # nodemon (recommended for development)
# or
npm start    # node index.js
```

### 5) Open the Frontend  
Open `client/index.html` in a web browser or serve it with a local server.  

---

## 🔧 Configuration
### Environment Variables  
Update these URLs in `server/index.js` based on your environment:  

```javascript
// For production:
const serverUrl = "https://your-vercel-app.vercel.app";
const clientUrl = "https://your-vercel-frontend.vercel.app";

// For development:
// const serverUrl = "http://localhost:3000";
// const clientUrl = "http://localhost:5500";
```

### Vercel Deployment  
The project includes `vercel.json` for seamless deployment to Vercel.  

---

## 🚪 API Endpoints
| Method | Path             | Description                          |
|--------|------------------|--------------------------------------|
| GET    | /auth/google     | Initiates Google OAuth flow          |
| GET    | /google/callback | Google OAuth callback handler        |
| GET    | /logout          | Logs out the current session         |
| GET    | /isloggedin      | Returns auth status of current session |
| GET    | /                | Server status check                  |

#### Example (check login status)
```bash
curl -i http://localhost:3000/isloggedin
```

#### Example (logout)
```bash
curl -i http://localhost:3000/logout
```

---

## 🛡️ Technologies
- Node.js, Express.js  
- Passport.js (Google OAuth 2.0 Strategy)  
- MongoDB + Mongoose  
- express-session  
- CORS  
- Axios (for frontend API calls)  
- Vercel (for deployment)  

---

## 🔒 Security Notes
- Always set strong environment variables in .env  
- Use HTTPS and secure cookies in production  
- Restrict OAuth credentials to your domains in production  
- Never commit .env or secrets to version control  

---

## 🐛 Troubleshooting
- **Redirect URI mismatch**: Ensure callback URLs in Google Console match exactly  
- **CORS errors**: Confirm frontend origin is allowed in CORS config  
- **Session not persisting**: Check cookie settings and SESSION_SECRET  
- **MongoDB connection issues**: Verify `MONGOO_URL` is correct  

---

## 📝 Scripts
Common `package.json` scripts:
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

---

## 🔄 Authentication Flow  
1. User clicks Login with Google → `/auth/google`  
2. Google redirects to `/google/callback` → server verifies & creates session  
3. Frontend calls `/isloggedin` to render UI state (welcome + logout)  
4. Logout → `/logout` destroys the session  

---

## 📄 License  
MIT