import React from "react";
import { ICategorizeResult } from "ing_check";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import "./SearchResultPage.css";

interface ISearchResultPageProps {
  result: ICategorizeResult;
}

const SearchResultPage = (props: ISearchResultPageProps) => {
  return (
    <div className="searchResultPage">
      <div className="searchResultPage__header">
        <Logo inline small />
        <SearchInput className="searchResultPage__input" />
      </div>
      <SearchResult result={props.result} />
    </div>
  );
};

export default SearchResultPage;
