import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const users = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Thị B' },
  { id: 3, name: 'Lê Văn C' }
];

function UserList() {
  return (
    <div>
      <h3>Danh sách User</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/router/user/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetail() {
  const { id } = useParams();
  const user = users.find(u => String(u.id) === id);
  if (!user) return <div>Không tìm thấy user</div>;
  return (
    <div>
      <h3>Chi tiết User</h3>
      <p>ID: {user.id}</p>
      <p>Tên: {user.name}</p>
      <Link to="/router">Quay lại danh sách</Link>
    </div>
  );
}

export default function RouterDemo() {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: '#f8fafc', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 32 }}>
      {/* <h2 style={{ color: '#2563eb', marginBottom: 18 }}>React Router</h2> */}
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}
