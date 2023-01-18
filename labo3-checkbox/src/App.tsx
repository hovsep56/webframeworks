import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import pics from './pic/testpic.jpg';

const Checkbox=()=>{
  const [check,setcheck] = useState(false);

  //'check&&' is used to check if the variable is true or false before showing the div
  return(
    <div className="App">
      <input type = "checkbox" onChange={(event =>setcheck(event.target.checked))}></input>
      {check&&
      <div>
        <img src={pics} ></img>
      </div>}
      
    </div>
  )
}

function App() {
  return (
    <Checkbox/>
  );
}

export default App;
