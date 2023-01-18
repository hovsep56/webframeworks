import React from 'react';
import logo from './logo.svg';
import './App.css';

const random = Math.random()
const getal1 = Math.floor(Math.random()*11)
const getal2 = Math.floor(Math.random()*11)

const App = () => {
  return (
      <div>
          <p>{random}</p>
          <p>{getal1}</p>
          <p>{getal2}</p>
      </div>
  );
}


export default App;
