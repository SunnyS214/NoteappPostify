# 💬 MERN Stack Real-Time Chat Application  

A full-stack **real-time chat application** built with the MERN stack and **Socket.IO**, featuring authentication, live messaging, and responsive UI.  

---

## 🚀 Features
🔑 User Authentication (Register/Login with JWT & bcrypt)  
👤 User Context with React Context API  
💬 Real-time Messaging using Socket.IO  
🟢 Online/Offline User Status  
🖥️ Responsive UI with Bootstrap + Tailwind  
🔒 Secure password hashing with bcrypt  
🌐 Protected Routes (Only logged-in users can access Chat)  

---

## 🛠️ Tech Stack
### Frontend:
⚛️ React.js (Vite)  
🌐 React Router DOM  
🧩 Context API (Auth + Chat state management)  
🎨 Bootstrap & Tailwind CSS  

### Backend:
🖥️ Node.js  
📦 Express.js  
🗄️ MongoDB (Mongoose)  
💬 Socket.IO  
🔑 JWT Authentication  
🔒 bcrypt for password hashing  

---

## 📂 Project Structure  

```
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── App.jsx
└── package.json
```

---

## 🔑 Demo Login Credentials
Use the following test account to explore the chat app without signing up:  

- **Email:** `newuser12@mail.com`  
- **Password:** `Newuser@1717`  

---

## 🌍 Live Demo  
🚀 [Click here to access Live Demo]()  

---

  


## 📸 Screenshots  

### 📝 Signup Page  
<img width="913" height="593" alt="image" src="https://github.com/user-attachments/assets/c5fc136b-fc88-4fbb-aa65-1e36885501e3" />
 

### 🔑 Login Page  
<img width="1297" height="572" alt="image" src="https://github.com/user-attachments/assets/c7882522-5040-4fc4-82d9-c42806a0ad68" />


### 📂 Dashboard (User with Posts)  
<img width="1311" height="598" alt="image" src="https://github.com/user-attachments/assets/551dbb99-bcb8-4583-b6a2-ab18b2d65ad0" />
<img width="1293" height="571" alt="image" src="https://github.com/user-attachments/assets/c270682e-3f27-4f44-aa3e-585f87a8da27" />

## 📂 Project Structure  

```
├── models
│   ├── UserModel.js
│   └── PostsModel.js
├── views
│   ├── login.ejs
│   ├── signup.ejs
│   ├── user.ejs
│   ├── editpost.ejs
│   └── ...
├── public
│   └── css / js / assets
├── .env
├── server.js
└── package.json
```

---

## 🔑 Key Endpoints  

| ⚙️ Method | 🌐 Endpoint             | 📖 Description              |
|-----------|-------------------------|-----------------------------|
| 🟢 GET    | `/signup`              | Render signup page          |
| 🟠 POST   | `/create`              | Register new user           |
| 🟢 GET    | `/login`               | Render login page           |
| 🟠 POST   | `/login`               | Authenticate user           |
| 🟠 POST   | `/postcreate`          | Create new blog post        |
| 🟢 GET    | `/editpost/:postid`    | Edit post page              |
| 🟠 POST   | `/editpost/:postid`    | Update existing post        |
| 🟢 GET    | `/removepost/:postid`  | Delete post                 |
| 🟢 GET    | `/logout`              | Logout user                 |

---

## 🔐 Authentication Flow  

🔒 Passwords are hashed using **bcrypt.js** before storing in MongoDB.  
🛡️ A **JWT token** is created on successful login/signup and stored in cookies.  
🧩 Middleware `IsloggedIn` protects private routes.  
👤 Users can only manage their own posts.  

---



