import React from 'react';
import logo from './logo.svg';
import './App.css';

const randomslot=(amountofslots:number)=>{
  let slots:number[]=[];

  for (let index = 0; index < amountofslots; index++) {
    slots.push(Math.floor(Math.random()*5))
  }

  return slots
}

let slot1 = Math.floor(Math.random()*5)
let slot2 = Math.floor(Math.random()*5)
let slot3 = Math.floor(Math.random()*5)
let slots = randomslot(3);
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
  let winning: boolean = true;
  for (let index = 0; index < slots.length; index++) {
    if(slots[index]!== slots[0])
    {
      winning= false;
    }
  }
  return (
    <div>
        {images.map((imgs)=><img src={imgs} width = '100'/>)}
       <h1>{winning ? "je hebt gewonnen": "je hebt verloren"}</h1><br></br>
       {slots.map((index)=><img src={images[index]} width = '100'></img>)}
    </div>
  );
}

export default App;

//if statement in html section
//{winning ? "je hebt gewonnen": "je hebt verloren"}