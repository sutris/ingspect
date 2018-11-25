/// <reference path="../definition/ing_check.d.ts"/>

import React, { Component } from "react";
import { connect } from "react-redux";
import * as ingCheck from "ing_check";

import "normalize.css";
import styles from "./App.module.css";

import SearchResultPage from "./SearchResultPage";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { AppState } from "./reducers";

interface IAppProps {
  searchResult: ingCheck.ICategorizeResult;
}

class App extends Component<IAppProps> {
  render() {
    const { searchResult } = this.props;

    if (Object.keys(searchResult).length > 0) {
      return <SearchResultPage result={searchResult} />;
    } else {
      return (
        <div className={styles.app}>
          <Logo />
          <SearchInput className={styles.searchInput} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    searchResult: state.searchResult
  };
};

export default connect(mapStateToProps)(App);
