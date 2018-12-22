import React from "react";
import { ICategorizeResult, IIngredientResult } from "ing_check";
import classNames from "classnames";

import { INGREDIENT_CATEGORY } from "./constant";

import styles from "./SearchResult.module.css";

const ResultIngredient = (props: IIngredientResult) => {
  const { ingQuery, infos, confidence } = props;

  if (infos.length > 1) {
    const infosElem = infos.map((info, iii) => {
      const { name, category, definition } = info;

      return (
        <li key={iii}>
          <h4 className={styles["ingredient__synonym"]}>
            {name} ({category})
          </h4>
          <p className={styles["ingredient__synonymDetail"]}>{definition}</p>
        </li>
      );
    });

    return (
      <div className={styles.ingredient}>
        <h3 className={styles["ingredient__name"]}>{ingQuery}</h3>
        <p className={styles["ingredient__preDetail"]}>Ingredient may refer to one of the following definition:</p>
        <ul
          className={classNames(
            styles["ingredient__detail"],
            styles["ingredient__detail--list"]
          )}
        >
          {infosElem}
        </ul>
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
      <div className={styles.ingredient}>
        <h3 className={styles["ingredient__name"]}>{ingName}</h3>
        <p className={styles["ingredient__detail"]}>{definition}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.ingredient}>
        <h3 className={styles["ingredient__name"]}>{ingQuery}</h3>
        <p className={classNames(
          styles["ingredient__detail"],
          styles["ingredient__detail--empty"]
        )}>
          Ingredient not found in database
        </p>
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
    <li className={styles["categoryGroup__ingListItem"]} key={index}>
      <ResultIngredient {...ingredient} />
    </li>
  ));

  return (
    <div className={styles.categoryGroup}>
      <h2 className={styles["categoryGroup__name"]}>{props.name}</h2>
      <ul className={styles["categoryGroup__ingList"]}>{ingredients}</ul>
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

  return <div className={styles.searchResult}>{result}</div>;
};

export default SearchResult;
