import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import ocrManager, { EVENTS } from "../controlers/ocr";
import historyManager from "../history";
import { AppState } from "../reducers/index";
import { resetProgress, setProgress } from "./loading";

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
      historyManager.updateHistory("/search", {
        search: result
      });

      dispatch(resetProgress());

      ocrManager.removeAllListeners();
    });
  };
}

export { recognizePicture };
