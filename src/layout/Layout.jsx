import React, { useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom";
import { SelectGame } from "./components/SelectGame";
import { StartPage } from "./components/StartPage";
import { useTelegram } from "../hooks/useTelegram";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGameState, getUserProfile, saveGameState, saveUserLevel, setLoading, setUser } from "../store/lgb/actions";
import { Level } from "./components/Level";
import { PlayGame } from "./components/PlayGame";

function Layout({ user, loading, actions, gameState }) {
  const {tg} = useTelegram()
  const history = useHistory()

  useEffect(() => {
    tg.ready()
    tg.expand()
  }, [tg])

  useEffect(() => {
    actions.getUserProfile(876667511)
    actions.getGameState(876667511)
  }, [actions])

  useEffect(() => {
    // if (gameState?.current_game) {
    //   history.push("/play")
    // }
  }, [gameState, history])

  return (<React.Fragment>
    <Switch>
      <Route exact path={"/"}>
        <StartPage isLoading={loading}/>
      </Route>
      <Route path={"/game"}>
        <SelectGame isLoading={loading} actions={actions} user={user}/>
      </Route>
      <Route path={"/play"}>
        <PlayGame gameState={gameState} actions={actions}/>
      </Route>
      <Route path={"/level"}>
        <Level actions={actions} user={user} isLoading={loading}/>
      </Route>
    </Switch>
  </React.Fragment>);
}

const mapStateToProps = ({ lgb }) => ({
  user: lgb.user,
  gameState: lgb.gameState,
  loading: lgb.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setUser, setLoading, getUserProfile, saveUserLevel, saveGameState, getGameState }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)