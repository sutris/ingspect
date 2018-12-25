import { ICategorizeResult } from "ing_check";
import React from "react";

import Logo from "./Logo";
import PictureTaker from "./PictureTaker";
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
        <Logo inline={true} small={true} className={styles.logo} />
        <SearchInput className={styles.input} />
        <PictureTaker className={styles.pictureTaker} />
      </div>
      <SearchResult result={props.result} />
    </div>
  );
};

export default SearchResultPage;
