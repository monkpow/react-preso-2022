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

  function stripFx(fxlist, fx) {
  }

  function updateFx(item) {
    let fx = item.target.attributes['data-fx'].value
    let checked = item.target.checked;

    let fxList = uiFx.filter(existingFx => existingFx != fx);
    setUiFx(xfx => {
      let startingList = xfx.filter(x => x !== fx)
      return checked ? startingList.concat(fx) : startingList;
    });
  }

  function updateDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={ ["App", (darkMode ? 'dark-mode' :''), uiFx.join(" ")].join(" ") }>
      <NavBar
        appName="Thoughtful.ai"
        audience="React Meetup"
      />
      <header className="App-header">
        <img src="thoughtful_logo_colorwhite.png" className="App-logo" alt="logo" />
        <div>
          <label>
            <input type="checkbox" onChange={updateDarkMode} />
            Dark Mode
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" onChange={updateFx} data-fx="jitter" />
            Jitter Effect
          </label>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Thoughtful
        </a>
      </header>
    </div>
  );
}

export default App;
