
### 📖 QuickBlog

QuickBlog is a **full-stack blogging platform** where an **Admin** can publish, update, and manage blogs, while **Users** can explore blogs, read content, and post comments.  
Built with **MERN stack (MongoDB, Express, React, Node.js)** and includes features like blog publishing, comments, image uploads, and admin moderation.


### ✨ Features

### 👤 User Side
- Browse all published blogs.
- Filter blogs by **categories** and **search** by title.
- View full blog details with images.
- Post comments (requires admin approval).
- Responsive design for mobile & desktop.

### 🔑 Admin Side
- Secure admin login with JWT authentication.
- Add, edit, and delete blogs.
- Upload images via **ImageKit**.
- Publish/Unpublish blogs (draft mode supported).
- Moderate comments (approve/delete).
- View dashboard with stats: total blogs, comments, drafts, and recent blogs.

---

## 🛠️ Tech Stack
- **Frontend**: React, TailwindCSS, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Token (JWT)
- **Image Upload**: ImageKit
- **Notifications**: React Hot Toast

---

## 📂 Project Structure

```

quickblog/
│── client/               # React frontend
│   ├── components/       # Reusable UI components
│   ├── pages/            # Pages (Home, Blog, Admin, Dashboard, etc.)
│   ├── context/          # AppContext for global state
│   └── assets/           # Static assets (icons, images)
│
│── server/               # Node.js backend
│   ├── controllers/      # Business logic (blogs, comments, admin)
│   ├── models/           # Mongoose models
│   ├── middleware/       # Auth & Multer
│   ├── routes/           # API routes
│   └── configs/          # ImageKit, DB config
│
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Aman-Negi07/quickblog.git
cd quickblog
````

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `/server` and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Run backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🚀 Usage

### 🌍 User

* Visit the homepage to explore blogs.
* Search/filter by category.
* Click on a blog card to view details and post comments.

### 🔑 Admin

* Login with admin credentials (`ADMIN_EMAIL`, `ADMIN_PASSWORD`).
* Access **Dashboard** to view stats.
* Manage blogs: add, delete, publish/unpublish.
* Review and approve/delete comments.

---

## 📸 Screenshots

### 🏠 Homepage

(*Add screenshot here*)

### 📊 Admin Dashboard

(*Add screenshot here*)

---

## 🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the **MIT License**.

```

---

Do you also want me to include a **sample API Endpoints section** (with `GET /api/blog/all`, `POST /api/blog/add-comment`, etc.) in this same code block so devs can test your backend quickly with Postman?
```
