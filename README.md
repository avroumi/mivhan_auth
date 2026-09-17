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
