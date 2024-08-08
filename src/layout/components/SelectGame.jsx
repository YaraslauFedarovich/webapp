import React, { useState } from "react";
import styles from "../styles.module.scss";
import { SlideLeftAnimation } from "../../animation/SlideLeftAnimation";
import { StepButton } from "./StepButton";

export function SelectGame({ isLoading, actions, user }) {
  const [count, setCount] = useState(0)
  const [reversed, setReversed] = useState(false)
  const [select, setSelect] = useState("r")

  const handleSelectChange = (e) => {
    setSelect(e)
  }

  const saveGameState = () => {
    actions.saveGameState({
      current_game: select,
      count: count,
      reversed: reversed,
      current_level: user.level,
      tg_id: 876667511
    })
  }

  return (<div className={styles.gameContainer}>
    {!isLoading && <SlideLeftAnimation>
      <div className={styles.game}>
        <h3>Game types</h3>
        <select value={select}  onChange={(e) => handleSelectChange(e.target.value)} className={styles.select}>
          <option value={'g'}>Random with count</option>
          <option value={'g-e'}>Endless</option>
        </select>
        {select !== "p" && <div>
          <h3>Reversed</h3>
          <input value={reversed} onChange={(e) => setReversed(!reversed)} type={"checkbox"}/>
        </div>}
        <h3>Count</h3>
        <input value={count} type={"number"} onChange={(e) => setCount(parseInt(e.target.value))} className={styles.input}/>
      </div>
    </SlideLeftAnimation>}
    <StepButton isLoading={isLoading} path={"/play"} text={"START"} onClick={saveGameState}/>
  </div>);
}