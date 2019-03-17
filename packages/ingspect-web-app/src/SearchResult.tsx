import classNames from "classnames";
import { CategorizeResult, IngredientResult } from "ingspect-lib";
import React from "react";

import { INGREDIENT_CATEGORY } from "./constant";

import styles from "./SearchResult.module.css";

const ResultIngredient = (props: IngredientResult) => {
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
        <p className={styles["ingredient__preDetail"]}>
          Ingredient may refer to one of the following definition:
        </p>
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
        <p
          className={classNames(
            styles["ingredient__detail"],
            styles["ingredient__detail--empty"]
          )}
        >
          Ingredient not found in database
        </p>
      </div>
    );
  }
};

interface IResultCategoryProps {
  name: string;
  ingredients: IngredientResult[];
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
  result: CategorizeResult;
}

const ResultStats = (props: ISearchResultProps) => {
  const categoryLengths = Object.keys(props.result)
    .map(categoryName => ({
      name: categoryName,
      length: props.result[categoryName as INGREDIENT_CATEGORY]!.length
    }))
    .sort((a, b) => b.length - a.length);
  const totalIngredients = categoryLengths.reduce(
    (sum, categoryLength) => sum + categoryLength.length,
    0
  );
  const categoryPercentages = categoryLengths.map(categoryLength =>
    ((categoryLength.length * 100) / totalIngredients).toFixed(2)
  );

  const categoryStatsArr = categoryPercentages.map(
    (percentage, index) => `${percentage}% ${categoryLengths[index].name}`
  );
  const categoryStatsStr = [
    categoryStatsArr.slice(0, -1).join(", "),
    categoryStatsArr[categoryStatsArr.length - 1]
  ].join(" and ");

  return (
    <p className={styles.stats}>
      The ingredients are categorized as {categoryStatsStr}.
    </p>
  );
};

const SearchResult = (props: ISearchResultProps) => {
  const categories = Object.keys(props.result).sort(
    (a, b) =>
      props.result[b as INGREDIENT_CATEGORY]!.length -
      props.result[a as INGREDIENT_CATEGORY]!.length
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

  return (
    <div className={styles.searchResult}>
      <ResultStats result={props.result} />
      {result}
    </div>
  );
};

export default SearchResult;
