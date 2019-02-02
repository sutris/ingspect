import { Reducer } from "redux";

import { ACTION_TYPE, AllAction } from "../actions";

export type ProgressState = IProgressObject | null;

interface IProgressObject {
  status: string;
  progress: number;
}

const progress: Reducer<ProgressState, AllAction> = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PROGRESS:
      return action.progress;
    case ACTION_TYPE.RESET_PROGRESS:
      return null;
    default:
      return state;
  }
};

export default progress;
