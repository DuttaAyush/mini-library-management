// API service for library management system
const BASE_URL = 'http://localhost:3030';
import { debugFetch } from './debugApi';

export async function addBook(book) {
  const res = await fetch(`${BASE_URL}/books/addnew`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return res.json();
}

export async function getAvailableBooks() {
  const res = await fetch(`${BASE_URL}/books/getavailable`);
  console.log(res)
  return res.json();
}

export async function issueBook(data) {
  const res = await fetch(`${BASE_URL}/books/issuebook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function returnBook(data) {
  return await debugFetch(`${BASE_URL}/books/return`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function registerStudent(student) {
  return await debugFetch(`${BASE_URL}/student/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
}

// Add more API functions as needed
