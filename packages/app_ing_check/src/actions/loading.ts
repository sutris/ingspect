import { Action } from "redux";

export enum LOADING_ACTION_TYPE {
  SET_PROGRESS = "SET_PROGRESS"
}

export interface ISetProgressAction extends Action {
  type: LOADING_ACTION_TYPE.SET_PROGRESS;
  progress: number;
}

function setProgress(progress: number): ISetProgressAction {
  return {
    type: LOADING_ACTION_TYPE.SET_PROGRESS,
    progress
  };
}

export { setProgress };
