# Personal Portfolio Website

A dynamic, multi-page personal portfolio built to showcase projects, education, and credentials, featuring a fully functional contact form that emails messages directly to the owner.

## 🚀 Tech Stack
* **Frontend:** React (Vite), Tailwind CSS v4, Lucide React (Icons)
* **Backend:** Node.js, Express.js (ES Modules)
* **Email Integration:** Nodemailer with Google App Passwords

## ✨ Features
* **Modular Multi-Page UI:** Clean navigation between About, Projects, Education, and Contact sections using React state.
* **Direct Downloads:** Hosted Resume and Grade Card PDFs for instant recruiter access.
* **Live Contact Form:** Real-time email delivery directly to a Gmail inbox using Nodemailer.
* **Responsive Design:** Mobile-friendly layout powered by Tailwind CSS.

## 💻 Local Development Setup

### Prerequisites
* Node.js installed on your machine.
* A Gmail account with 2-Step Verification and an App Password generated.

### 1. Backend Setup
1. Open a terminal and navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `backend` folder with your credentials:
   ```env
   PORT=5000
   ALLOWED_ORIGIN=http://localhost:5173
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_16_letter_app_password