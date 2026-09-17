Authentication Project:

The goal of this assessment is to demonstrate the ability to adapt to unfamiliar topics while showcasing existing areas of expertise. Below are the technologies used and a brief explanation of the project.

Explanation:

This project uses authentication to manage user access:

Data is stored in a MongoDB database, and passwords are hashed using bcrypt.

Access to the user page is restricted until a valid token—linked to the user's ID—is present in local storage.

Upon logging in or creating an account, the user is redirected to the user page; this page displays only their name and email address, omitting the password for security reasons.

Technologies used:

Backend: dotenv, express, bcrypt, jwt, mongodb, cors
Frontend: axios, zustand, react, react-router-dom

flow:

register => submit => axios / fetch API => main => router => controller => service => db => response => navigate to /user => view data

Of course, validation is performed; the login process is also interesting and essentially similar.

A protected route prevents access to the user page if `localStorage` lacks a valid token, thanks to a check performed by the `authMiddleware`.

Usage instructions:

Fill in the required fields in the .env.example file.
Run `npm run dev` on the server side (backend).
Do the same on the client side (frontend).

Enjoy!

Requirements and where to find them:

1 Project configuration and structure (React + TS + Vite, logical folder organization) | 5: the project itself
2 Login/registration interface – forms, validation, error handling | 10: `/auth/login` and `/auth/register` routes (service layer) and the React implementation
3 Registration logic – API call, actual user creation on the server | 10: backend logic behind `/auth/register`
4 Login logic – API call, credential verification, JWT return | 10: backend logic behind `/auth/login`
5 Custom authentication hook (encapsulating login, registration, logout, and current user) | 10: I opted for a dynamic system capable of handling various types of requests; while not strictly necessary for this project, it demonstrates React's flexibility: `hook/useApi`
6 Protected route – blocking or appropriately redirecting unauthenticated users | 15: a layout using `Outlet`: `component/ProtectedRoute`
7 Profile page – displaying actual user data retrieved via the token | 10: `pages/UserPage`
8 Logout – token removal and proper local storage cleanup | 10: Logout button in `UserPage` using Zustand
9 Code quality – component/prop reuse, TypeScript typing, no `any` types | 10: for you to judge
10 Persistence via local storage on page refresh | 10: persisted in `localStorage` using Zustand
Bonus: Upload functionality
