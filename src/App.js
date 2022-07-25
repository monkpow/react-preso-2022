import React, { useState, useDebugValue } from 'react';
import './App.css';
import NavBar from './components/navBar'

function useStateWithLabel() {
  const [darkMode, setDarkMode] = useState(true);
  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(darkMode, darkMode => darkMode ? 'Dark' : 'Light');
  return [darkMode, setDarkMode];
}

function App() {
  const [darkMode, setDarkMode] = useStateWithLabel(true);
  const [optionsList, setOptionsList] = useStateWithLabel([]);

  return (
    <div className={ ["App", (darkMode ? 'dark-mode' :'')].join(" ") }>
      <NavBar
        wooden="matches"
        doctor="witch"
      />
      <header className="App-header">
        <img src="thoughtful_logo_colorwhite.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
