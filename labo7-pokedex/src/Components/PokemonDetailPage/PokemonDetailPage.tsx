import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pokemon } from "../../types";
import styles from "./PokemonDetailPage.module.css"



const PokemonDetailPage =()=>{
    const {id}=useParams();
    const [currentpok,setCurrentPok]=useState<Pokemon>();

    const loadPokemonById =async(id:number)=>{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pokemon: Pokemon = await response.json();
        setCurrentPok(pokemon)
    }

    useEffect(()=>{
        loadPokemonById(Number(id));
    },[id])
    return(
        <main>
            {currentpok!==undefined && 
                <article className={styles.pokemonDetail}>
                    <img src={currentpok.sprites?.front_default}/>
                    <p>Name: {currentpok.name}</p>
                    <p>Weight: {currentpok.weight}</p>
                    <p>Height {currentpok.height}</p>
                    <Link to="/pokemon">Back</Link>
                </article>}
        </main>
    )
}

export default PokemonDetailPage