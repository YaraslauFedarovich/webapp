import React, { useEffect } from "react";
import styles from "../styles.module.scss";
import { ShowAnimation } from "../../animation/ShowAnimation";
import { StepButton } from "./StepButton";
//import { useHistory } from "react-router-dom";

export function StartPage({ actions, user, tgUser, isLoading }) {

 // const history = useHistory()

  useEffect(() => {
    actions.getUserProfile(876667511)
  }, [actions])

  // useEffect(() => {
  //   if (user.id) {
  //     history.push("/play")
  //   }
  // }, [user])


  return (<div className={styles.startGameContainer}>
    <div className={styles.startPage}>
     <ShowAnimation>
       <div className={styles.labelFlex}><h3> START PAGE</h3></div>
     </ShowAnimation>
      <StepButton isLoading={isLoading} path={"/level"} text={"NEXT"}/>
    </div>
  </div>)
}