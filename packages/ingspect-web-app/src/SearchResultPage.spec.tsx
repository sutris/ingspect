import React from "react";
import { fireEvent } from "react-testing-library";

import SearchResultPage from "./SearchResultPage";
import { renderWithAppContext } from "./test/utils";

describe("Search Result page", () => {
  it("should render search input field", () => {
    const { getByTestId } = renderWithAppContext(<SearchResultPage />);

    expect(getByTestId("search-input")).toBeInTheDocument();
  });

  it("should render picture taker button", () => {
    const { getByTestId } = renderWithAppContext(<SearchResultPage />);

    expect(getByTestId("picture-taker")).toBeInTheDocument();
  });

  it("should render a button for going back to home page", () => {
    const { getByText, history } = renderWithAppContext(<SearchResultPage />);

    const backButton = getByText("Back");

    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(history.location.pathname).toEqual("/");
  });

  it("should re-search with the value from query string if the URL is search result page", () => {
    const { getByText, history } = renderWithAppContext(<SearchResultPage />);

    history.push("/search?search=coconut+sugar%2C+salt");

    // the ingredients are rendered as a search result
    expect(getByText("coconut sugar")).toBeInTheDocument();
    expect(getByText("salt")).toBeInTheDocument();
  });
});
