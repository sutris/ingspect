import {
  ISetProgressAction,
  LOADING_ACTION_TYPE,
  setProgress
} from "./loading";
import { recognizePicture } from "./picture_taker";
import {
  changeSearchInput,
  doSearch,
  IChangeSearchInputAction,
  IDoSearchAction,
  SEARCH_ACTION_TYPE
} from "./search";

export type AllAction =
  | IChangeSearchInputAction
  | IDoSearchAction
  | ISetProgressAction;
export const ACTION_TYPE = { ...SEARCH_ACTION_TYPE, ...LOADING_ACTION_TYPE };
export { changeSearchInput, doSearch, recognizePicture, setProgress };
