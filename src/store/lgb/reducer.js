import { ACTIONS } from "./constant"

const initialState = {
  user: {},
  isLoading: false
}

const reducer =  (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
             return { ...state, user: action.payload }
    case ACTIONS.SET_LOADING:
             return { ...state, isLoading: action.payload }
    case ACTIONS.SET_USER_LEVEL:
             return { ...state, user: {...state.user, level: action.payload} }
    default:
      return state
  }
}

export default reducer;