import { createStore } from "redux";

import app, { AppState } from "./reducers";
import { AllAction } from "./actions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

const store = createStore<AppState, AllAction, {}, {}>(
  app,
  process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
