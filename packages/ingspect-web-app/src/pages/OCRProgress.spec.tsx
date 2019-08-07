import React from "react";
import { fireEvent } from "react-testing-library";
import Tesseract from "tesseract.js";

import { renderWithAppContext } from "../test/utils";
import App from "./App";

describe("OCR Progress page", () => {
  it("should cancel current OCR job", () => {
    jest.useFakeTimers();
    const { getByText, getByTestId } = renderWithAppContext(<App />);
    const mockTerminate = Tesseract.create().terminate;
    const inputElem = getByTestId("picture-taker-input");
    const file = new File(["picture_blob"], "picture_taken.png", {
      type: "image/png"
    });
    fireEvent.change(inputElem, { target: { files: [file] } });
    jest.advanceTimersByTime(1000);

    fireEvent.click(getByText("Cancel"));

    expect(mockTerminate).toHaveBeenCalledTimes(1);
  });

  it("should navigate back to home page", () => {
    jest.useFakeTimers();
    const { getByText, getByTestId, history } = renderWithAppContext(<App />);
    const inputElem = getByTestId("picture-taker-input");
    const file = new File(["picture_blob"], "picture_taken.png", {
      type: "image/png"
    });
    fireEvent.change(inputElem, { target: { files: [file] } });
    jest.advanceTimersByTime(1000);

    fireEvent.click(getByText("Cancel"));

    expect(history.location.pathname).toEqual("/");
  });
});
