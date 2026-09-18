# Simamkele Tancu - Portfolio Website

A modern, responsive portfolio website built with **Angular** (frontend) and **Express.js + MongoDB** (backend). This portfolio showcases projects, education, work experience, testimonials, and provides a contact form.

## 🚀 Quick Start

### Prerequisites
- Node.js v26.0.0 or higher
- npm v11 or higher
- MongoDB (MongoDB Atlas account recommended)

### Installation

1. **Clone/Navigate to the project:**
   ```bash
   cd Simamkele-Tancu-New-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start both frontend and backend:**
   ```bash
   npm run dev
   ```

   This will start:
   - **Backend:** http://localhost:5000
   - **Frontend:** http://localhost:4200

## 📁 Project Structure

```
Simamkele-Tancu-New-Portfolio/
├── client/                 # Angular Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/           # Page components (Home, About, etc.)
│   │   │   ├── components/      # Reusable components (Navbar, etc.)
│   │   │   ├── services/        # API service
│   │   │   ├── app.routes.ts    # Routing configuration
│   │   │   └── app.ts           # Root component
│   │   ├── assets/              # Images, CV, etc.
│   │   └── styles.css           # Global styles
│   └── package.json
│
├── server/                 # Express Backend
│   ├── src/
│   │   ├── routes/              # API endpoints
│   │   ├── models/              # MongoDB schemas
│   │   ├── utils/               # Helper functions (email, etc.)
│   │   ├── middleware/          # Custom middleware
│   │   ├── scripts/             # Utility scripts (seeding)
│   │   └── config/              # Configuration files
│   ├── index.js                 # Server entry point
│   ├── .env                     # Environment variables
│   └── package.json
│
└── package.json           # Root package (for concurrent scripts)
```

## 🔧 Available Commands

### Root Level
```bash
npm run dev              # Run both backend and frontend simultaneously
npm run build           # Build production frontend
npm run build:full      # Build frontend + status message
```

### Backend Only
```bash
cd server
npm run dev             # Run with watch mode (hot reload)
npm start               # Run production mode
npm run seed            # Populate database with sample data
```

### Frontend Only
```bash
cd client
npm run dev             # Run with hot reload and auto-open browser
npm start               # Run dev server
npm run build           # Build for production
```

## 📊 Database Setup

### 1. Configure MongoDB Connection

Edit `server/.env` and ensure you have:
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/simamkele-portfolio
PORT=5000
NODE_ENV=development
GMAIL_EMAIL=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password
CORS_ORIGIN=http://localhost:4200
```

### 2. Populate Database with Sample Data

```bash
cd server
npm run seed
```

This will populate your MongoDB with:
- 6 Projects (Gentlemans Edge Barber, Simamkele Enterprises, Vue Portfolio, Fitness For All, Temperature Converter, Calculator)
- 1 Testimonial (from Siyamthanda Tsobo)

## 🎨 Features

- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Dynamic Content** - Projects and testimonials loaded from MongoDB
- ✅ **Contact Form** - Email notifications via Gmail SMTP
- ✅ **Light Theme** - Clean, modern Bootstrap-based styling
- ✅ **Smooth Navigation** - Angular routing with active link highlighting
- ✅ **Professional Layout** - Navbar, hero section, cards, footer

## 📄 Pages

1. **Home** - Hero section with profile image, introduction, and contact info
2. **About** - Bio, skills, and social links (GitHub, LinkedIn)
3. **Resume** - Education, work experience, and skills
4. **Projects** - Showcase of all projects fetched from database
5. **Testimonials** - References from colleagues and mentors
6. **Contact** - Contact form with email submission

## 🔌 API Endpoints

### Public Endpoints
```
GET    /api/health                  # Health check
GET    /api/projects                # Get all projects
GET    /api/projects/:id            # Get single project
POST   /api/projects                # Create project
GET    /api/testimonials            # Get all testimonials
GET    /api/testimonials/:id        # Get single testimonial
POST   /api/testimonials            # Create testimonial
POST   /api/contact                 # Submit contact form
GET    /api/contact                 # Get all contact submissions
```

## � Deployment Guide

### Frontend Deployment (Vercel)

The frontend is configured to deploy automatically to Vercel.

**Environment Variables needed in Vercel:**
- `API_URL` - Your backend API URL (e.g., https://your-backend.railway.app)

**Steps:**
1. Connect your GitHub repository to Vercel
2. Set the build command to `npm run build:vercel` (already configured in package.json)
3. Set output directory to `client/dist`
4. Add environment variables in Vercel dashboard
5. Deploy!

### Backend Deployment (Railway/Render/Heroku)

Choose one platform and follow these steps:

#### Option 1: Railway.app (Recommended)
1. Push your code to GitHub
2. Go to [Railway.app](https://railway.app)
3. Create new project → Deploy from GitHub
4. Select this repository
5. Add these environment variables:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `PORT` - 3000 or 5000
   - `NODE_ENV` - production
   - `GMAIL_EMAIL` - Your Gmail address
   - `GMAIL_PASSWORD` - Your Gmail app password
   - `CORS_ORIGIN` - Your frontend URL (e.g., https://your-domain.vercel.app)
6. Deploy!

#### Option 2: Render.com
1. Push your code to GitHub
2. Go to [Render.com](https://render.com)
3. Create → New Web Service
4. Connect GitHub repository
5. Configure:
   - Start Command: `node server/index.js`
   - Build Command: `npm install`
   - Environment: Node
   - Add same environment variables as Railway
6. Deploy!

#### Option 3: Heroku
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Run:
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   heroku config:set MONGODB_URI=your_connection_string
   heroku config:set NODE_ENV=production
   ```

### Environment Variables Template

Create a `.env` file in the `server/` directory:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/simamkele-portfolio

# Server
PORT=5000
NODE_ENV=production

# Email (Gmail SMTP)
GMAIL_EMAIL=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password

# CORS
CORS_ORIGIN=https://your-domain.vercel.app
```

**To get Gmail App Password:**
1. Enable 2-Factor Authentication on Google Account
2. Go to [Google Account → Security → App passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail" and "Windows Computer"
4. Use this password in `GMAIL_PASSWORD`

## �💌 Email Configuration

### Using Gmail SMTP

1. Enable 2-Step Verification in your Google Account
2. Go to **myaccount.google.com** → **Security** → **App passwords**
3. Select "Mail" and "Windows Computer"
4. Generate a 16-character app password
5. Add to `server/.env`:
   ```env
   GMAIL_PASSWORD=your_16_char_app_password
   ```

## 🛠️ Troubleshooting

### "Cannot find module 'bootstrap-icons'"
```bash
cd client
npm install bootstrap-icons
```

### "MongoDB connection failed"
- Check your connection string in `.env`
- Ensure your IP address is whitelisted in MongoDB Atlas
- Verify network connectivity

### "Port already in use"
- Change `PORT` in `.env` (default 5000)
- Or kill the existing process using that port

## 📦 Build & Deploy

### Frontend
```bash
cd client
npm run build
# Output in: client/dist/
```

Deploy to Vercel, Netlify, or GitHub Pages.

### Backend
Deploy to Railway, Heroku, or your preferred Node.js hosting.

Update `CORS_ORIGIN` in `.env` to match your deployed frontend URL.

## 📝 License

© 2024 Simamkele Tancu. All rights reserved.

## 📧 Contact

- Email: princetancu06@gmail.com
- Phone: 0656013640
- Location: Cape Town, Western Cape
- GitHub: https://github.com/Simamkele20
- LinkedIn: https://www.linkedin.com/in/simamkele-tancu-a74744262/
