import { Action } from "redux";

export enum LOADING_ACTION_TYPE {
  SET_PROGRESS = "SET_PROGRESS"
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

export { setProgress };
