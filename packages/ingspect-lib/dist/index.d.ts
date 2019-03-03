import ingDict, { CATEGORY } from "./data/ingDict";
interface InfoDetail {
  category: CATEGORY;
  definition: string;
}
interface IngNameToInfoKeys {
  [ingName: string]: string[];
}
interface InfoKeyToInfoDetails {
  [infoKey: string]: InfoDetail;
}
interface IngredientDictionary {
  ingNameToInfoKeys: IngNameToInfoKeys;
  infoKeyToInfoDetails: InfoKeyToInfoDetails;
}
interface CategorizeOption {
  minSimilarity: number;
}
interface IngredientInfo {
  name: string;
  category: CATEGORY;
  definition: string;
}
export interface IngredientResult {
  ingQuery: string;
  confidence: number;
  infos: IngredientInfo[];
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
declare function categorize(
  ingList: string[],
  ingDictionary: IngredientDictionary,
  option?: CategorizeOption
): CategorizeResult;
export { categorize, ingDict };
//# sourceMappingURL=index.d.ts.map
