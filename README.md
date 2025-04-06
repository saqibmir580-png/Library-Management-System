# Library Management System (MERN Stack)

A full-stack Library Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with secure authentication, role-based access, automated fine calculation, and email-based reminders.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Admin Functionalities](#admin-functionalities)
- [User Functionalities](#user-functionalities)
- [Automation](#automation)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- JWT Authentication (Login, Register, Forgot Password)
- Role-based Access Control (Admin & User)
- Email Verification and Password Reset via Email
- Admin can Add Books, Issue/Return Books, and Add New Admins
- Users can Borrow and Return Books
- Automated Fine Calculation for Late Returns
- Email Reminders when the book due date is over
- Responsive Frontend using React & Redux

---

## Tech Stack

*Frontend*  
- React.js  
- Redux  
- Axios  
- React Router DOM  

*Backend*  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JSON Web Tokens (JWT)  
- Nodemailer (for emails)  
- Cron Jobs (for automation)

---

## Admin Functionalities

- Add new books to the library
- Issue books to users
- Mark returned books
- Add other admins (role-based control)

> Admin has access to full book and user management features

---

## User Functionalities

- Register/Login with email
- Reset password via email link
- Borrow books
- Return books
- Get email reminder *after due date* if the book is not returned

> Users do not have access to book management or admin controls

---

## Automation

- *Fine Calculation*: Automatically calculated if a book is returned after the due date
- *Email Reminder*: Sent to users when the book is overdue (handled via scheduled cron job)

---

## Installation

1. *Clone the Repository*

```bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system

2. Backend Setup
cd server
npm install
npm start
3. Frontend Setup
cd client
npm install
npm start
---
Environment Variables
Create a .env file in the backend folder with the following:
PORT=4000
MONGO_URI=
SMTP_HOST=
SMTP_SERVICE=gmail
SMTP_PORT=465
SMTP_USER=
SMTP_PASSWORD=
SMTP_MAIL=
COOKIE_EXPIRE=3
JWT_EXPIRE=3d
JWT_SECRET_KEY=
CLOUDINARY_CLIENT_NAME=
CLOUDINARY_CLIENT_API=
CLOUDINARY_CLIENT_SECRET=
Connect with Me

Saqib Mir
Full-Stack Developer
https://www.linkedin.com/in/saqibalimir | https://github.com/saqibmir580-png
