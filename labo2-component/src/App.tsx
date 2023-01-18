import React from 'react';
import logo from './logo.svg';
//import don't forget to turn app.css file name into app.module.css!!!
import styles from './App.module.css';



const App=()=> {
  return (
    <header>
      <h1 style={{ fontSize:100 }}>labo 2</h1>
      <h1>basic components</h1>
      <ul>
        <li style={{paddingBottom:10}}>item 1</li>
        <li style={{paddingBottom:10}}>item 2</li>
        <li style={{paddingBottom:10}}>item 3</li>
      </ul>
    </header>
  );
}

export default App;
