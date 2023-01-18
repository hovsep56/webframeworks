import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <>
      <div>
        <header>
          <nav className={styles.topnavigation}>
            <ul>
              <li>
                <NavLink className={({isActive})=>isActive? styles.active : styles.notactive} to="">home</NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>isActive? styles.active : styles.notactive} to="pokemon">pokemon</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default Root;
