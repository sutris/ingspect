import { combineReducers } from "redux";

import { AllAction } from "../actions";
import progress, { ProgressState } from "./loading";
import search, { ISearchState } from "./search";

// tslint:disable-next-line:interface-name
export interface AppState {
  search: ISearchState;
  progress: ProgressState;
}

const combinedReducers = combineReducers<AppState, AllAction>({
  search,
  progress
});

export default combinedReducers;
