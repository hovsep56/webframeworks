import React from 'react';
import logo from './logo.svg';
import './App.css';

interface student{
  id:number,
  naam:string,
  leeftijd:number
}

let nummers: number[] =[1,2,3,4,5,1,1]
let studenten: student[] =[
  {id:0,naam:"jeff",leeftijd:16},
  {id:1,naam:"bezos",leeftijd:45},
  {id:2,naam:"oldman",leeftijd:60},
]
//make sure you wrap the td values with a tr.
const App=()=> {
  return (
    <div>
        <h2>getallijst</h2>
        <ul>{nummers.map((nummers)=><li>{nummers}</li>)}</ul>
        <h2>studentlijst</h2>
        <ol>{studenten.map((student,index)=><li>{student.naam}</li>)}</ol>
        <h2>studentlijst met j</h2>
        <ol>{studenten.filter((student)=>student.naam[0]=="j").map((studenten)=><li>{studenten.naam}</li>)}</ol>
        <h2>select</h2>
        <select>{studenten.map((student)=><option>{student.naam}</option>)}</select>
        <h2>table</h2>
        <table>
          <thead>
            <th>Naam</th>
            <th>Leeftijd</th>
          </thead>
          <tbody>
            {studenten.map((student)=><tr><td>{student.naam}</td><td>{student.leeftijd}</td></tr>)}
          </tbody>
        </table>
    </div>
  );
}

export default App;
