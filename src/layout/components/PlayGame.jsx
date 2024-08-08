import React from "react";
import styles from "../styles.module.scss"
import { SlideLeftAnimation } from "../../animation/SlideLeftAnimation";

export function PlayGame({ gameState, actions }) {

  return <div className={styles.playContainer}>
   <SlideLeftAnimation>
     <h3>Lets play</h3>
   </SlideLeftAnimation>
  </div>
}