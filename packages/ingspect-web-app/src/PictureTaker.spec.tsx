import React from "react";
import { fireEvent } from "react-testing-library";

import App from "./App";
import PictureTaker from "./PictureTaker";
import { renderWithAppContext } from "./test/utils";

describe("Picture Taker component", () => {
  it("should not do anything when input is changed with an empty file event", () => {
    jest.useFakeTimers();
    const { getByTestId, queryByText, history } = renderWithAppContext(<App />);
    const inputElem = getByTestId("picture-taker-input");

    fireEvent.change(inputElem, { target: { files: [] } });

    jest.advanceTimersByTime(2000);

    expect(queryByText("OCR progress: recognizing")).not.toBeInTheDocument();
    expect(history.location.pathname).toEqual("/");
  });

  it("should show loading page when in the middle of text recognition", () => {
    jest.useFakeTimers();
    const { getByTestId, getByText } = renderWithAppContext(<App />);
    const inputElem = getByTestId("picture-taker-input");

    const file = new File(["picture_blob"], "picture_taken.png", {
      type: "image/png"
    });
    fireEvent.change(inputElem, { target: { files: [file] } });
    jest.advanceTimersByTime(1000);

    expect(getByText("OCR progress: recognizing")).toBeInTheDocument();
  });

  it("should navigate to search result page with the text from picture when finish recognizing the picture", () => {
    jest.useFakeTimers();
    const { getByTestId, history } = renderWithAppContext(<PictureTaker />);
    const inputElem = getByTestId("picture-taker-input");

    const file = new File(["picture_blob"], "picture_taken.png", {
      type: "image/png"
    });
    fireEvent.change(inputElem, { target: { files: [file] } });
    jest.advanceTimersByTime(2000);

    expect(history.location.pathname).toEqual("/search");
    expect(history.location.search).toEqual("?search=result");
  });

  it("should apply focus CSS class to the focused input element for rendering focus ring on the button element when input element is focused", () => {
    const { getByTestId } = renderWithAppContext(<PictureTaker />);
    const inputElem = getByTestId("picture-taker-input");

    fireEvent.focus(inputElem);

    expect(inputElem).toHaveClass("inputEle--isFocus");
  });

  it("should remove focus CSS class from the blurred input element for not rendering focus ring on the button element when input element is blurred", () => {
    const { getByTestId } = renderWithAppContext(<PictureTaker />);
    const inputElem = getByTestId("picture-taker-input");

    fireEvent.focus(inputElem);
    fireEvent.blur(inputElem);

    expect(inputElem).not.toHaveClass("inputEle--isFocus");
  });

  it("should focus on the label when the button is clicked", () => {
    const { getByTestId } = renderWithAppContext(<PictureTaker />);
    const buttonElem = getByTestId("picture-taker-button");
    const labelElem = getByTestId("picture-taker");

    fireEvent.click(buttonElem);

    expect(labelElem).toBeInTheDocument();
  });
});
