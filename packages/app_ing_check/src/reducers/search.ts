import { Reducer, combineReducers } from "redux";
import ingCheck, { ICategorizeResult } from "ing_check";

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
  console.log(`searchResult reducer: ${action.type}`);
  switch (action.type) {
    case ACTION_TYPE.DO_SEARCH:
      const ingList = action.query.split(",").map(ing => ing.trim());
      const categorizeOption = { minSimilarity: 0.85 };

      const result = ingCheck.categorize(
        ingList,
        ingCheck.ingDict,
        categorizeOption
      );

      console.log(`searchResult: ${JSON.stringify(result, null, 4)}`);
      return result;
    default:
      return state;
  }
};

const combinedReducers = combineReducers<ISearchState>({
  searchText,
  searchResult
});

export default combinedReducers;
