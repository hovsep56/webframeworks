import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Inputfields = ()=>{

  const [name,setname] = useState<string>('');

  const handlechange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
      setname(event.target.value)
  }

  return(
    <div className="App">
      <input onChange={handlechange} value={name}></input>
      <input onChange={handlechange} value={name}></input>
      <input onChange={handlechange} value={name}></input>
      <input onChange={handlechange} value={name}></input>
      <input onChange={handlechange} value={name}></input>
    </div>
  )
}


const App = () => {

  return (
    <Inputfields/>
  );
}

export default App;
