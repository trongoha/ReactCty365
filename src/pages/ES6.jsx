import React from 'react';

export default function ES6() {
  const [a, setA] = React.useState(1);
  const [b, setB] = React.useState(2);

  const add = (x, y) => x + y;
  const msg = `Tính Tổng: ${a}+${b}=${add(a, b)}`;

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: '#f3f3f3ff', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 32 , border: '5px solid black'}}>
      <h2 style={{ color: '#0446caff', marginBottom: 16 }}>JS ES6+</h2>
      <div style={{ marginBottom: 18 }}>
        <label>
          a:&nbsp;
          <input
            type="number"
            value={a}
            onChange={e => setA(Number(e.target.value))}
            style={{ width: 60, marginRight: 16, padding: 4, borderRadius: 4, border: '1px solid #cbd5e1' }}
          />
        </label>
        <label>
          b:&nbsp;
          <input
            type="number"
            value={b}
            onChange={e => setB(Number(e.target.value))}
            style={{ width: 60, padding: 4, borderRadius: 4, border: '1px solid #cbd5e1' }}
          />
        </label>
      </div>
      <div style={{ fontWeight: 500, color: '#0f172a', fontSize: 17, marginTop: 8 }}>
        {msg}
      </div>
    </div>
  );
}
