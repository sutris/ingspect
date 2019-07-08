import classNames from "classnames";
import { CategorizeResult, IngredientResult } from "ingspect-lib";
import React, { Component } from "react";

import Card from "./components/Card";
import Label from "./components/Label";
import { INGREDIENT_CATEGORY } from "./constant";
import Modal from "./Modal";

import styles from "./SearchResult.module.css";

interface ExtendedIngResult extends IngredientResult {
  onClick: showModal;
  categoryName: INGREDIENT_CATEGORY;
}

function getIngName(props: IngredientResult): string {
  const { infos, confidence, ingQuery } = props;

  if (infos.length > 1) {
    return ingQuery;
  } else if (infos.length === 1) {
    const { name } = infos[0];
    const ingName = confidence === 1 ? ingQuery : `${ingQuery} ⇌ ${name}`;

    return ingName;
  } else {
    return ingQuery;
  }
}

const ResultIngredient = (props: ExtendedIngResult) => {
  const { categoryName, ingQuery, onClick } = props;
  const handleClick = () => {
    onClick(categoryName, ingQuery);
  };

  return (
    <div className={styles.ingredient}>
      <Label onClick={handleClick}>{getIngName(props)}</Label>
    </div>
  );
};

interface IResultCategoryProps {
  name: INGREDIENT_CATEGORY;
  ingredients: IngredientResult[];
  onIngClick: showModal;
}

const ResultCategory = (props: IResultCategoryProps) => {
  const ingredients = props.ingredients.map((ingredient, index) => (
    <li className={styles["categoryGroup__ingListItem"]} key={index}>
      <ResultIngredient
        {...ingredient}
        onClick={props.onIngClick}
        categoryName={props.name}
      />
    </li>
  ));

  return (
    <Card className={styles.categoryGroup}>
      <h2 className={styles["categoryGroup__name"]}>{props.name}</h2>
      <ul className={styles["categoryGroup__ingList"]}>{ingredients}</ul>
    </Card>
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
    ((categoryLength.length * 100) / totalIngredients).toFixed(0)
  );

  const categoryStatsArr = categoryPercentages.map(
    (percentage, index) =>
      `${percentage}% ${categoryLengths[index].name.toLowerCase()}`
  );

  const categoryStatsStr = [
    categoryStatsArr.slice(0, -1).join(", "),
    categoryStatsArr[categoryStatsArr.length - 1]
  ]
    .filter(str => str !== "")
    .join(" and ");

  return (
    <p className={styles.stats}>
      The ingredients are categorized as {categoryStatsStr}.
    </p>
  );
};

type showModal = (category: INGREDIENT_CATEGORY, ingQuery: string) => void;

interface SearchResultState {
  modalData?: {
    category: INGREDIENT_CATEGORY;
    ingQuery: string;
  };
}

class SearchResult extends Component<ISearchResultProps, SearchResultState> {
  constructor(props: ISearchResultProps) {
    super(props);

    this.state = {
      modalData: undefined
    };

    this.renderModal = this.renderModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  public render() {
    const { result } = this.props;

    const categories = (Object.keys(result) as INGREDIENT_CATEGORY[]).sort(
      (a, b) => result[b]!.length - result[a]!.length
    );

    const sortedResult = categories.map((categoryName, index) => {
      const categoryDetail = result[categoryName]!;

      return (
        <ResultCategory
          name={categoryName}
          ingredients={categoryDetail}
          key={index}
          onIngClick={this.showModal}
        />
      );
    });

    return (
      <div className={styles.searchResult}>
        <ResultStats result={result} />
        {sortedResult}
        {this.renderModal()}
      </div>
    );
  }

  private renderModal() {
    if (this.state.modalData === undefined) return null;

    const { result } = this.props;
    const { category, ingQuery } = this.state.modalData;
    const toBeShown = result[category]!.find(el => el.ingQuery === ingQuery)!;

    const { infos } = toBeShown;
    let ingDetail;

    if (infos.length > 1) {
      const infosElem = infos.map((info, iii) => {
        const { name, category: synonymCategory, definition } = info;

        return (
          <li key={iii}>
            <h4 className={styles["ingredient__synonym"]}>
              {name} <Label>{synonymCategory}</Label>
            </h4>
            <p className={styles["ingredient__synonymDetail"]}>{definition}</p>
          </li>
        );
      });

      ingDetail = (
        <>
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
        </>
      );
    } else if (infos.length === 1) {
      const { definition } = infos[0];

      ingDetail = <p className={styles["ingredient__detail"]}>{definition}</p>;
    } else {
      ingDetail = (
        <p
          className={classNames(
            styles["ingredient__detail"],
            styles["ingredient__detail--empty"]
          )}
        >
          Ingredient not found in database
        </p>
      );
    }

    const onDismissed = () => {
      this.setState({ modalData: undefined });
    };

    return (
      <Modal onDismissed={onDismissed}>
        <div className={styles.ingredient}>
          <h3 className={styles["ingredient__name"]}>
            {getIngName(toBeShown)} <Label>{category}</Label>
          </h3>
          {ingDetail}
        </div>
      </Modal>
    );
  }

  private showModal: showModal = (category, ingQuery) => {
    this.setState({
      modalData: {
        category,
        ingQuery
      }
    });
  };
}

export default SearchResult;
