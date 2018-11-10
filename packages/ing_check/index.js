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
 * Categorize ingredients
 *
 * @param {string[]} ingList a list of ingredients to be categorized
 * @param {IngredientDictionary} ingDict
 */
function categorize(ingList, ingDict) {
  const ingNames = Object.keys(ingDict.ingNameToInfoKeys);
  const result = {};

  ingList.forEach(ing => {
    const {
      bestMatch: { target, rating }
    } = StringSimilarity.findBestMatch(ing, ingNames);
    const infoKey = ingDict.ingNameToInfoKeys[target];
    const ingInfo = ingDict.infoKeyToInfoDetails[infoKey];
    let { category, definition } = ingInfo;

    if (rating < 1) {
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

function test() {
  const ingDict = require("./data/ingDict");

  const ingList = "Water (aqua), sodium lauroyl methyl isethionate, cocamidopropyl hydroxysultaine, sodium cocoyl isethionate, coco-glucoside, grapefruit (citrus grandis) fruit extract, sodium chloride, sodium benzoate, glyceryl oleate, hydroxypropyl methylcellulose, hydroxyacetophenone, panthenyl hydroxypropyl steardimonium chloride, pro-vitamin B5 (panthenol), aloe vera (aloe barbadensis) leaf juice, lavender (lavandula angustifolia) extract, orange (citrus aurantium dulcis) peel oil, phytantriol, bergamot (citrus aurantium bergamia) fruit extract, glycerin¹, loquat (eriobotrya japonica) leaf extract, hydrolyzed quinoa, hydrolyzed flax protein, geranium (pelargonium graveolens) oil, lemon (citrus limon) peel extract, sage (salvia officinalis) oil, apple (pyrus malus) fruit extract, vanilla planifolia fruit extract, patchouli (pogostemon cablin) leaf extract, hydrolyzed corn protein², broadbean (vicia faba) seed extract, sunflower (helianthus annuus) seed extract, glycerin², vitamin B7 (biotin), sodium hydroxide, citric acid."
    .split(",")
    .map(string => string.trim());

  console.log(categorize(ingList, ingDict));
}

test();
