import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import { Game } from "./components/Game";
import { StartPage } from "./components/StartPage";
import { useTelegram } from "../hooks/useTelegram";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLoading, setUser } from "../store/lgb/actions";
import { Level } from "./components/Level";
import { Loader } from "../loader/Loader";

function Layout({ user, loading, actions }) {
  const {tg} = useTelegram()

  useEffect(() => {
    tg.ready()
    tg.expand()

    console.log(tg.initDataUnsafe)
  }, [tg])

  return (<React.Fragment>
    <Loader isLoading={loading}/>
    <Switch>
      <Route exact path={"/"}>
        <StartPage actions={actions}/>
      </Route>
      <Route path={"/game"}>
        <Game />
      </Route>
      <Route path={"/level"}>
        <Level actions={actions}/>
      </Route>
    </Switch>
  </React.Fragment>);
}

const mapStateToProps = ({ lgb }) => ({
  user: lgb.user,
  loading: lgb.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setUser, setLoading }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)