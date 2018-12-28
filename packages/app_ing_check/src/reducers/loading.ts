import { Reducer } from "redux";

import { ACTION_TYPE, AllAction } from "../actions";

const progress: Reducer<number, AllAction> = (state = 0, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PROGRESS:
      return action.progress;
    default:
      return state;
  }
};

export default progress;
