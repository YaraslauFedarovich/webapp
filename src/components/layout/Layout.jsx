import React from "react"
import { Link, Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import styles from "../styles/styles.module.scss"

const webApp = window.Telegram.WebApp;

export function Layout() {
   return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
      <div className={styles.startGameContainer}>
        <div className={styles.startPage}>
          <h3>
            START PAGE
          </h3>
          <button className={styles.startGameButton}>
            <Link to={"/game"}>START GAME</Link>
          </button>
        </div>
      </div>
      </Route>
      <Route path={"/game"}>
       <Game webApp={webApp}/>
      </Route>
    </Switch>
  </React.Fragment>);
}