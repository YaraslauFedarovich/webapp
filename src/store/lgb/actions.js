import { ACTIONS } from "./constant";
import { post, get } from "../../api/api-handler";

export const setUser = (user) => ({
  type: ACTIONS.SET_USER,
  payload: user
})

export const setUserLevel = (level) => ({
  type: ACTIONS.SET_USER_LEVEL,
  payload: level
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
   stats: {streak: 999}
 }))
}

export const saveUserLevel = (user) => (dispatch) => {
  // post("/save-user-level", user).then(resp => {
  //   dispatch(setUser(resp))
  // })

  dispatch(setUser({
    id: 876667511,
    first_name: "Yaroslav",
    last_name: "Vladimirovich",
    username: "yaraslau_the_wise",
    level: "c1"
  }))
}