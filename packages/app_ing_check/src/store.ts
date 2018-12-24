import { createStore } from "redux";

import { AllAction } from "./actions";
import app, { AppState } from "./reducers";

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    // tslint:disable-next-line:ban-types
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
