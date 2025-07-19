# Library Management System

A simple full-stack library management application to manage books and students.

## Features

- Add and view books
- Register students
- Issue books to students
- Return books
- Track book availability

## Tech Stack

- **Frontend**: React, React Router, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Quick Start

### Backend Setup
```bash
cd Backend
npm install
npm start
```
Server runs on http://localhost:3030

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
Frontend runs on http://localhost:5173

## Project Structure

```
├── Backend/           # Node.js API server
│   ├── controllers/   # Request handlers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   └── services/      # Business logic
└── Frontend/          # React application
    └── src/
        ├── components/  # React components
        └── api/         # API calls
```

## Usage

1. Make sure MongoDB is running
2. Start both backend and frontend servers
3. Navigate to the frontend URL
4. Use the navigation bar to:
   - Add books to the library
   - Register new students
   - Issue books to students
   - Return books
   - View all books

## API Endpoints

- `GET /books` - Get all books
- `POST /books` - Add a new book
- `POST /books/issue` - Issue a book
- `POST /books/return` - Return a book
- `GET /student` - Get all students
- `POST /student` - Register a new student