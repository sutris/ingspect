import { Action } from "redux";

export enum SEARCH_ACTION_TYPE {
  CHANGE_SEARCH_INPUT = "CHANGE_SEARCH_INPUT",
  DO_SEARCH = "DO_SEARCH"
}

export interface IChangeSearchInputAction extends Action {
  type: SEARCH_ACTION_TYPE.CHANGE_SEARCH_INPUT;
  text: string;
}

function changeSearchInput(text: string): IChangeSearchInputAction {
  return {
    type: SEARCH_ACTION_TYPE.CHANGE_SEARCH_INPUT,
    text
  };
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

export { changeSearchInput, doSearch };
