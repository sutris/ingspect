declare module "ing_check" {
  interface IInfoDetail {
    category: string;
    definition: string;
  }

  interface IIngNameToInfoKeys {
    [ingName: string]: string[];
  }

  interface IInfoKeyToInfoDetails {
    [infoKey: string]: IInfoDetail;
  }

  interface IIngredientDictionary {
    ingNameToInfoKeys: IIngNameToInfoKeys;
    infoKeyToInfoDetails: IInfoKeyToInfoDetails;
  }

  interface ICategorizeOption {
    minSimilarity: number;
  }

  interface IIngredientResultInfo {
    name: string;
    category: string;
    definition: string;
  }

  interface IIngredientResult {
    ingQuery: string;
    confidence: number;
    infos: IIngredientResultInfo[];
  }

  interface ICategorizeResult {
    "Typically Vegetarian"?: IIngredientResult[];
    "Typically Vegan"?: IIngredientResult[];
    "Typically Non-Vegetarian"?: IIngredientResult[];
    "May be Non-Vegetarian"?: IIngredientResult[];
    "Non-Vegetarian"?: IIngredientResult[];
    Vegan?: IIngredientResult[];
    Vegetarian?: IIngredientResult[];
    unspecified?: IIngredientResult[];
    unsure?: IIngredientResult[];
  }

  export function categorize(
    ingList: string[],
    ingDict: IIngredientDictionary,
    option?: ICategorizeOption
  ): ICategorizeResult;

  export const ingDict: IIngredientDictionary;
}
