import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? 'white' : 'black';
  };

  return (
    <div style={{marginTop:"70px"}} className={darkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>
      {darkMode ? '☀️Light' : '🌙 Dark'}
      </button>
      <Calculator />
    </div>
  );
}

export default App;
