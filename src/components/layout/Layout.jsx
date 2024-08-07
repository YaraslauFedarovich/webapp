import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import { StartPage } from "./components/StartPage";
import { useTelegram } from "../hooks/useTelegram";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUser } from "../../store/lgb/actions";
import { Level } from "./components/Level";

function Layout({ user, actions }) {
  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready()
    tg.expand()

    console.log(tg.initDataUnsafe)
  }, [tg])

  return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
        <StartPage actions={actions}/>
      </Route>
      <Route path={"/game"}>
        <Game />
      </Route>
      <Route path={"/level"}>
        <Level />
      </Route>
    </Switch>
  </React.Fragment>);
}

const mapStateToProps = ({ lgb }) => ({
  user: lgb.user
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setUser }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)