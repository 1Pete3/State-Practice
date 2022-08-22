import './App.css';
import React from 'react';
function Test() {
  const [arr, setArr] = React.useState(['Thing 1', 'Thing 2']);
  const showElements = arr.map((x)=>(<p  key={x}>{x}</p>));
  return (
    <div className="App">
      <div>
        <button>Add Item</button>
        {showElements}
      </div>
    </div>
  );
}

export default Test;
