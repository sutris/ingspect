import React from "react";
import { fireEvent } from "react-testing-library";

import { renderWithAppContext } from "../test/utils";
import SearchInput from "./SearchInput";

describe("Search Input component", () => {
  it("should not do anything if input is empty and enter key is pressed", () => {
    const { getByTestId, history } = renderWithAppContext(<SearchInput />);
    const inputElem = getByTestId("search-input");
    fireEvent.change(inputElem, { target: { value: "  " } });

    fireEvent.keyPress(inputElem, { key: "Enter", code: 13, charCode: 13 });

    expect(history.location.pathname).toEqual("/");
  });

  it("should navigate to search result page if input is not empty and enter key is pressed", () => {
    const { getByTestId, history } = renderWithAppContext(<SearchInput />);
    const inputElem = getByTestId("search-input");
    fireEvent.change(inputElem, { target: { value: "value" } });

    fireEvent.keyPress(inputElem, { key: "Enter", code: 13, charCode: 13 });

    expect(history.location.pathname).toEqual("/search");
  });

  it("should update input value with the value from query string if the URL is search result page", () => {
    const { getByTestId, history } = renderWithAppContext(<SearchInput />);
    const inputElem = getByTestId("search-input");

    history.push("/search?search=coconut+sugar%2C+salt");

    expect(inputElem.value).toEqual("coconut sugar, salt");
  });

  it("should use default placeholder if placeholder is not provided", () => {
    const { getByTestId } = renderWithAppContext(<SearchInput />);
    const inputElem = getByTestId("search-input");

    expect(inputElem.placeholder).toEqual("carrot, sugar, salt, ...");
  });

  it("should use the provided placeholder if it is provided", () => {
    const { getByTestId } = renderWithAppContext(
      <SearchInput placeholder="placeholder value" />
    );
    const inputElem = getByTestId("search-input");

    expect(inputElem.placeholder).toEqual("placeholder value");
  });
});
