import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware  from 'redux-thunk';
import catReducer from "./reducer";

const reducers = combineReducers({
  catsPage: catReducer,
})

const store = createStore (reducers, applyMiddleware (thunkMiddleware));

window.store = store;

export default store;