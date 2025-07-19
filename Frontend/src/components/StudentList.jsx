import React, { useEffect, useState } from 'react';
// Placeholder for student list, can be expanded with API
export default function StudentList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    // TODO: Fetch students from backend if endpoint exists
  }, []);
  return (
    <div>
      <h2>Student List</h2>
      <p>Feature coming soon...</p>
    </div>
  );
}
