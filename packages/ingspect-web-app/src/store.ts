import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { AllAction } from "./actions";
import app, { AppState } from "./reducers";

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: (...arg: any) => any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (...arg: any) => any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<AppState, AllAction, {}, {}>(
  app,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
