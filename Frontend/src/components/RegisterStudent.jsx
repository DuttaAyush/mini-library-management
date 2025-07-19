import React, { useState } from 'react';
import { registerStudent } from '../api/libraryApi';

export default function RegisterStudent() {
  const [form, setForm] = useState({ name: '', mobile: '', rollNo: '', gender: '' });
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
    const student = {
      name: form.name,
      mobile: Number(form.mobile),
      rollNo: form.rollNo,
      gender: form.gender,
    };
    try {
      const res = await registerStudent(student);
      setMessage(res.message || 'Student registered!');
      setForm({ name: '', mobile: '', rollNo: '', gender: '' });
    } catch (err) {
      setError('Failed to register student.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} required minLength={5} />
        <input name="mobile" type="number" placeholder="Mobile" value={form.mobile} onChange={handleChange} required />
        <input name="rollNo" placeholder="Roll No" value={form.rollNo} onChange={handleChange} required />
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
