import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Joke {
  id: string;
  joke: string;
  status: number;
}
const Dadjoke = () => {
  const [joke, setJoke] = useState("");
  // the "favjoke" string is the name given to the saved data
  const [favorite,setFavorite] = useState<string>(localStorage.getItem("favjoke")??"")


  const Getjoke = async () => {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    let data: Joke = await response.json();
    setJoke(data.joke);
  };

  const Savefavorite=()=>{
    localStorage.setItem("favjoke",joke)
    loadfavjoke()
  }
  //use if so it can know if it truly has something inside the local storage or not
  const loadfavjoke=()=>{
    let local = localStorage.getItem("favjoke")
    if(local){
      setFavorite(local)
    }
  }

  //use use effect to execute a function when loading the website (make sure you use [] at the end to prevent looping)
  useEffect(()=>{
    Getjoke()
    loadfavjoke()
  },[])

  return (
    <div>
      <div>{joke}</div>
      <button onClick={Getjoke}>New joke</button>
      <button onClick={Savefavorite}>Save joke</button>
      <div>{favorite}</div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Dadjoke />
    </div>
  );
}

export default App;
