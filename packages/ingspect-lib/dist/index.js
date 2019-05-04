"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringSimilarity = require("string-similarity");
var ingspect_dict_1 = require("ingspect-dict");
function categorize(ingList, ingDictionary, option) {
    var ingNames = Object.keys(ingDictionary.ingNameToInfoKeys);
    var result = {};
    ingList.forEach(function (ing) {
        var _a = StringSimilarity.findBestMatch(ing, ingNames).bestMatch, target = _a.target, rating = _a.rating;
        var infoKeys = ingDictionary.ingNameToInfoKeys[target];
        var minRating = (option && option.minSimilarity) || 1;
        var category;
        var infos = [];
        if (rating < minRating) {
            category = ingspect_dict_1.CATEGORY.UNSURE;
        }
        else {
            infos = infoKeys.map(function (infoKey) {
                var ingInfo = ingDictionary.infoKeyToInfoDetails[infoKey];
                var categ = ingInfo.category, definition = ingInfo.definition;
                return {
                    name: infoKey,
                    category: categ,
                    definition: definition
                };
            });
            var categoriesArr = infos.map(function (info) { return info.category; });
            var categoriesSet = new Set(categoriesArr);
            category = categoriesSet.size === 1 ? categoriesArr[0] : ingspect_dict_1.CATEGORY.UNSURE;
        }
        if (result[category] === undefined) {
            result[category] = [];
        }
        result[category].push({
            ingQuery: ing,
            confidence: rating,
            infos: infos
        });
    });
    return result;
}
exports.categorize = categorize;
//# sourceMappingURL=index.js.map