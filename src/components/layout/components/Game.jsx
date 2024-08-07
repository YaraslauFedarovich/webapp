import React, { useState } from "react";
import styles from "../../styles/styles.module.scss";

export function Game() {
  const [count, setCount] = useState(0)
  const [reversed, setReversed] = useState(false)
  const [showCount, setShowCount] = useState(false)
  const [select, setSelect] = useState("r")

  const handleSelectChange = (e) => {
    setShowCount(e === "g" || e === "p")
    setSelect(e)
  }

  return (<div className={styles.form}>
    <h3>Game types</h3>
    <select value={select}  onChange={(e) => handleSelectChange(e.target.value)} className={styles.select}>
      <option value={'r'}>Random</option>
      <option value={'g'}>Random with count</option>
      <option value={'g-e'}>Endless game</option>
      <option value={'p'}>Practice</option>
    </select>
    {select !== "p" && <div>
      <h3>Reversed</h3>
      <input value={reversed} onChange={(e) => setReversed(!reversed)} type={"checkbox"}/>
    </div>}
    {showCount && <React.Fragment>
      <h3>Count</h3>
      <input value={count} type={"number"} onChange={(e) => setCount(parseInt(e.target.value))} className={styles.input}/>
    </React.Fragment>}
  </div>);
}