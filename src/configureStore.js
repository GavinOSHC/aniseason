import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return store;
};
