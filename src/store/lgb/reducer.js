import { ACTIONS } from "./constant"

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
             return { ...state, user: action.payload }
    default:
      return state
  }
}