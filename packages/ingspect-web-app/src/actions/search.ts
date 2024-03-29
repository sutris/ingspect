import { Action } from "redux";

export enum SEARCH_ACTION_TYPE {
  DO_SEARCH = "DO_SEARCH"
}

export interface IDoSearchAction extends Action {
  type: SEARCH_ACTION_TYPE.DO_SEARCH;
  query: string;
}

function doSearch(query: string): IDoSearchAction {
  return {
    type: SEARCH_ACTION_TYPE.DO_SEARCH,
    query
  };
}

export { doSearch };
