import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#222', color: '#fff', marginBottom: '2rem' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
      <Link to="/books" style={{ color: '#fff', marginRight: '1rem' }}>Books</Link>
      <Link to="/add-book" style={{ color: '#fff', marginRight: '1rem' }}>Add Book</Link>
      <Link to="/issue-book" style={{ color: '#fff', marginRight: '1rem' }}>Issue Book</Link>
      <Link to="/return-book" style={{ color: '#fff', marginRight: '1rem' }}>Return Book</Link>
      <Link to="/register-student" style={{ color: '#fff', marginRight: '1rem' }}>Register Student</Link>
    </nav>
  );
}
