import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import lgb from "./lgb/reducer"
import thunk from 'redux-thunk';

const enhancers = !window.__REDUX_DEVTOOLS_EXTENSION__
    ? applyMiddleware(thunk)
    : compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())

export const createDogsStore = () => createStore(combineReducers({ lgb }), enhancers);