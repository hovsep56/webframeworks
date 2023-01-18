import React from 'react';
import logo from './logo.svg';
import './App.css';

let slot1 = Math.floor(Math.random()*5)
let slot2 = Math.floor(Math.random()*5)
let slot3 = Math.floor(Math.random()*5)

// you can store an if statement in a variable
let winning = slot1 ===slot2 && slot2 === slot3;

let images =[
  require("./slotpics/cherry.png"),
  require("./slotpics/grape.png"),
  require("./slotpics/lemon.png"),
  require("./slotpics/melon.png"),
  require("./slotpics/Seven.png"),
]





const App=() => {
  return (
    <div>
      <img src={require("./slotpics/cherry.png")}  width="100"></img>
      <img src={require("./slotpics/grape.png")} width="100"></img>
      <img src={require("./slotpics/lemon.png")} width="100"></img>
      <img src={require("./slotpics/melon.png")} width="100"></img>
      <img src={require("./slotpics/Seven.png")}  width="100"></img><br></br>
       <h1>{winning ? "je hebt gewonnen": "je hebt verloren"}</h1><br></br>
       <img src={images[slot1]} width="100"></img>
       <img src={images[slot2]} width="100"></img>
       <img src={images[slot3]} width="100"></img>
    </div>
  );
}

export default App;

//if statement in html section
//{winning ? "je hebt gewonnen": "je hebt verloren"}