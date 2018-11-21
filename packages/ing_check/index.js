const StringSimilarity = require("string-similarity");

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
 * Categorize ingredients
 *
 * @param {string[]} ingList a list of ingredients to be categorized
 * @param {IngredientDictionary} ingDict
 * @param {CategorizeOption} option
 */
function categorize(ingList, ingDict, option) {
  const ingNames = Object.keys(ingDict.ingNameToInfoKeys);
  const result = {};

  ingList.forEach(ing => {
    const {
      bestMatch: { target, rating }
    } = StringSimilarity.findBestMatch(ing, ingNames);
    const infoKey = ingDict.ingNameToInfoKeys[target];
    const ingInfo = ingDict.infoKeyToInfoDetails[infoKey];
    let { category, definition } = ingInfo;

    let minRating = (option && option.minSimilarity) || 1;

    if (rating < minRating) {
      category = "unsure";
    }

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push({
      name: target,
      category,
      definition,
      real_name: ing,
      confidence: rating
    });
  });

  return result;
}

module.exports = {
  categorize
};
