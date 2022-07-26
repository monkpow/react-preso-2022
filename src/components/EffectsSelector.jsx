const EffectsSelector = ({getter, setter}) => {
  const handleChange = () => {
    console.log('The checkbox was toggled');
  };

  return (
    <div>  
      <label>
      <input type="checkbox" onChange={setter("Jitter")}></input> 
        Jitter
      </label>
    </div>
  );
      //return <h1>Hello {getter}</h1>
}

export default EffectsSelector;

