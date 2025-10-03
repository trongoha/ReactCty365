import React, { useState } from 'react';

export default function BankDemo() {
  const [money, setMoney] = useState(0);

  const dispatch = (action) => {
    switch (action.type) {
      case 'increment':
        setMoney(m => m + action.payload);
        break;
      case 'decrement':
        setMoney(m => m - action.payload);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: '40px auto',
      background: '#f8fafc',
      borderRadius: 14,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      padding: 32,
      fontFamily: 'Segoe UI, Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#2563eb', marginBottom: 18 }}>Bank Demo</h2>
      <div style={{
        fontSize: 22,
        fontWeight: 600,
        color: '#16a34a',
        marginBottom: 24
      }}>
        Số dư: {money} $
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
        <button
          onClick={() => dispatch({ type: 'increment', payload: 10 })}
          style={{
            padding: '10px 22px',
            borderRadius: 6,
            border: 'none',
            background: 'linear-gradient(90deg, #60a5fa 0%, #2563eb 100%)',
            color: 'white',
            fontWeight: 500,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(96,165,250,0.10)',
            transition: 'background 0.2s'
          }}
        >
          Nạp 10$
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement', payload: 10 })}
          style={{
            padding: '10px 22px',
            borderRadius: 6,
            border: 'none',
            background: 'linear-gradient(90deg, #f87171 0%, #ef4444 100%)',
            color: 'white',
            fontWeight: 500,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(239,68,68,0.10)',
            transition: 'background 0.2s'
          }}
        >
          Rút 10$
        </button>
      </div>
    </div>
  );
}
