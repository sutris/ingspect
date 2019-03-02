import * as StringSimilarity from "string-similarity";

import ingDict, { CATEGORY } from "./data/ingDict";

interface InfoDetail {
  category: CATEGORY; // ingredient category (i.e. vegan, vegetarian, typically vegan, etc.)
  definition: string; // ingredient short description
}

/**
 * Map between an ingredient name and its info keys.
 * An ingredient can have multiple info keys.
 */
interface IngNameToInfoKeys {
  [ingName: string]: string[]
}

/**
 * Map between an info key to the info detail.
 * An info key can only have one info detail.
 */
interface InfoKeyToInfoDetails {
  [infoKey: string]: InfoDetail
}

/**
 * Dictionary of ingredients
 */
interface IngredientDictionary {
  ingNameToInfoKeys: IngNameToInfoKeys // map ingredient names to array of information keys
  infoKeyToInfoDetails: InfoKeyToInfoDetails // map information key to information details
}

interface CategorizeOption {
  minSimilarity: number; // minimum similarity between the ingredient name and the one in ingredient dictionary. If it is below the minSimilarity, categorize ingredient as "unsure".
}

interface IngredientInfo {
  name: string;
  category: CATEGORY;
  definition: string;
}

export interface IngredientResult {
  ingQuery: string; // the queried ingredient name
  confidence: number; // similarity between the queried ingredient with the best match of ingredient in the dictionary. 0 is the lowest, 1 is the highest.
  infos: IngredientInfo[]; // list of information that is associated with the queried ingredient
}

export interface CategorizeResult {
  "Typically Vegetarian"?: IngredientResult[];
  "Typically Vegan"?: IngredientResult[];
  "Typically Non-Vegetarian"?: IngredientResult[];
  "May be Non-Vegetarian"?: IngredientResult[];
  "Non-Vegetarian"?: IngredientResult[];
  Vegan?: IngredientResult[];
  Vegetarian?: IngredientResult[];
  unspecified?: IngredientResult[];
  unsure?: IngredientResult[];
}

function categorize(ingList: string[], ingDict: IngredientDictionary, option?: CategorizeOption): CategorizeResult {
  const ingNames = Object.keys(ingDict.ingNameToInfoKeys);
  const result: CategorizeResult = {};

  ingList.forEach(ing => {
    const {
      bestMatch: { target, rating }
    } = StringSimilarity.findBestMatch(ing, ingNames);

    const infoKeys = ingDict.ingNameToInfoKeys[target];
    const minRating = (option && option.minSimilarity) || 1;

    let category: CATEGORY;
    let infos: IngredientInfo[] = [];

    if (rating < minRating) {
      category = CATEGORY.UNSURE;
    } else {
      infos = infoKeys.map(infoKey => {
        const ingInfo = ingDict.infoKeyToInfoDetails[infoKey];

        let { category, definition } = ingInfo;

        return {
          name: infoKey,
          category,
          definition
        };
      });

      const categoriesArr = infos.map(info => info.category);
      const categoriesSet = new Set(categoriesArr);
      category = categoriesSet.size === 1 ? categoriesArr[0] : CATEGORY.UNSURE;
    }

    if (result[category] === undefined) {
      result[category] = [];
    }

    result[category]!.push({
      ingQuery: ing,
      confidence: rating,
      infos
    });
  });

  return result;
}

export {
  categorize,
  ingDict
};
