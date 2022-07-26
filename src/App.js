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

  function updateFx(item) {
    let fx = item.target.attributes['data-fx'].value
    let checked = item.target.checked;

    setUiFx(xfx => {
      let resultingList = xfx.filter(x => x !== fx)
      return checked ? resultingList.concat(fx) : resultingList;
    });
  }

  function updateDarkMode() {
    setDarkMode(!darkMode);
  }

  function logoSrc() {
    return darkMode ? "thoughtful_logo_colorwhite.png" : "thoughtful_logo_colorblack.png"
  }

  return (
    <div className={ ["App", (darkMode ? 'dark-mode' :''), uiFx.join(" ")].join(" ") }>
      <NavBar
        appName="Thoughtful.ai"
        audience="React Meetup"
      />
      <header className="App-header">
        <img src={ logoSrc() } className="App-logo" alt="logo" />
      </header>
      <div className="options-list">
        <div>
          <label>
            <input type="checkbox" onChange={updateDarkMode} checked={darkMode}/>
            Dark Mode
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" onChange={updateFx} data-fx="jitter" />
            Too much coffee
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" onChange={updateFx} data-fx="spiro" />
            Spirograph
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" onChange={updateFx} data-fx="giant" />
            Gigantic
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
