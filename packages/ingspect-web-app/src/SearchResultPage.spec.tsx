import React from "react";

import SearchResultPage from "./SearchResultPage";
import { renderWithAppContext } from "./test/utils";

describe("Search Result page", () => {
  it("should re-search with the value from query string if the URL is search result page", () => {
    const { getByText, history } = renderWithAppContext(<SearchResultPage />);

    history.push("/search?search=coconut+sugar%2C+salt");

    // the ingredients are rendered as a search result
    expect(getByText("coconut sugar")).toBeInTheDocument();
    expect(getByText("salt")).toBeInTheDocument();
  });
});
