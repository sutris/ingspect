// tslint:disable-next-line:no-reference
/// <reference path="../definition/ing_check.d.ts"/>

import * as ingCheck from "ing_check";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "normalize.css";
import styles from "./App.module.css";

import Logo from "./Logo";
import OfflinePage from "./OfflinePage";
import PictureTaker from "./PictureTaker";
import { AppState } from "./reducers";
import SearchInput from "./SearchInput";
import SearchResultPage from "./SearchResultPage";

interface IAppProps {
  searchResult: ingCheck.ICategorizeResult;
  progress: {
    status: string;
    progress: number;
  } | null;
}

class App extends Component<IAppProps> {
  public render() {
    const { searchResult, progress } = this.props;

    return (
      <Router>
        <>
          <nav>
            <Link to="/offline">Offline</Link>
          </nav>
          <Route
            path="/"
            exact={true}
            // tslint:disable-next-line:jsx-no-lambda
            render={() => {
              if (Object.keys(searchResult).length > 0 || progress) {
                return (
                  <SearchResultPage result={searchResult} progress={progress} />
                );
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
            }}
          />
          <Route path="/offline" component={OfflinePage} />
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    searchResult: state.search.searchResult,
    progress: state.progress
  };
};

export default connect(mapStateToProps)(App);
