import { CATEGORY } from "ingspect-dict";
import * as StringSimilarity from "string-similarity";

import { categorize } from "./index";

const mockIngDict = {
  ingNameToInfoKeys: {
    sucrose: ["sucrose"],
    "coconut sugar": ["coconut sugar"],
    sugar: ["coconut sugar", "sucrose"],
    salt: ["salt"]
  },
  infoKeyToInfoDetails: {
    "coconut sugar": {
      category: CATEGORY.VEGAN,
      definition: "sugar made from coconut"
    },
    sucrose: {
      category: CATEGORY.UNSURE,
      definition: "generic sugar"
    },
    salt: {
      category: CATEGORY.VEGAN,
      definition: "salt"
    }
  }
};

describe("#categorize", () => {
  beforeEach(() => {
    jest.spyOn(StringSimilarity, "findBestMatch").mockImplementation(ing => {
      switch (ing) {
        // exact match
        case "sugar":
          return {
            bestMatch: { target: "sugar", rating: 1 },
            ratings: [],
            bestMatchIndex: 0
          };
        case "salt":
          return {
            bestMatch: { target: "salt", rating: 1 },
            ratings: [],
            bestMatchIndex: 0
          };
        case "slat":
          return {
            bestMatch: { target: "salt", rating: 0.8 },
            ratings: [],
            bestMatchIndex: 0
          };
        default:
          return {
            bestMatch: { target: "unknown", rating: 0 },
            ratings: [],
            bestMatchIndex: 0
          };
      }
    });
  });

  it("should categorize according to the category specified in ingredient dictionary if there is no minSimilarity option provided and the ingredient name exactly with an ingredient in the dictionary", () => {
    const result = categorize(["salt"], mockIngDict);

    expect(Object.keys(result).length).toEqual(1);
    expect(result).toHaveProperty(CATEGORY.VEGAN);
    expect(result[CATEGORY.VEGAN]).toEqual([
      {
        ingQuery: "salt",
        confidence: 1,
        infos: [
          {
            name: "salt",
            ...mockIngDict.infoKeyToInfoDetails.salt
          }
        ]
      }
    ]);
  });

  it("should categorize according to the category specified in ingredient dictionary if there is minSimilarity option provided and the ingredient name match higher than the given option with an ingredient in the dictionary", () => {
    const result = categorize(["slat"], mockIngDict, { minSimilarity: 0.79 });

    expect(Object.keys(result).length).toEqual(1);
    expect(result).toHaveProperty(CATEGORY.VEGAN);
    expect(result[CATEGORY.VEGAN]).toEqual([
      {
        ingQuery: "slat",
        confidence: 0.8,
        infos: [
          {
            name: "salt",
            ...mockIngDict.infoKeyToInfoDetails.salt
          }
        ]
      }
    ]);
  });

  it("should categorize as UNSURE if ingredient name similarity is lower than all the ingredients in the dictionary", () => {
    const result = categorize(["slat"], mockIngDict, { minSimilarity: 0.81 });

    expect(Object.keys(result).length).toEqual(1);
    expect(result).toHaveProperty(CATEGORY.UNSURE);
    expect(result[CATEGORY.UNSURE]).toEqual([
      {
        ingQuery: "slat",
        confidence: 0.8,
        infos: []
      }
    ]);
  });

  it("should categorize as UNSURE if ingredient contains multiple information keys", () => {
    const result = categorize(["sugar"], mockIngDict);

    expect(Object.keys(result).length).toEqual(1);
    expect(result).toHaveProperty(CATEGORY.UNSURE);
    expect(result[CATEGORY.UNSURE]).toEqual([
      {
        ingQuery: "sugar",
        confidence: 1,
        infos: [
          {
            name: "coconut sugar",
            ...mockIngDict.infoKeyToInfoDetails["coconut sugar"]
          },
          {
            name: "sucrose",
            ...mockIngDict.infoKeyToInfoDetails["sucrose"]
          }
        ]
      }
    ]);
  });

  it("should return an object with aggregated categories as the properties", () => {
    const result = categorize(["sugar", "salt", "other"], mockIngDict);

    expect(typeof result).toBe("object");
    expect(Object.keys(result).length).toEqual(2);
    // "salt"
    expect(result).toHaveProperty(CATEGORY.VEGAN);
    // "sugar" and "other"
    expect(result).toHaveProperty(CATEGORY.UNSURE);
  });
});
