const StringSimilarity = require("string-similarity");
const ingDict = require("./data/ingDict");

/**
 * Ingredient details
 *
 * @typedef {Object} InfoDetail
 * @property {string} category ingredient category (i.e. vegan, vegetarian, typically vegan, etc.)
 * @property {string} definition ingredient short description
 */

/**
 * Map between an ingredient name and its info keys.
 * An ingredient can have multiple info keys.
 *
 * @typedef {Object.<string, string[]>} IngNameToInfoKeys
 */

/**
 * Map between an info key to the info detail.
 * An info key can only have one info detail.
 *
 * @typedef {Object.<string, InfoDetail>} InfoKeyToInfoDetails
 */

/**
 * Dictionary of ingredients
 *
 * @typedef {Object} IngredientDictionary
 * @property {IngNameToInfoKeys} ingNameToInfoKeys map ingredient names to array of information keys
 * @property {InfoKeyToInfoDetails} infoKeyToInfoDetails map information key to information details
 */

/**
 * Dictionary of ingredients
 *
 * @typedef {Object} CategorizeOption
 * @property {number} minSimilarity minimum similarity between the ingredient name and the one in ingredient dictionary. If it is below the minSimilarity, categorize ingredient as "unsure".
 */

/**
 * @typedef {Object} IngredientInfo
 * @property {string} name
 * @property {string} category
 * @property {string} definition
 */

/**
 * @typedef {Object} Ingredient
 * @property {string} ingQuery the queried ingredient name
 * @property {number} confidence similarity between the queried ingredient with the best match of ingredient in the dictionary. 0 is the lowest, 1 is the highest.
 * @property {Array<IngredientInfo>} infos list of information that is associated with the queried ingredient
 */

/**
 * Categorize ingredients
 *
 * @param {string[]} ingList a list of ingredients to be categorized
 * @param {IngredientDictionary} ingDict
 * @param {CategorizeOption} option
 * @returns {Object.<string, Array<Ingredient>>} map between category with the ingredients categorized as that category
 */
function categorize(ingList, ingDict, option) {
  const ingNames = Object.keys(ingDict.ingNameToInfoKeys);
  const result = {};

  ingList.forEach(ing => {
    const {
      bestMatch: { target, rating }
    } = StringSimilarity.findBestMatch(ing, ingNames);

    const infoKeys = ingDict.ingNameToInfoKeys[target];
    const minRating = (option && option.minSimilarity) || 1;

    let category;
    let infos = [];

    if (rating < minRating) {
      category = "unsure";
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
      category = categoriesSet.size === 1 ? categoriesArr[0] : "unsure";
    }

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push({
      ingQuery: ing,
      confidence: rating,
      infos
    });
  });

  return result;
}

module.exports = {
  categorize,
  ingDict
};
