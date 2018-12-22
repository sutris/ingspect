import React from "react";
import { ICategorizeResult } from "ing_check";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import styles from "./SearchResultPage.module.css";

interface ISearchResultPageProps {
  result: ICategorizeResult;
}

const SearchResultPage = (props: ISearchResultPageProps) => {
  return (
    <div>
      <div className={styles.header}>
        <Logo inline small className={styles.logo} />
        <SearchInput className={styles.input} />
      </div>
      <SearchResult result={props.result} />
    </div>
  );
};

export default SearchResultPage;
