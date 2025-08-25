# Blog Application with Authentication  

A full-stack Node.js blog application built with **Express**, **MongoDB**, and **EJS**.  
This app allows users to **sign up, log in, create posts, edit posts, delete posts, and manage sessions** securely with **JWT authentication and bcrypt password hashing**.  

---

## 🚀 Features  

✨ User **Signup & Login** with secure password hashing  
🔐 **JWT-based Authentication** with cookies  
📝 Create, edit, and delete blog posts  
👤 User-specific posts management  
⚡ Session handling with middleware  
🎨 **EJS Templating Engine** for clean UI  
🛠️ Fully functional **CRUD operations** for posts  

---

## 🛠 Tech Stack  

🖥️ **Backend:** Node.js, Express.js  
🎭 **Frontend:** EJS (Embedded JavaScript Templates)  
🗄️ **Database:** MongoDB (Mongoose ODM)  
🔑 **Authentication:** JWT, bcrypt.js  
📦 **Other Tools:** dotenv, cookie-parser, path  

---

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
<img width="1353" height="601" alt="image" src="https://github.com/user-attachments/assets/3d89a4bc-54a6-4ed0-af1e-41c7c6f1b43c" />  
<img width="1349" height="609" alt="image" src="https://github.com/user-attachments/assets/46ccca14-ca09-4922-9325-e0997e268845" />  
<img width="1344" height="597" alt="image" src="https://github.com/user-attachments/assets/e5bf5c50-7bd5-4c3d-a7d0-a0720bdd5a4e" />  
<img width="1338" height="594" alt="image" src="https://github.com/user-attachments/assets/c7568abc-dfb4-4a17-8cc0-bb502c460ff9" />  


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


