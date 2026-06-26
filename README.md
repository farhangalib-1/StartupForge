# 🚀 StartupForge
<img width="1918" height="812" alt="image" src="https://github.com/user-attachments/assets/fd7ab3b4-9a90-4b80-968d-f634983d07ba" />


StartupForge is a full-stack startup collaboration platform where founders can showcase their startups, publish recruitment opportunities, and build talented teams. Developers, designers, marketers, and other professionals can discover exciting startup opportunities and apply to join innovative projects.

## 🌐 Live Website

🔗 [Live link](https://startup-forge-plum.vercel.app/)

## 🎯 Project Purpose

StartupForge bridges the gap between startup founders and skilled professionals by providing a centralized platform to:

- Showcase startups
- Recruit talented team members
- Discover startup opportunities
- Apply for startup roles
- Build collaborative teams

---

## ✨ Key Features

### 👨‍💼 Founder Features

- Create and manage startup profiles
- Publish recruitment opportunities
- Edit and delete opportunities
- View received applications
- Track opportunity status

### 👨‍💻 Applicant Features

- Browse approved startups
- Explore available opportunities
- View detailed opportunity information
- Apply for startup roles
- Manage submitted applications

### 🔐 Authentication

- Secure authentication using Better Auth
- Protected dashboard routes
- Role-based user access

### ⭐ Platform Features

- Featured Startups section
- Featured Opportunities section
- Opportunity Details page
- Startup Details page
- Responsive design
- Light & Dark mode support
- Beautiful HeroUI interface

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- React 19
- Tailwind CSS
- HeroUI
- Lucide React
- Framer Motion

### Backend

- Express.js
- MongoDB
- Better Auth

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## 📂 Main Pages

- Home
- Browse Startups
- Startup Details
- Browse Opportunities
- Opportunity Details
- Dashboard
- My Startups
- My Opportunities
- My Applications
- Authentication

---

## 🔒 Protected Routes

Only authenticated users can access:

- Dashboard
- Create Startup
- Manage Startups
- Post Opportunities
- Apply to Opportunities
- My Applications

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/startupforge-client.git
```

Move into the project

```bash
cd startupforge-client
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
NEXT_PUBLIC_SERVER_URL=your_backend_url
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Start the development server

```bash
npm run dev
```

---

## ⚙️ Backend Setup

Clone backend repository

```bash
git clone https://github.com/your-username/startupforge-server.git
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

Run server

```bash
npm start
```

---

## 📁 Folder Structure

```
app/
components/
lib/
public/
middleware.js
```

---

## 🚀 Future Improvements

- Real-time notifications
- Messaging system
- Resume upload
- Company verification
- Search & filtering
- Saved opportunities
- Team chat
- AI-powered startup recommendations

---



## 📜 License

This project is licensed under the MIT License.
