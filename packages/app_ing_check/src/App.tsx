/// <reference path="../definition/ing_check.d.ts"/>

import React, { Component } from "react";
import { connect } from "react-redux";
import * as ingCheck from "ing_check";

import "normalize.css";
import "./App.css";

import SearchResult from "./SearchResult";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { AppState } from "./reducers";

interface IAppProps {
  searchResult: ingCheck.ICategorizeResult;
}

class App extends Component<IAppProps> {
  render() {
    const { searchResult } = this.props;

    return (
      <div className="app">
        <Logo />
        <SearchInput className="app__searchInput" />
        {searchResult ? <SearchResult result={searchResult} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    searchResult: state.searchResult
  };
};

export default connect(mapStateToProps)(App);
