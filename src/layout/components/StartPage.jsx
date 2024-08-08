import React, { useEffect } from "react";
import styles from "../styles.module.scss";
import { Link } from "react-router-dom";
import { ShowAnimation } from "../../animation/ShowAnimation";

export function StartPage({ actions, user, tgUser }) {

  useEffect(() => {
    actions.getUserProfile(876667511)
  }, [actions])


  return (<div className={styles.startGameContainer}>
    <div className={styles.startPage}>
     <ShowAnimation>
       <div className={styles.labelFlex}><h3> START PAGE</h3></div>
     </ShowAnimation>
      <button className={styles.stepButton}>
        <Link to={"/level"}>Next</Link>
      </button>
    </div>
  </div>)
}