import React,{useState,useEffect} from 'react';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Homepage from "./Components/HomePage/Homepage"
import PokemonListPage from './Components/PokemonListPage/PokemonListPage';
import PokemonDetailPage from './Components/PokemonDetailPage/PokemonDetailPage';
import { Pokemon, PokemonRoot } from './types';
import userEvent from '@testing-library/user-event';
import DataContext from './DataContext';


const getIdFromUrl=(url:string)=>parseInt(url.replace("https://pokeapi.co/api/v2/pokemon/","").substring(-1));


//`https://pokeapi.co/api/v2/pokemon?limit=${limit}`

function App() {
  const [pokemon,setPokemon] = useState<Pokemon[]>([]);

  const LoadPokemon=async()=>{
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    let data: PokemonRoot = await response.json();
    setPokemon(data.results.map(pokemon =>{
      return {...pokemon,id: getIdFromUrl(pokemon.url!)}
    }));
  }

  useEffect(()=> {
    LoadPokemon();
  },[])
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Root/>,
      children: [
        {
          path:"",
          element: <Homepage/>
        },
        {
          path:"pokemon",
          element:<PokemonListPage/>
        },
        {
          path: "pokemon/:id",
          element: <PokemonDetailPage />
        }
        
      ]
    }
  ])

  return (
    <div>
      <DataContext.Provider value={{pokemon:pokemon}}>
      <RouterProvider router={router}/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
