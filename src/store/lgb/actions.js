import { ACTIONS } from "./constant";
//import { post, get } from "../../api/api-handler";

export const setUser = (user) => ({
  type: ACTIONS.SET_USER,
  payload: user
})

export const setUserLevel = (level) => ({
  type: ACTIONS.SET_USER_LEVEL,
  payload: level
})

export const setGameState = (game) => ({
  type: ACTIONS.SET_GAME_STATE,
  payload: game
})

export const setLoading = (loading) => ({
  type: ACTIONS.SET_LOADING,
  payload: loading
})

export const getUserProfile = (id) => (dispatch) => {
  // get("/get-user-profile", id).then(resp => {
  //   dispatch(setUser(resp))
  // })

 dispatch(setUser({
   id: 876667511,
   first_name: "Yaroslav",
   last_name: "Vladimirovich",
   username: "yaraslau_the_wise",
   level: "a1",
   stats: {streak: 999}
 }))
}

export const saveGameState = (game) => (dispatch) => {
  // dispatch(setLoading(true))
  // post("/save-game-state/", game).then(resp => {
  //   dispatch(setGameState(resp))
  //   dispatch(setLoading(false))
  // })

  dispatch(setGameState({
    current_game: "g",
    count: 5,
    is_reversed: false,
    current_level: "b1",
    tg_id: 876667511
  }))
}

export const getGameState = (id) => (dispatch) => {
  // get("/get-game-state/", id).then(resp => {
  //   dispatch(setGameState(resp))
  // })

  dispatch(setGameState({
    current_game: null,
    count: 5,
    is_reversed: false,
    current_level: "b1",
    tg_id: 876667511
  }))
}

export const saveUserLevel = (user) => (dispatch) => {
  // dispatch(setLoading(true))
  // post("/save-user-level", user).then(resp => {
  //   dispatch(setUserLevel(resp.level))
  //   dispatch(setLoading(false))
  // })


  dispatch(setLoading(true))

  setTimeout(() => {
    dispatch(setUserLevel("b2"))

    dispatch(setLoading(false))
  }, 1000)
}