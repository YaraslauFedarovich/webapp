import React, { useState } from "react";
import styles from "../../styles/styles.module.scss";
import { Link } from "react-router-dom";

export function Level() {

  const [level, setLevel] = useState("a1")

  return <div className={styles.levelPage}>
    <div className={styles.labelFlex}><h3>Select your level</h3></div>
    <select value={level}  onChange={(e) => setLevel(e.target.value)} className={styles.select}>
      <option value={'a1'}>A1</option>
      <option value={'a2'}>A2</option>
      <option value={'b1'}>B1</option>
      <option value={'b2'}>B2</option>
      <option value={'c1'}>C1</option>
    </select>
    <button className={styles.stepButton}><Link to={"/game"}>Confirm</Link></button>
  </div>
}