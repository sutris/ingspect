// tslint:disable-next-line:no-reference
/// <reference path="../definition/ing_check.d.ts"/>

import { History } from "history";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "normalize.css";
import styles from "./App.module.css";

import Logo from "./Logo";
import OfflinePage from "./OfflinePage";
import PictureTaker from "./PictureTaker";
import { AppState } from "./reducers";
import SearchInput from "./SearchInput";
import SearchResultPage from "./SearchResultPage";

class App extends Component {
  public render() {
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
            render={({ history }) => (
              <div className={styles.app}>
                <Logo />
                <div className={styles.searchContainer}>
                  <SearchInput
                    className={styles.searchInput}
                    updateHistory={this.createHistoryUpdater(history)}
                  />
                  <PictureTaker className={styles.pictureTaker} />
                </div>
              </div>
            )}
          />
          <Route
            path="/search"
            // tslint:disable-next-line:jsx-no-lambda
            render={({ history }) => {
              const currentUrl = new URL(window.location.href);
              const searchQuery =
                currentUrl.searchParams.get("search") || undefined;

              return (
                <SearchResultPage
                  updateHistory={this.createHistoryUpdater(history)}
                  searchQuery={searchQuery}
                />
              );
            }}
          />
          <Route path="/offline" component={OfflinePage} />
        </>
      </Router>
    );
  }
  private createHistoryUpdater(history: History): (newUrl: string) => void {
    return (newUrl: string) => {
      history.push(newUrl);
    };
  }
}

export default App;
