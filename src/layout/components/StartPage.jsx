import React from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";

export function StartPage({ actions }) {

  return (<div className={styles.startGameContainer}>
    <div className={styles.startPage}>
      <div className={styles.labelFlex}><h3> START PAGE</h3></div>
      <button className={styles.stepButton}>
        <Link to={"/level"}>Next</Link>
      </button>
    </div>
  </div>)
}