import { createStore } from "redux";

import app, { AppState } from "./reducers";
import { AllAction } from "./actions";

const store = createStore<AppState, AllAction, {}, {}>(app);

export default store;
