import { combineReducers, createStore } from "redux";
import inputsReducer from "./inputs-reducer";

let reducers = combineReducers({
  inputsReducer,
});

const store = createStore(reducers);

export default store;
