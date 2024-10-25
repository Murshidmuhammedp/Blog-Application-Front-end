Blog Application
-----------------
This is a full-stack blog application built using Next.js for the frontend and Node.js with Express for the backend. The application allows users to create, edit, and view blog posts. It supports user authentication and provides an admin panel for managing blogs.

Table of Contents
-----------------
* Features
* Technologies Used
* Getting Started
* Configuration
* Architecture Overview
* Deployment
* Live Application Links

Features
-----------------
* User authentication (sign-in and sign-up)
* Blog creation, editing, and deletion
* User and admin dashboards
* Responsive design

Technologies Used
------------------
* Frontend: Next.js, Tailwind CSS, Zustand, Zod, React Hook Form, Shadcn
* Backend: Node.js, Express, MongoDB
* Hosting: Vercel (Frontend), Render (Backend)

Configuration
------------------
* Backend Configuration: MongoDB URI, JWT secret, and any other environment-specific variables should be placed in the .env file.
* Frontend Configuration: Update next.config.js to include remote image patterns.

Architecture Overview
----------------------
* Frontend: The application uses Next.js for server-side rendering and React for client-side interactivity. Zustand is used for state management, and React Hook Form along with Zod is used for form handling and 
  validation.
* Backend: The backend uses Node.js with Express as the web framework, and MongoDB as the database. It provides REST APIs for authentication, blog management, and other functionalities.
  
Design Decisions:
----------------------
* Next.js: Chosen for its hybrid rendering capabilities.
* Zustand: Lightweight state management to keep the app simple.
* Zod and React Hook Form: To handle validation and form data more efficiently.

Deployment
---------------------
The application is deployed on:
* Frontend: Vercel
* Backend: Heroku/Render
  
Steps for Deployment
----------------------
* Frontend:
Deploy to Vercel by connecting your GitHub repository and setting the environment variables in the Vercel dashboard.
* Backend:
Deploy to Heroku/Render by connecting your GitHub repository and setting environment variables in the platform's dashboard.
