import { categorize, CategorizeResult, ingDict } from "ingspect-lib";
import { combineReducers, Reducer } from "redux";

import { ACTION_TYPE, AllAction } from "../actions";

export interface ISearchState {
  searchResult: CategorizeResult;
}

const searchResult: Reducer<CategorizeResult, AllAction> = (
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
      const result = categorize(ingList, ingDict, categorizeOption);

      return result;
    default:
      return state;
  }
};

const combinedReducers = combineReducers<ISearchState, AllAction>({
  searchResult
});

export default combinedReducers;
