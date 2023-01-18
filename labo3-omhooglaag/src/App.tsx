import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//DON'T FORGET THAT A COMPONENT CREATES A DIFFERENT INSTANCE WHEN COPIED IN THE APP FUNCTION!!!!
const Counter =()=>{
  const [number,setnumber] = useState<number>(0);

  const Increase=()=>{
    setnumber(number+1)
  };

  const Decrease=()=>{
    setnumber(number-1)
  };
  const Colorcheck=()=>{
    let colorstate='';
    if (number>0) {
      return (<text style={{color:"green",fontWeight:"bold"}}>count: {number}</text>)
    }
    else if (number<0) {
      return (<text style={{color:"red",fontWeight:"bold"}}> count: {number} </text>)
    }
    else{
      return (<text style={{color:"black",fontWeight:"bold"}}> count: {number} </text>)
    }
  }
  return(
    <div>
      <button onClick={Increase}>omhoog</button>&nbsp;
       <Colorcheck/>&nbsp;
      <button onClick={Decrease}>omlaag</button>
    </div>
  )
}

function App() {
  return (
    <div className ='App'>
    <Counter/>
    <Counter/>
    <Counter/>
    </div>
  );
}

export default App;
