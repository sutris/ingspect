import { Action } from "redux";

export enum LOADING_ACTION_TYPE {
  SET_PROGRESS = "SET_PROGRESS",
  RESET_PROGRESS = "RESET_PROGRESS"
}

interface IProgressObject {
  status: string;
  progress: number;
}

export interface ISetProgressAction extends Action {
  type: LOADING_ACTION_TYPE.SET_PROGRESS;
  progress: IProgressObject;
}

function setProgress(progress: IProgressObject): ISetProgressAction {
  return {
    type: LOADING_ACTION_TYPE.SET_PROGRESS,
    progress
  };
}

export interface IResetProgressAction extends Action {
  type: LOADING_ACTION_TYPE.RESET_PROGRESS;
}

function resetProgress(): IResetProgressAction {
  return {
    type: LOADING_ACTION_TYPE.RESET_PROGRESS
  };
}

export { setProgress, resetProgress };
