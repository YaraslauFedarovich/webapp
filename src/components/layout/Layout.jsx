import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import { StartPage } from "./components/StartPage";

const webApp = window.Telegram.WebApp;

export function Layout() {

  const [query, setQuery] = useState("query")

  useEffect(() => {
    webApp.ready()
    webApp.expand()
  }, [])

  return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
        <StartPage query={webApp.initDataUnsafe.query_id}/>
      </Route>
      <Route path={"/game"}>
        <Game webApp={webApp}/>
      </Route>
    </Switch>
  </React.Fragment>);
}