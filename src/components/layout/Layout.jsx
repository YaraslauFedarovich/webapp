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
    setQuery(webApp.initDataUnsafe?.query_id)
  }, [])

  return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
        <StartPage/>
      </Route>
      <Route path={"/game"}>
        <Game webApp={webApp}/>
      </Route>
    </Switch>
    <div>{query}</div>
  </React.Fragment>);
}