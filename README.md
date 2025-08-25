# 📝 MERN Postify Authentication Note & Blog App

A **Node.js and Express.js** based web application with **user authentication** and **blog post management** using **MongoDB** and **EJS templates**. Users can sign up, log in, create posts, edit posts, and delete posts. JWT and cookies are used for authentication.

---

## 🚀 Features

- 🔑 User Registration & Login
- 🔒 Password hashing with **bcryptjs**
- 🛡 Authentication using **JWT tokens**
- ✏️ CRUD operations for posts
- 🖥 Views rendered using **EJS**
- 🍪 Cookies for session management
- 🛠 Simple middleware to protect routes

---

## 📂 Project Structure

 

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
🚀 [Click here to access Live Demo](https://postify-orcin.vercel.app/signup)  

---

  


## 📸 Screenshots  

### 📝 Signup Page  
<img width="758" height="585" alt="image" src="https://github.com/user-attachments/assets/f719f934-452a-4239-b187-0783bfcf015f" />


### 🔑 Login Page  
<img width="807" height="529" alt="image" src="https://github.com/user-attachments/assets/3c9d3fac-7a2b-486b-930b-37e18829741e" />



### 📂 Dashboard (User with Posts)  


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








