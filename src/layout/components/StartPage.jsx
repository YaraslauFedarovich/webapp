import React from "react";
import styles from "../styles.module.scss";
import { ShowAnimation } from "../../animation/ShowAnimation";
import { StepButton } from "./StepButton";

export function StartPage({ isLoading }) {

  return (<div className={styles.startGameContainer}>
    <ShowAnimation className={styles.startPage}>
      <div className={styles.labelFlex}><h3> START PAGE</h3></div>
      <StepButton isLoading={isLoading} path={"/level"} text={"NEXT"}/>
    </ShowAnimation>
  </div>)
}