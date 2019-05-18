import React from "react";

import App from "./App";
import { renderWithAppContext } from "./test/utils";

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
