import React from "react";
import { ICategorizeResult } from "ing_check";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

interface ISearchResultPageProps {
  result: ICategorizeResult;
}

const SearchResultPage = (props: ISearchResultPageProps) => {
  return (
    <>
      <div className="header">
        <Logo />
        <SearchInput />
      </div>
      <SearchResult result={props.result} />
    </>
  );
};

export default SearchResultPage;
