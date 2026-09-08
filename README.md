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
```

🚀 **Installation & Setup**

**Prerequisites**

  - Node.js
  - npm
  - MySQL
  - XAMPP
  - VS Code or another IDE

🗄️ **Database Setup**

- Apache
- MySQL

## 🖥️ Application Workflow
```text
User
  ↓
React Frontend
  ↓
HTTP Request
  ↓
Node.js + Express API
  ↓
MySQL Database
  ↓
API Response
  ↓
React Frontend
  ↓
User
```

## 🧩 React Component Structure
```text
App
│
├── AddTaskForm
│
├── Filter Buttons
│
└── TaskList
      │
      ├── TaskItem
      ├── TaskItem
      └── TaskItem
```
## App.jsx

- Task state
- Filter state
- API requests
- Add task
- Edit task
- Delete task
- Complete/Pending status
- Filtering

## AddTaskForm.jsx

- Task title
- Task description
- Due date
- Form validation
- Creating tasks

## TaskList.jsx
 - Responsible for displaying the list of tasks.

## TaskItem.jsx
- Complete/Pending
- Edit
- Delete
- Due date
- Overdue status

 ## 🔄 CRUD Operations
 ```text
  Operation    Method  Endpoint              

 Create         POST    `/api/tasks`          
 Read           GET     `/api/tasks`          
 Update Status  PUT     `/api/tasks/:id`      
 Edit Task      PUT     `/api/tasks/edit/:id` 
 Delete         DELETE  `/api/tasks/:id`      
```

## 🔍 Task Filters

The application provides three filters:

## All

- Displays all tasks.

## Completed

- Displays only completed tasks.

## Pending

- Displays only pending tasks.
 ```text
  All
   ↓
Completed + Pending

Completed
   ↓
Completed tasks only

Pending
   ↓
Pending tasks only
```

## 📅 Due Date & Overdue Logic

Each task can have a due date.

A task is considered overdue when:
```text
Due Date < Current Date
AND
Task is Pending
```
Overdue tasks are displayed in red.

---
## 👨‍💻 Author

Rushikesh Gajanan Salunkhe

MSc Computer Science


---
## 📄 License

This project is created for educational and portfolio purposes.
