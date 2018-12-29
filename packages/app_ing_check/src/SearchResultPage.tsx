import { ICategorizeResult } from "ing_check";
import React from "react";

import Logo from "./Logo";
import PictureTaker from "./PictureTaker";
import ProgressBar from "./ProgressBar";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import styles from "./SearchResultPage.module.css";

interface ISearchResultPageProps {
  result: ICategorizeResult;
  progress: {
    status: string;
    progress: number;
  } | null;
}

const SearchResultPage = (props: ISearchResultPageProps) => {
  return (
    <div>
      <div className={styles.header}>
        <Logo inline={true} small={true} className={styles.logo} />
        <SearchInput className={styles.input} />
        <PictureTaker className={styles.pictureTaker} />
      </div>
      {props.progress ? <ProgressBar progress={props.progress} /> : null}
      {Object.keys(props.result).length > 0 ? (
        <SearchResult result={props.result} />
      ) : null}
    </div>
  );
};

export default SearchResultPage;
