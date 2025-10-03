// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function AxiosDemo() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // GET users khi load trang
//   useEffect(() => {
//     setLoading(true);
//     setError('');
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => setUsers(res.data))
//       .catch(() => setError('Có lỗi xảy ra'))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div style={{
//       maxWidth: 480,
//       margin: '40px auto',
//       background: '#f8fafc',
//       borderRadius: 12,
//       boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
//       padding: 32,
//       fontFamily: 'Segoe UI, Arial, sans-serif'
//     }}>
//       <h2 style={{ color: '#2563eb', marginBottom: 18 }}>Axios Demo</h2>
//       {loading && <p>Đang tải…</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {!loading && !error && (
//         <ul>
//           {users.map(u => (
//             <li key={u.id}>{u.name} - {u.email}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
