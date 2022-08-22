import './App.css';
import React from 'react';
function App() {
  const [things,setThings] = React.useState(['Thing 1', 'Thing 2']);
  
  const handleClick = () => {
    const newThingText =(`Thing ${things.length + 1}`);
    setThings(prevState =>[...prevState,newThingText])
    console.log(things);
  };
  return (
    <div className="App">
      <div>
        <button onClick={handleClick}>Add Item</button>
        {
          things.map((x)=>(<p  key={x}>{x}</p>))
        }
      </div>
    </div>
  );
}

export default App;
