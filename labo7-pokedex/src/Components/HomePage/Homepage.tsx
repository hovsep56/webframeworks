import React, { useContext } from "react";
import styles from "./Homepage.module.css";
import DataContext from "../../DataContext";

const Homepage =()=>{
    const {pokemon} = useContext(DataContext)
    return(
        <main>
            <figure>
                <img src="/oak.png" className={styles.oak}/>
            </figure>
            <section>
            <p>Hello there! Welcome to the world of POKEMON!</p>

            <p>My name is OAK! People call me the POKEMON PROF!</p>

            <p>This world is inhabited by creates called POKEMON!</p>

            <p>For some people Pokemon are pets. Myself...I study POKEMON as a profession.</p>

            <p>There are {pokemon.length} pokemon in the world</p>
            </section>
        </main>
    )
}

export default Homepage