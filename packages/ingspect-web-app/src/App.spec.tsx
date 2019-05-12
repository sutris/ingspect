import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";

import App from "./App";
import store from "./store";

describe(App, () => {
  it("should display home page by default", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(
      getByText(
        "Categorize a list of ingredients by their source. Separate the ingredients with comma."
      )
    ).toBeInTheDocument();
  });
});
