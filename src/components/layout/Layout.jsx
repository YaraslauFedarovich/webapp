import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import { StartPage } from "./components/StartPage";

const webApp = window.Telegram.WebApp;

export function Layout() {

  useEffect(() => {
    webApp.ready()
    webApp.expand()
  }, [])

  return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
        <StartPage query={webApp.initData.query_id ? webApp.initData.query_id: "query"}/>
      </Route>
      <Route path={"/game"}>
        <Game webApp={webApp}/>
      </Route>
    </Switch>
  </React.Fragment>);
}