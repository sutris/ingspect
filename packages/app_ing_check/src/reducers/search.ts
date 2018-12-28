import ingCheck, { ICategorizeResult } from "ing_check";
import { combineReducers, Reducer } from "redux";

import { ACTION_TYPE, AllAction } from "../actions";

export interface ISearchState {
  searchText: string;
  searchResult: ICategorizeResult;
}

const searchText: Reducer<string, AllAction> = (state = "", action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_SEARCH_INPUT:
      return action.text;
    default:
      return state;
  }
};

const searchResult: Reducer<ICategorizeResult, AllAction> = (
  state = {},
  action
) => {
  switch (action.type) {
    case ACTION_TYPE.DO_SEARCH:
      const ingList = action.query
        .split(/[,\(\)\[\]]/)
        .map(ing => ing.trim())
        .filter(str => str.length !== 0);
      const categorizeOption = { minSimilarity: 0.85 };
      const result = ingCheck.categorize(
        ingList,
        ingCheck.ingDict,
        categorizeOption
      );

      return result;
    default:
      return state;
  }
};

const combinedReducers = combineReducers<ISearchState, AllAction>({
  searchText,
  searchResult
});

export default combinedReducers;
