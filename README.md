# 🔐 Secure Login System using Firebase

A simple and secure login & registration web app built using **Firebase Authentication**, HTML, CSS, and JavaScript. This project features a modern UI, glowing animations, and Firebase-backed email/password-based authentication.

---

## 🚀 Features

- ✅ User Registration with email & password
- ✅ User Login & session handling via Firebase
- ✅ Real-time form validation and alerts
- 🌌 Beautiful UI with night sky & glowing star background
- 🌙 Animated heading and interactive form styling
- 📱 Fully responsive layout for mobile and desktop

---

## 🧰 Tech Stack

| Frontend | Backend/Auth |
|----------|--------------|
| HTML5    | Firebase Authentication |
| CSS3     | Firebase Project (no custom backend) |
| JavaScript | Firestore (optional for future use) |
| Vercel/Netlify (for deployment) | |

---

## 📸 Screenshots

| Registration Page | Login Page |
|-------------------|------------|
| ![Register](screenshots/register.png) | ![Login](screenshots/login.png) |

📌 *Add your own screenshots by placing them in a `/screenshots` folder in the root of the project.*

---

## 🔧 Installation (Local Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/secure-firebase-login.git

# Navigate to project folder
cd secure-firebase-login

# Open index.html directly in your browser (no build needed)

Perfect! Here's your full section formatted beautifully for a `README.md` file. You can copy-paste this directly under your Features or Installation section.

---

## 🔐 Firebase Setup Instructions

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add Project"** and give your project a name
3. In the project dashboard:
   - Go to **Authentication > Sign-in method**
   - Enable **Email/Password** authentication
4. Go to **Project Settings > General > Your Apps**
   - Add a new **Web App** (</>)
   - Copy the **Firebase Config**
5. Paste the config inside your `script.js` (or `index.html` if you're keeping it inline):

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "sender-id",
  appId: "your-app-id"
};
```

---

## 🧠 What I Learned

- 🔐 Firebase Authentication basics (email/password login)
- ✨ DOM manipulation and client-side form validation
- 🧠 How to handle sessions and alerts dynamically with JavaScript
- 🎨 CSS animations and building responsive layouts
- 🚀 Hosting with Vercel and GitHub project publishing

---

## 🛠️ Future Enhancements

- 🔁 **Forgot Password** recovery using Firebase’s password reset feature
- 🔒 **Password Strength Meter** with real-time feedback
- ☁️ Integration with **Firestore** to store user-specific data
- 📊 A secure **User Dashboard** with session-based access

---
