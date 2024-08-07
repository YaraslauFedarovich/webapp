import React from "react";
import styles from "../../styles/styles.module.scss";
import { Link } from "react-router-dom";

export function StartPage() {

  return (<div className={styles.startGameContainer}>
    <div className={styles.startPage}>
      <h3>
        START PAGE
      </h3>
      <button className={styles.startGameButton}>
        <Link to={"/game"}>START GAME</Link>
      </button>
    </div>
  </div>)
}