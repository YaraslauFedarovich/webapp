import { ACTIONS } from "./constant"

const initialState = {
  user: {},
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
             return { ...state, user: action.payload }
    case ACTIONS.SET_LOADING:
             return { ...state, isLoading: action.payload }
    default:
      return state
  }
}