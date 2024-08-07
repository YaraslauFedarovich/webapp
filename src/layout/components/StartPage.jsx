import React from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";
import { SlideLeftAnimation } from "../../animation/SlideLeftAnimation";

export function StartPage({ actions }) {

  return (<div className={styles.startGameContainer}>
    <div className={styles.startPage}>
     <SlideLeftAnimation>
       <div className={styles.labelFlex}><h3> START PAGE</h3></div>
     </SlideLeftAnimation>
      <button className={styles.stepButton}>
        <Link to={"/level"}>Next</Link>
      </button>
    </div>
  </div>)
}