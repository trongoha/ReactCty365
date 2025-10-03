// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Axios from './pages/Axios';
import ES6 from './pages/ES6';
import Hooks from './pages/Hooks';
import Router from './pages/Router';

function App() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: 20, maxWidth: 900, margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/es6" element={<ES6 />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/router" element={<Router />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
