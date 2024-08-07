import React from "react"
import { Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import { StartPage } from "./components/StartPage";

const webApp = window.Telegram.WebApp;

export function Layout() {
   return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
     <StartPage />
      </Route>
      <Route path={"/game"}>
       <Game webApp={webApp}/>
      </Route>
    </Switch>
  </React.Fragment>);
}