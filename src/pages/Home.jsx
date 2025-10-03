import React from 'react';

const containerStyle = {
  maxWidth: '520px',
  margin: '48px auto',
  background: 'rgba(255,255,255,0.95)',
  borderRadius: '18px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  padding: '36px 32px',
  textAlign: 'center',
  fontFamily: 'Segoe UI, Arial, sans-serif',
  animation: 'fadeIn 1s',
};

const titleStyle = {
  fontSize: '2.2rem',
  fontWeight: 700,
  color: '#2563eb',
  marginBottom: '18px',
  letterSpacing: '1px',
  textShadow: '0 2px 8px rgba(37,99,235,0.08)',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: '28px 0 0 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
};

const itemStyle = {
  background: 'linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)',
  color: 'white',
  padding: '14px 0',
  borderRadius: '8px',
  fontSize: '1.15rem',
  fontWeight: 500,
  boxShadow: '0 2px 8px rgba(96,165,250,0.10)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
};

const itemHoverStyle = {
  transform: 'translateY(-4px) scale(1.03)',
  boxShadow: '0 8px 24px rgba(96,165,250,0.18)',
};

export default function Home() {
  const [hovered, setHovered] = React.useState(-1);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Frontend - Nội dung 
        <br />tuần 30/9-04/10/2025</h1>
      <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: 0 }}>
        4 nội dung chính:
      </p>
      <ul style={listStyle}>
        {['JS ES6+', 'React Hooks', 'React Router Dom', 'Axios'].map((item, idx) => (
          <li
            key={item}
            style={hovered === idx ? { ...itemStyle, ...itemHoverStyle } : itemStyle}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* Hiệu ứng fadeIn */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(32px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}
