import { combineReducers } from "redux";

import { AllAction } from "../actions";
import progress from "./loading";
import search, { ISearchState } from "./search";

// tslint:disable-next-line:interface-name
export interface AppState {
  search: ISearchState;
  progress: number;
}

const combinedReducers = combineReducers<AppState, AllAction>({
  search,
  progress
});

export default combinedReducers;
