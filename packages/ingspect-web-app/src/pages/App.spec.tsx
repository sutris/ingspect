import React from "react";

import { renderWithAppContext } from "../test/utils";
import App from "./App";

describe(App, () => {
  it("should display home page by default", () => {
    const { getByText } = renderWithAppContext(<App />);

    expect(
      getByText(
        "Categorize a list of ingredients by their source. Separate the ingredients with comma."
      )
    ).toBeInTheDocument();
  });
});
