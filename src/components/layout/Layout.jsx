import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import { StartPage } from "./components/StartPage";
import { useTelegram } from "../hooks/useTelegram";

export function Layout() {

  useEffect(() => {
    const {tg} = useTelegram()
    tg.ready()
    tg.expand()

    console.log(tg.initDataUnsafe)
  }, [])

  return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
        <StartPage />
      </Route>
      <Route path={"/game"}>
        <Game />
      </Route>
    </Switch>
  </React.Fragment>);
}