# 📋 Task Manager

A full-stack Task Management application built using React, Node.js, Express.js, and MySQL.  
The application allows users to create, view, update, complete, filter, and delete tasks with due-date and overdue tracking.

---

## ✨ Features

### Core Functionality

- ➕ Add new tasks with title and description
- 📅 Add due dates to tasks
- 👀 View all tasks
- ✅ Mark tasks as completed
- 🔄 Mark completed tasks as pending
- ✏️ Edit task title and description
- 🗑️ Delete tasks
- 🔍 Filter tasks by All, Completed, and Pending
- 🔴 Highlight overdue pending tasks in red
- 💾 Store tasks permanently in MySQL
- 🔄 Data remains available after page refresh
- ⚠️ Basic validation for required task title
- 🧹 Automatically clear the form after adding a task

---

## 🛠️ Technology Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS
- Vite

### Backend
- Node.js
- Express.js
- REST API
- CORS

### Database
- MySQL
- phpMyAdmin

---

## 📁 Project Structure

```text
TaskManager/
│
├── frontend/
│   ├── src/
│   │   ├── component/
│   │   │   ├── AddTaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── package.json
│
└── README.md

