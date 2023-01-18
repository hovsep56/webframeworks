import React, { useContext, useState } from "react";
import styles from "./PokemonListPage.module.css"
import { Pokemon } from "../../types";
import { Link } from "react-router-dom";
import DataContext from "../../DataContext";

interface PokemonListProps{

}

const PokemonListPage =()=>{
    const {pokemon}=useContext(DataContext)

    const [filter,setfilter] = useState("")

    return(
    <main>
        <input type="text" className={styles.search} value={filter} onChange={(e)=>setfilter(e.target.value)}/>
        {pokemon.filter((e)=>e.name.toUpperCase().startsWith(filter.toUpperCase())).map((e)=>(
            <Link to={`/pokemon/${e.id}`} className={styles.listitem}>{e.name}</Link>
        ))}
    </main>
    )

    
}

export default PokemonListPage