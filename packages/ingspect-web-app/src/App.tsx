// tslint:disable-next-line:no-reference
/// <reference path="../definition/ingspect-lib.d.ts"/>

import { History } from "history";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Router } from "react-router-dom";

import "normalize.css";
import styles from "./App.module.css";

import AboutPage from "./AboutPage";
import historyManager from "./history";
import Logo from "./Logo";
import OCRProgress from "./OCRProgress";
import OfflinePage from "./OfflinePage";
import PictureTaker from "./PictureTaker";
import { AppState } from "./reducers";
import SearchInput from "./SearchInput";
import SearchResultPage from "./SearchResultPage";

interface IAppProps {
  progress: {
    status: string;
    progress: number;
  } | null;
}

class App extends Component<IAppProps> {
  public render() {
    return (
      <Router history={historyManager.history}>
        <>
          <nav>
            <Link to="/offline">Offline</Link>
            <Link to="/about">About</Link>
          </nav>
          {this.props.progress ? (
            <OCRProgress progress={this.props.progress} />
          ) : null}
          <Route
            path="/"
            exact={true}
            // tslint:disable-next-line:jsx-no-lambda
            render={() => (
              <div className={styles.app}>
                <Logo />
                <div className={styles.searchContainer}>
                  <SearchInput className={styles.searchInput} />
                  <PictureTaker className={styles.pictureTaker} />
                </div>
              </div>
            )}
          />
          <Route
            path="/search"
            // tslint:disable-next-line:jsx-no-lambda
            component={SearchResultPage}
          />
          <Route path="/offline" component={OfflinePage} />
          <Route path="/about" component={AboutPage} />
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    progress: state.progress
  };
};

export default connect(mapStateToProps)(App);
