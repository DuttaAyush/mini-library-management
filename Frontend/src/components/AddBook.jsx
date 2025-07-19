import React, { useState } from 'react';
import { addBook } from '../api/libraryApi';

export default function AddBook() {
  const [form, setForm] = useState({ name: '', author: '', total: '', available: '' });
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
    const book = {
      name: form.name,
      author: form.author,
      qty: Number(form.total),
    };
    try {
      const res = await addBook(book);
      setMessage(res.message || 'Book added!');
      setForm({ name: '', author: '', total: '', available: '' });
    } catch (err) {
      setError('Failed to add book.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Book Name" value={form.name} onChange={handleChange} required />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
        <input name="total" type="number" placeholder="Total Qty" value={form.total} onChange={handleChange} required />
        <input name="available" type="number" placeholder="Available Qty" value={form.available} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Book'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
