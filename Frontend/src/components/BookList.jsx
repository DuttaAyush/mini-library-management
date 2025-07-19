import React, { useEffect, useState } from 'react';
import { getAvailableBooks } from '../api/libraryApi';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAvailableBooks()
      .then((data) => {
        console.log(data);
        setBooks(Array.isArray(data.books) ? data.books : []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch books.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading books...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>No Books available.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Total Qty</th>
              <th>Available Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id || book.name}>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.qty?.total ?? '-'}</td>
                <td>{book.qty?.available ?? '-'}</td>
                <td>{book.status ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
