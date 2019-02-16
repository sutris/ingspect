import {
  IResetProgressAction,
  ISetProgressAction,
  LOADING_ACTION_TYPE,
  resetProgress,
  setProgress
} from "./loading";
import { recognizePicture } from "./picture_taker";
import { doSearch, IDoSearchAction, SEARCH_ACTION_TYPE } from "./search";

export type AllAction =
  | IDoSearchAction
  | ISetProgressAction
  | IResetProgressAction;
export const ACTION_TYPE = { ...SEARCH_ACTION_TYPE, ...LOADING_ACTION_TYPE };
export { doSearch, recognizePicture, setProgress, resetProgress };
