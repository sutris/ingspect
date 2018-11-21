import React, { Component } from "react";

import { INGREDIENT_CATEGORY } from "./constant";

import "./SearchResult.css";

interface IngredientDetailProps {
  ing_name: string;
  category: INGREDIENT_CATEGORY;
  description: string;
}

const IngredientDetail = (props: IngredientDetailProps) => {
  const { category, ing_name, description } = props;

  return (
    <div>
      <span className="detail__category">{category}</span>
      <h2 className="detail__ingName">{ing_name}</h2>
      <p>{description}</p>
    </div>
  );
};

interface ISearchResultProps {
  results: IngredientDetailProps[];
}

const SearchResult = (props: ISearchResultProps) => {
  const { results } = props;

  return (
    <div className="searchResult">
      {results.map(result => (
        <IngredientDetail {...result} />
      ))}
    </div>
  );
};

export default SearchResult;
