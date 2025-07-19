# Library Management System - Backend

A RESTful API backend for a library management system built with Node.js, Express.js, and MongoDB. This system provides comprehensive functionality to manage books, students, and book issuing/returning operations in a library environment.

## 🚀 Features

- **Student Management**: Register and manage student records
- **Book Management**: Add new books, track availability, and manage inventory
- **Book Operations**: Issue books to students and handle returns
- **Real-time Availability**: Track book availability and quantities
- **RESTful API**: Clean and intuitive API endpoints
- **MongoDB Integration**: Robust data persistence with Mongoose ODM

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling library
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   DB_CONNECT=mongodb://localhost:27017/library_management
   # or for MongoDB Atlas:
   # DB_CONNECT=mongodb+srv://<username>:<password>@cluster.mongodb.net/library_management
   ```

4. **Start the application**
   ```bash
   npm start
   # or for development with nodemon:
   # npm run dev
   ```

The server will start on `http://localhost:3030`

## 📚 API Endpoints

### Student Routes (`/student`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/student/register` | Register a new student |

#### Student Registration
```json
POST /student/register
Content-Type: application/json

{
  "name": "John Doe",
  "mobile": 9876543210,
  "rollNo": "2021CS001",
  "gender": "M"
}
```

### Book Routes (`/books`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/books/addnew` | Add a new book to the library |
| GET | `/books/getavailable` | Get all available books |
| POST | `/books/issuebook` | Issue a book to a student |
| POST | `/books/return` | Return a book |

#### Add New Book
```json
POST /books/addnew
Content-Type: application/json

{
  "name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "qty": {
    "total": 10,
    "available": 10
  }
}
```

#### Issue Book
```json
POST /books/issuebook
Content-Type: application/json

{
  "bookId": "book_id_here",
  "studentId": "student_id_here"
}
```

#### Return Book
```json
POST /books/return
Content-Type: application/json

{
  "bookId": "book_id_here",
  "studentId": "student_id_here"
}
```

## 🏗 Project Structure

```
Backend/
├── app.js                          # Main application entry point
├── db.js                           # Database connection configuration
├── controller/
│   ├── books.controller.js         # Book-related request handlers
│   └── student.controller.js       # Student-related request handlers
├── models/
│   ├── books.model.js              # Book schema and model
│   ├── issued.books.model.js       # Issued books tracking model
│   └── student.model.js            # Student schema and model
├── routes/
│   ├── books.route.js              # Book API routes
│   └── student.route.js            # Student API routes
└── services/
    ├── book.service.js             # Business logic for book operations
    └── student.service.js          # Business logic for student operations
```

## 📊 Data Models

### Student Model
```javascript
{
  name: String (required, min 5 characters),
  mobile: Number (required),
  rollNo: String (required),
  gender: String (required, enum: ["M", "F"])
}
```

### Book Model
```javascript
{
  name: String (required),
  author: String (required),
  status: String (enum: ["Available", "Issued"], default: "Available"),
  qty: {
    total: Number,
    available: Number
  }
}
```

## 🔒 Environment Variables

Create a `.env` file with the following variables:

```env
# Database Configuration
DB_CONNECT=mongodb://localhost:27017/library_management

# Server Configuration (optional)
PORT=3030
```

## 🚦 Getting Started

1. Make sure MongoDB is running on your system
2. Follow the installation steps above
3. Test the API using tools like Postman or curl
4. Start with registering a student: `POST /student/register`
5. Add some books: `POST /books/addnew`
6. Check available books: `GET /books/getavailable`
7. Issue and return books as needed

## 🧪 Testing

You can test the API endpoints using tools like:
- **Postman** - Import the endpoints and test manually
- **curl** - Command line testing
- **Thunder Client** (VS Code extension) - In-editor API testing

Example curl command:
```bash
curl -X POST http://localhost:3030/student/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","mobile":9876543210,"rollNo":"2021CS001","gender":"M"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Known Issues

- The issued books functionality appears to be in development (commented routes in app.js)
- Consider adding validation for duplicate student roll numbers
- Add pagination for large book collections

## 📞 Support

If you have any questions or need help with setup, please open an issue in the repository.

---

**Happy Coding! 📚✨**