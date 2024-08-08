import React, { useState } from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";
import { SlideLeftAnimation } from "../../animation/SlideLeftAnimation";

export function Level({ actions, user }) {
  const [level, setLevel] = useState("a1")

  function saveUserLevel() {
    actions.saveUserLevel({id: user.id, level: level})
  }

  return <div className={styles.levelPage}>
    <SlideLeftAnimation>
      <div className={styles.topContent}>
        <div className={styles.labelFlex}><h3>Select your level</h3></div>
        <select value={level}  onChange={(e) => setLevel(e.target.value)} className={styles.select}>
          <option value={'a1'}>A1</option>
          <option value={'a2'}>A2</option>
          <option value={'b1'}>B1</option>
          <option value={'b2'}>B2</option>
          <option value={'c1'}>C1</option>
        </select>
      </div>
    </SlideLeftAnimation>
    <button className={styles.stepButton} onClick={saveUserLevel}><Link to={"/game"}>Confirm</Link></button>
  </div>
}