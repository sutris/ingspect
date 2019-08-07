import React from "react";
import { fireEvent } from "react-testing-library";

import { renderWithAppContext } from "../test/utils";
import App from "./App";

describe("Home Page", () => {
  it("should display offline page when offline link is clicked", () => {
    const { getByText, history } = renderWithAppContext(<App />);

    fireEvent.click(getByText(/offline/i));

    expect(history.location.pathname).toEqual("/offline");
  });

  it("should display about page when about link is clicked", () => {
    const { getByText, history } = renderWithAppContext(<App />);

    fireEvent.click(getByText("About"));

    expect(history.location.pathname).toEqual("/about");
  });

  it("should render search input field", () => {
    const { getByTestId } = renderWithAppContext(<App />);

    expect(getByTestId("search-input")).toBeInTheDocument();
  });

  it("should do nothing when the ingspect button is pressed and the search input is empty", () => {
    const { getByTestId, history } = renderWithAppContext(<App />);
    const searchInput = getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "  " } });
    fireEvent.click(getByTestId("ingspect-button"));

    expect(history.location.pathname).toEqual("/");
  });

  it("should navigate to search result page when the ingspect button is pressed and the search input is not empty", () => {
    const { getByTestId, history } = renderWithAppContext(<App />);
    const searchInput = getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "value" } });
    fireEvent.click(getByTestId("ingspect-button"));

    expect(history.location.pathname).toEqual("/search");
    expect(history.location.search).toEqual("?search=value");
  });

  it("should render picture taker button", () => {
    const { getByTestId } = renderWithAppContext(<App />);

    expect(getByTestId("picture-taker")).toBeInTheDocument();
  });
});
