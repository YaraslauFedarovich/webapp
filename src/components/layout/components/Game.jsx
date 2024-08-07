import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/styles.module.scss";

export function Game({ webApp }) {
  const [count, setCount] = useState(0)
  const [level, setLevel] = useState("a1")
  const [reversed, setReversed] = useState(false)
  const [showCount, setShowCount] = useState(false)
  const [select, setSelect] = useState("r")

  const onSendData = useCallback(() => {
    const data = select + (reversed ? "-r" : "") + " " + level + " " + (select === "g" || select === "p" ? count : "")
    webApp.sendData(data)
  }, [count, reversed, select, level, webApp])

  useEffect(() => {
    if ((count === 0 || count > 50) && (select === "g" || select === "p")) {
      webApp.MainButton.disable()
    } else {
      webApp.MainButton.enable()
    }
  }, [count, select, webApp.MainButton])

  useEffect(() => {
    webApp.MainButton.setParams({
      text: "Start game",
    });
    webApp.MainButton.show()
  }, [webApp.MainButton])

  useEffect(() => {
    webApp.onEvent('mainButtonClicked', onSendData)
    return () => {
      webApp.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, webApp])

  const handleSelectChange = (e) => {
    setShowCount(e === "g" || e === "p")
    setSelect(e)
  }

  const handleCountChange = (e) => {
    setCount(e)
    if (e > 0 && e <= 50) {
      webApp.MainButton.enable()
    } else {
      webApp.MainButton.disable()
    }
  }

  return (<div className={styles.form}>
    <h3>Game types</h3>
    <select value={select}  onChange={(e) => handleSelectChange(e.target.value)} className={styles.select}>
      <option value={'r'}>Random</option>
      <option value={'g'}>Random with count</option>
      <option value={'g-e'}>Endless game</option>
      <option value={'p'}>Practice</option>
    </select>
    <h3>English level</h3>
    <select value={level}  onChange={(e) => setLevel(e.target.value)} className={styles.select}>
      <option value={'a1'}>A1</option>
      <option value={'a2'}>A2</option>
      <option value={'b1'}>B1</option>
      <option value={'b2'}>B2</option>
      <option value={'c1'}>C1</option>
    </select>
    {select !== "p" && <div>
      <h3>Reversed</h3>
      <input value={reversed} onChange={(e) => setReversed(!reversed)} type={"checkbox"}/>
    </div>}
    {showCount && <React.Fragment>
      <h3>Count</h3>
      <input value={count} type={"number"} onChange={(e) => handleCountChange(e.target.value)} className={styles.input}/>
    </React.Fragment>}
  </div>);
}