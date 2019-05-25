import React from "react";
import { fireEvent, getByText } from "react-testing-library";

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
    const { getByText: rootGetByText, history } = renderWithAppContext(
      <SearchResultPage />
    );

    const backButton = rootGetByText("Back");

    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);

    expect(history.location.pathname).toEqual("/");
  });

  describe("search result based on the search query from query string of search result page URL", () => {
    it("should show search result statistic grouped by ingredient category", () => {
      const { getByText: rootGetByText, history } = renderWithAppContext(
        <SearchResultPage />
      );

      history.push(
        "/search?search=agar%2C+sucralose%2C+baking+powde%2C+beeswax%2C+citric+acid%2C+honey%2C+unknown%2C+sugar"
      );

      expect(
        rootGetByText(
          "The ingredients are categorized as 38% vegan, 25% vegetarian, 25% unsure and 13% unspecified."
        )
      ).toBeInTheDocument();
    });

    it("should group ingredient result by the categories", () => {
      const { getByText: rootGetByText, history } = renderWithAppContext(
        <SearchResultPage />
      );

      history.push(
        "/search?search=agar%2C+sucralose%2C+baking+powde%2C+beeswax%2C+citric+acid%2C+honey%2C+unknown%2C+sugar"
      );

      const veganHeading = rootGetByText(/^Vegan$/i);
      const veganCategory = veganHeading.parentElement;
      expect(veganHeading).toBeInTheDocument();
      expect(getByText(veganCategory!, "agar")).toBeInTheDocument();
      expect(
        getByText(veganCategory!, "baking powde ⇌ baking powder")
      ).toBeInTheDocument();
      expect(getByText(veganCategory!, "citric acid")).toBeInTheDocument();

      const vegetarianHeading = rootGetByText(/^Vegetarian$/i);
      const vegetarianCategory = vegetarianHeading.parentElement;
      expect(vegetarianHeading).toBeInTheDocument();
      expect(getByText(vegetarianCategory!, "beeswax")).toBeInTheDocument();
      expect(getByText(vegetarianCategory!, "honey")).toBeInTheDocument();

      const unsureHeading = rootGetByText(/^Unsure$/i);
      const unsureCategory = unsureHeading.parentElement;
      expect(unsureHeading).toBeInTheDocument();
      expect(getByText(unsureCategory!, "unknown")).toBeInTheDocument();
      expect(getByText(unsureCategory!, "sugar")).toBeInTheDocument();

      const unspecifiedHeading = rootGetByText(/^Unspecified$/i);
      const unspecifiedCategory = unspecifiedHeading.parentElement;
      expect(unspecifiedHeading).toBeInTheDocument();
      expect(getByText(unspecifiedCategory!, "sucralose")).toBeInTheDocument();
    });

    it.each`
      ingredient   | expectedDescription
      ${"agar"}    | ${"A vegetable gum obtained from seaweeds and used to thicken foods."}
      ${"sugar"}   | ${"Ingredient may refer to one of the following definition:"}
      ${"unknown"} | ${"Ingredient not found in database"}
    `(
      "show modal with correct description when $ingredient is clicked",
      ({ ingredient, expectedDescription }) => {
        const {
          getByText: rootGetByText,
          queryByTestId,
          getByTestId,
          history
        } = renderWithAppContext(<SearchResultPage />);

        history.push(
          "/search?search=agar%2C+sucralose%2C+baking+powde%2C+beeswax%2C+citric+acid%2C+honey%2C+unknown%2C+sugar"
        );

        const ingredientResultPill = rootGetByText(ingredient);

        fireEvent.click(ingredientResultPill);

        const modal = getByTestId("modal");
        expect(modal).toBeInTheDocument();
        expect(getByText(modal, expectedDescription)).toBeInTheDocument();

        // should not close modal conditions:
        // - press non-esc key
        // - click inside the modal
        fireEvent.keyDown(modal, { key: "A", code: 65, keyCode: 65 });
        expect(getByTestId("modal")).toBeInTheDocument();

        fireEvent.mouseDown(getByText(modal, expectedDescription));
        expect(getByTestId("modal")).toBeInTheDocument();

        // should close modal conditions:
        // - click close button
        // - press esc key
        // - click outside the modal
        const modalCloseButton = rootGetByText("close");
        fireEvent.click(modalCloseButton);
        expect(queryByTestId("modal")).not.toBeInTheDocument();

        fireEvent.click(ingredientResultPill);
        expect(getByTestId("modal")).toBeInTheDocument();

        fireEvent.keyDown(document.body, {
          key: "Escape",
          code: 27,
          keyCode: 27
        });
        expect(queryByTestId("modal")).not.toBeInTheDocument();

        fireEvent.click(ingredientResultPill);
        expect(getByTestId("modal")).toBeInTheDocument();

        fireEvent.mouseDown(document.body);
        expect(queryByTestId("modal")).not.toBeInTheDocument();
      }
    );
  });
});
