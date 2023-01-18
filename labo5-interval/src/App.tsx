import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

//create interface to make parameter work
interface TimerProps {
  interval: number
}
interface randomstats{
  min:number,
  max:number
}


const Timer =({interval}:TimerProps)=>{
  const [timer,settimer] = useState(0);
  
  useEffect(()=>{
    let inter= setInterval(()=>{
      settimer(timer+1)
    },interval);
//clearinterval used to fix interval glitch
    return () => {
      clearInterval(inter);
    }
  })
  
  return(
    <div>
     Timer: {timer}
    </div>
  )
}

const Time =({interval}:TimerProps)=>{
  const [date,setdate] = useState(new Date());
  useEffect(()=>{
    let inter= setInterval(()=>{
      setdate(new Date())
    },interval);

    return () => {
      clearInterval(inter);
    }
  })
  
  return(
    <div>
     Current time: {date.toLocaleTimeString()}
    </div>
  )
}

const Random =({min,max}:randomstats)=>{
  const [random,setrandom] = useState(Math.floor(Math.random()* (max - min + 1))+min);
  
  useEffect(()=>{
    let inter= setInterval(()=>{
      setrandom(Math.floor(Math.random()* (max - min + 1))+min)
    },1000);

    return () => {
      clearInterval(inter);
    }
  })
  
  return(
    <div>
      Random value between {min} and {max}: {random}
    </div>
  )
}
//1 = 1 millisecond, 1000 = 1 second
function App() {
  return (
    <div>
      
      <Timer interval ={800}/>
      <Time interval ={1000}/>
      <Random min={1} max={100}/>
      <Random min={100} max={200}/>
    </div>
  );
}

export default App;
