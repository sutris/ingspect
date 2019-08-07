import React from "react";
import { fireEvent } from "react-testing-library";

import { renderWithAppContext } from "../test/utils";
import App from "./App";

describe("About Page", () => {
  function renderAboutPage() {
    return renderWithAppContext(<App />, {
      route: { initialRoute: "/about" }
    });
  }

  it("should render a button for going back to home page", () => {
    const { getByText, history } = renderAboutPage();

    const backButton = getByText("Back");

    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(history.location.pathname).toEqual("/");
  });
});
