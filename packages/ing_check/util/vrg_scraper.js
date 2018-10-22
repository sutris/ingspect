const request = require("request");
const cheerio = require("cheerio");

const URL = "https://www.vrg.org/ingredients";

request(URL, function(error, _response, html) {
  if (!error) {
    const ingDict = fetchInfo(html);

    logIngredients(ingDict);
  } else {
    console.error(error);
  }
});

/**
 * @typedef {Object} InfoDetail
 * @property {string} category ingredient category (i.e. vegan, vegetarian, typically vegan, etc.)
 */

/**
 * @typedef {Object} IngredientDictionary
 * @property {Object.<string, string[]>} ingNameToInfoKeys map ingredient names to array of information keys
 * @property {Object.<string, InfoDetail>} infoKeyToInfoDetails map information key to information details
 */

/**
 * Fetch ingredient information from the given html text
 *
 * @param {string} html html in text
 * @returns {IngredientDictionary} dictionary of ingredients with their details
 */
function fetchInfo(html) {
  const ingredientsToSkip = [
    "E number",
    "Copyright Information",
    "Related Articles"
  ];
  const knownCategories = [
    "Typically Vegetarian",
    "Typically Vegan",
    "Typically Non-Vegetarian",
    "May be Non-Vegetarian",
    "Non-Vegetarian",
    "Vegan",
    "Vegetarian",
    "unspecified"
  ];

  let ingNameToInfoKeys = {};
  let infoKeyToInfoDetails = {};

  var $ = cheerio.load(html);

  $("h2").each((index, element) => {
    const ingName = sanitizeString($(element).text());

    if (ingredientsToSkip.includes(ingName)) {
      return;
    }

    // traverse node by node until find the next h2
    const nextH2 = $("h2").eq(index + 1);

    let currentNode = $(element).next();
    let category;
    let aliases;

    while (true) {
      if (currentNode.is(nextH2) || currentNode.length <= 0) {
        break;
      }

      // fetch necessary information
      if (!category && (currentNode.is("em") || currentNode.is("i"))) {
        const categoryName = currentNode.text();

        if (knownCategories.includes(categoryName)) {
          category = categoryName;
        } else {
          // for `gellan gum`
          for (const knownCategory of knownCategories) {
            if (categoryName.includes(knownCategory)) {
              category = knownCategory;
              break;
            }
          }
        }
      }

      if (currentNode.is("a")) {
        if (!aliases) {
          aliases = [];
        }

        aliases.push(currentNode.text());
      }

      // deciding the next node to traverse
      if (currentNode.find(nextH2).length > 0) {
        currentNode = currentNode.children().first();
      } else if (currentNode.next().length <= 0) {
        currentNode = currentNode.parent().next();
      } else {
        currentNode = currentNode.next();
      }
    }

    // construct infos dictionary
    let infoKeys;

    if (category) {
      infoKeys = [ingName];

      infoKeyToInfoDetails[ingName] = {
        category
      };
    } else if (aliases) {
      infoKeys = [];
      aliases.forEach(alias => {
        infoKeys.push(sanitizeString(alias));
      });
    } else {
      // for ingredient that does not have any category (e.g. Sucralose)
      infoKeys = [ingName];

      infoKeyToInfoDetails[ingName] = {
        category: "unspecified"
      };
    }

    if (infoKeys) {
      ingNameToInfoKeys[ingName] = infoKeys;
    }
  });

  return {
    ingNameToInfoKeys,
    infoKeyToInfoDetails
  };
}

/**
 * Log ingredient dictionary
 *
 * @param {IngredientDictionary} ingredientDict dictionary of ingredients with their details
 */
function logIngredients(ingredientDict) {
  const { ingNameToInfoKeys, infoKeyToInfoDetails } = ingredientDict;

  Object.entries(ingNameToInfoKeys).forEach(([ingName, infoKeys]) => {
    infoKeys.forEach(infoKey => {
      const infoDetail = infoKeyToInfoDetails[infoKey];

      console.log(`${ingName} (${infoKey}): ${infoDetail.category}`);
    });
  });
}

/**
 * Sanitized a string by:
 * - Standardizing white space characters
 * - Fix typos
 *
 * @param {string} string string to be sanitized
 */
function sanitizeString(string) {
  // standardize white space characters
  const sanitizedString = string.replace(new RegExp("\\s", "g"), " ");

  // fix typo
  if (sanitizedString === "sodium bicarboante") {
    return "sodium bicarbonate";
  } else {
    return sanitizedString;
  }
}
