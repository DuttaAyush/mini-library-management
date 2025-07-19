
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
import RegisterStudent from './components/RegisterStudent';

function Home() {
  return (
    <div>
      <h1>Library Management System</h1>
      <p>Welcome! Use the navigation bar to manage books and students.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/return-book" element={<ReturnBook />} />
          <Route path="/register-student" element={<RegisterStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
