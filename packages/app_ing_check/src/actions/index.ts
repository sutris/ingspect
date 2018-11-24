import {
  changeSearchInput,
  doSearch,
  IChangeSearchInputAction,
  IDoSearchAction,
  SEARCH_ACTION_TYPE
} from "./search";

export type AllAction = IChangeSearchInputAction | IDoSearchAction;
export const ACTION_TYPE = { ...SEARCH_ACTION_TYPE };
export { changeSearchInput, doSearch };
