// tslint:disable-next-line:no-reference
/// <reference path="../definition/ing_check.d.ts"/>

import * as ingCheck from "ing_check";
import React, { Component } from "react";
import { connect } from "react-redux";

import "normalize.css";
import styles from "./App.module.css";

import Logo from "./Logo";
import PictureTaker from "./PictureTaker";
import { AppState } from "./reducers";
import SearchInput from "./SearchInput";
import SearchResultPage from "./SearchResultPage";

interface IAppProps {
  searchResult: ingCheck.ICategorizeResult;
}

class App extends Component<IAppProps> {
  public render() {
    const { searchResult } = this.props;

    if (Object.keys(searchResult).length > 0) {
      return <SearchResultPage result={searchResult} />;
    } else {
      return (
        <div className={styles.app}>
          <Logo />
          <div className={styles.searchContainer}>
            <SearchInput className={styles.searchInput} />
            <PictureTaker className={styles.pictureTaker} />
          </div>
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
