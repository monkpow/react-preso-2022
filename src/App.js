import React, { useState, useDebugValue } from 'react';
import './App.css';
import NavBar from './components/navBar'
import EffectsSelector from './components/EffectsSelector'

function useDarkModeStateWithLabel() {
  const [darkMode, setDarkMode] = useState(true);
  useDebugValue(darkMode, darkMode => darkMode ? 'Dark' : 'Light');
  return [darkMode, setDarkMode];
}

function useEffectsStateWithLabel() {
  const [uiFx, setUiFx] = useState([]);
  useDebugValue(uiFx, uiFx => uiFx.toString());
  return [uiFx, setUiFx];
}

function App() {
  const [darkMode, setDarkMode] = useDarkModeStateWithLabel(true);
  const [uiFx, setUiFx] = useEffectsStateWithLabel([]);

  const logoSrc = () => darkMode ? "thoughtful_logo_colorwhite.png" : "thoughtful_logo_colorblack.png"
  const appClassNames = () => [ "App", (darkMode ? "dark-mode" :""), uiFx.join(" ") ].join(" ")

  return (
    <div className={appClassNames()} data-testid="main-body-styles">
      <NavBar
        audience="React Meetup"
      />

      <header className="App-header">
        <img src={ logoSrc() } className="App-logo" alt="logo" />
      </header>

      <EffectsSelector
        uiFx={uiFx}
        setUiFx={setUiFx}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
