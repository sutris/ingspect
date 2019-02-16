import React from "react";
import { ICategorizeResult, IIngredientResult } from "ing_check";

import { INGREDIENT_CATEGORY } from "./constant";

import "./SearchResult.css";

const ResultIngredient = (props: IIngredientResult) => {
  const { ingQuery, infos, confidence } = props;

  if (infos.length > 1) {
    const infosElem = infos.map((info, iii) => {
      const { name, category, definition } = info;

      return (
        <li key={iii}>
          <h4>
            {name} ({category})
          </h4>
          <p>{definition}</p>
        </li>
      );
    });

    return (
      <div className="ingredient">
        <h3>{ingQuery}</h3>
        <ul>{infosElem}</ul>
      </div>
    );
  } else if (infos.length === 1) {
    const { name, definition } = infos[0];

    const ingName =
      confidence === 1 ? (
        ingQuery
      ) : (
        <>
          <span>{ingQuery}</span> ⇌ <span>{name}</span>
        </>
      );
    return (
      <div className="ingredient">
        <h3>{ingName}</h3>
        <p>{definition}</p>
      </div>
    );
  } else {
    return (
      <div className="ingredient">
        <h3>{ingQuery}</h3>
      </div>
    );
  }
};

interface IResultCategoryProps {
  name: string;
  ingredients: IIngredientResult[];
}

const ResultCategory = (props: IResultCategoryProps) => {
  const ingredients = props.ingredients.map((ingredient, index) => (
    <ResultIngredient {...ingredient} key={index} />
  ));

  return (
    <div className="categoryGroup">
      <h2>{name}</h2>
      {ingredients}
    </div>
  );
};

interface ISearchResultProps {
  result: ICategorizeResult;
}

const SearchResult = (props: ISearchResultProps) => {
  const CATEGORY_ORDER: string[] = [
    INGREDIENT_CATEGORY.VEGAN,
    INGREDIENT_CATEGORY.VEGETARIAN,
    INGREDIENT_CATEGORY.TYPICALLY_VEGAN,
    INGREDIENT_CATEGORY.TYPICALLY_VEGETARIAN,
    INGREDIENT_CATEGORY.MAYBE_NON_VEGETARIAN,
    INGREDIENT_CATEGORY.TYPECALLY_NON_VEGETARIAN,
    INGREDIENT_CATEGORY.NON_VEGETARIAN,
    INGREDIENT_CATEGORY.UNSURE,
    INGREDIENT_CATEGORY.UNSPECIFIED
  ];

  const categories = Object.keys(props.result).sort(
    (a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b)
  );

  const result = categories.map((categoryName, index) => {
    const categoryDetail = props.result[categoryName as INGREDIENT_CATEGORY];

    if (categoryDetail) {
      return (
        <ResultCategory
          name={categoryName}
          ingredients={categoryDetail}
          key={index}
        />
      );
    } else {
      return null;
    }
  });

  return <>{result}</>;
};

export default SearchResult;
