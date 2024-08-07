import { ACTIONS } from "./constant";
// import { post, get } from "../../api/api-handler";

export const setUser = (user) => ({
  type: ACTIONS.SET_USER,
  payload: user
})

export const setLoading = (loading) => ({
  type: ACTIONS.SET_LOADING,
  payload: loading
})