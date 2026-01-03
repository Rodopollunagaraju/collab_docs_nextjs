# 📝 Collaborative Docs Application (Next.js + Real-Time Sync)

A **real-time collaborative document editor** built using **Next.js (App Router)** with live syncing capabilities. Users can create documents and collaborate in real time, making this project a strong example of **modern full-stack Next.js development** suitable for **internships, placements, and advanced college projects**.

---

## 🚀 Features

### 🔄 Real-Time Collaboration

* Create and edit documents dynamically
* Live updates across multiple users
* Document-based routing (`/document/[id]`)

### 🧩 Modern Next.js Architecture

* Built using **Next.js App Router (`src/app`)**
* API routes using **Route Handlers**
* Clean separation of UI, API, DB, and models

### 🗄 Database Integration

* MongoDB integration using Mongoose
* Centralized DB connection logic
* User model implemented

### 🌐 API Layer

* API routes inside `app/api/*`
* Auth test route implemented
* Axios abstraction for API calls

---

## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* React.js
* JavaScript
* Tailwind CSS / CSS

### Backend (Built-in with Next.js)

* Next.js Route Handlers
* MongoDB
* Mongoose
* Axios

---

## 🗂 Project Structure (Actual)

```
collab-doc/
│
├── public/
├── src/
│   └── app/
│       ├── api/
│       │   └── auth/
│       │       └── test/
│       │           └── route.js
│       │
│       ├── document/
│       │   ├── new/
│       │   │   └── page.js
│       │   └── page.js
│       │
│       ├── lib/
│       │   ├── axios.js
│       │   └── mongodb.js
│       │
│       ├── models/
│       │   └── User.js
│       │
│       └── page.js
│
├── .env
├── next.config.mjs
├── package.json
├── README.md
└── eslint.config.mjs
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/collab-doc.git
cd collab-doc
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Application

```bash
npm run dev
```

App runs on: `http://localhost:3000`

---

## 🔄 Application Flow

1. User opens the application
2. Creates a new document (`/document/new`)
3. Navigates to a document page
4. Edits content in real time
5. Data is stored and fetched via API routes

---

## 🧪 API Routes

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/auth/test` | Test authentication route |

---

## 🎯 Learning Outcomes

* Next.js App Router mastery
* Route Handlers & server-side logic
* MongoDB integration in Next.js
* Scalable folder structure
* Real-world document-based routing

---

## 📌 Future Enhancements

* Real-time collaboration with Socket.io
* Authentication (JWT / NextAuth)
* Rich text editor integration
* Version history
* Role-based access control

---

## 👨‍💻 Author

**Rodopollu Nagaraju**
B.Tech – Information Technology
Next.js Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub and feel free to fork and improve it!

---

> *"Build once. Collaborate everywhere."*
