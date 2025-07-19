import React, { useState } from 'react';
import { returnBook } from '../api/libraryApi';

export default function ReturnBook() {
  const [form, setForm] = useState({ bookName: '', rollNo: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      console.log(form)
      const res = await returnBook(form);
      setMessage(res.message || 'Book returned!');
      setForm({ bookName: '', rollNo: '' });
    } catch (err) {
      console.log(err)
      setError('Failed to return book.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Return Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="bookName" placeholder="Book Name" value={form.bookName} onChange={handleChange} required />
        <input name="rollNo" placeholder="Student Roll No" value={form.rollNo} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? 'Returning...' : 'Return Book'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
