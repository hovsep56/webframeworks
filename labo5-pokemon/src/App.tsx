import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ColorRing } from 'react-loader-spinner';

interface details {
  count: number;
  next: string;
  previous: any;
  results: pokemon[];
}
interface pokemon {
  name: string;
  url: string;
}

interface limitnumber {
  limit: number;
}

const Pokedex = ({ limit }: limitnumber) => {
  const [poke, setpoke] = useState<pokemon[]>([]);
  const [filt, setfilt] = useState("");
  const [loading,setloading]= useState(true)



  useEffect(() => { 
    const Fetchfunction = async () => {
      setloading(true)
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      let data: details = await response.json();
      console.log(data);
      setpoke(data.results);
      setloading(false)
    };
    
    Fetchfunction();
  }, [limit]);


  return (
    <div>
      <div><ColorRing visible={loading}/></div>
      <input onChange={(e) => setfilt(e.target.value)} value={filt}></input>
      <ul>
        {poke
          .filter((obj) => obj.name.startsWith(filt))
          .map((e) => (
            <li>{e.name}</li>
          ))}
      </ul>
      
    </div>
  );
};

function App() {
  //create two usestates so it doesn't update every input.
  const [lim, setlim] = useState(10);
  const [selectedlim,setselectedlim]=useState(10)
  return (
    <div>
      
      <Pokedex limit={selectedlim} />
      <input
        type="text"
        onChange={(e) => setlim(parseInt(e.target.value))}
      ></input>
      <button onClick={()=>setselectedlim(lim)}> Set limit</button>
    </div>
  );
}

export default App;
