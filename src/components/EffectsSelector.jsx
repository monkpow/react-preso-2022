const EffectsSelector = ({uiFx, setUiFx, darkMode, setDarkMode}) => {

  const handleChange = (event) => {
    const fx = event.target.attributes['data-fx'].value
    const checked = event.target.checked;

    setUiFx(xfx => {
      const filteredList = xfx.filter(x => x !== fx)
      return checked ? filteredList.concat(fx) : filteredList;
    });
  }

  const updateDarkMode = event => setDarkMode(event.target.checked);
  const fxIsEnabled= (token) => uiFx.includes(token);

  return (
    <div className="options-list">
      <label>
        <input type="checkbox" onChange={updateDarkMode} checked={darkMode} data-fx="dark-mode"/>
        Dark Mode
      </label>
      <label>
        <input type="checkbox" onChange={handleChange} checked={fxIsEnabled("jitter")} data-fx="jitter" />
        Too much coffee
      </label>
      <label>
        <input type="checkbox" onChange={handleChange} checked={fxIsEnabled("spiro")} data-fx="spiro" />
        Spirograph
      </label>
      <label>
        <input type="checkbox" onChange={handleChange} checked={fxIsEnabled("giant")} data-fx="giant" />
        Gigantic
      </label>
    </div>
  );
}

export default EffectsSelector;

