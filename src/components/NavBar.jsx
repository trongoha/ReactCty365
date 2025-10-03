import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  background: '#0f172a',
  color: 'white',
  padding: '12px 32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  fontFamily: 'Segoe UI, Arial, sans-serif',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 500,
  padding: '8px 18px',
  borderRadius: '6px',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
  position: 'relative',
  letterSpacing: '0.5px',
};

const activeStyle = {
  color: '#60a5fa',
  background: '#1e293b',
  boxShadow: '0 2px 8px rgba(96,165,250,0.08)',
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/es6"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        JS ES6+
      </NavLink>
      <NavLink
        to="/hooks"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Hooks
      </NavLink>
      <NavLink
        to="/router"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Router
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Axios
      </NavLink>
    </nav>
  );
}
