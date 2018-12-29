import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import ocrManager, { EVENTS } from "../controlers/ocr";
import { AppState } from "../reducers/index";
import { setProgress } from "./loading";
import { changeSearchInput, doSearch } from "./search";

interface IProgressObject {
  status: string;
  progress: number;
}

function recognizePicture(
  file: File
): ThunkAction<void, AppState, undefined, Action> {
  return dispatch => {
    ocrManager.recognize(file);

    ocrManager.addListener(
      EVENTS.RECOGNIZE_PROGRESS,
      (progress: IProgressObject) => {
        dispatch(setProgress(progress));
      }
    );

    ocrManager.addListener(EVENTS.RECOGNIZE_RESULT, (result: string) => {
      dispatch(changeSearchInput(result));
      dispatch(doSearch(result));

      ocrManager.removeAllListeners();
    });
  };
}

export { recognizePicture };
