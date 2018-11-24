/// <reference path="../definition/ing_check.d.ts"/>

import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import * as ingCheck from "ing_check";
import "normalize.css";

import SearchResult from "./SearchResult";
import { changeSearchInput, doSearch } from "./actions";
import { AppState } from "./reducers";

import "./App.css";

interface IAppProps {
  searchText: string;
  searchResult: ingCheck.ICategorizeResult;
  doSearch: Function;
  changeSearchInput: Function;
}

class App extends Component<IAppProps> {
  private searchInput: HTMLInputElement | null = null;

  componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      this.props.doSearch(this.props.searchText);
    }
  };

  handleInputChange = (ele: ChangeEvent<HTMLInputElement>) => {
    this.props.changeSearchInput(ele.target.value);
  };

  render() {
    const { searchResult } = this.props;

    return (
      <div className="app">
        <div className="logo" />
        <input
          ref={el => {
            this.searchInput = el;
          }}
          className="search_input"
          type="text"
          placeholder="Put ingredient list here"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleInputChange}
        />
        {searchResult ? <SearchResult result={searchResult} /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => {
  return {
    searchText: state.searchText,
    searchResult: state.searchResult
  };
};

const mapDispatchToProps = { changeSearchInput, doSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
