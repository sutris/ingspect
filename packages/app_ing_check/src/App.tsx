/// <reference path="../definition/ing_check.d.ts"/>

import React, { Component, ChangeEvent } from "react";
import * as ingCheck from "ing_check";
import "normalize.css";

import SearchResult from "./SearchResult";

import "./App.css";

interface AppState {
  searchText: string;
  searchResult: ingCheck.ICategorizeResult;
}

class App extends Component<{}, AppState> {
  private searchInput: HTMLInputElement | null = null;

  constructor(props: {}) {
    super(props);

    this.state = {
      searchText: "",
      searchResult: {}
    };
  }

  componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const ingList = this.state.searchText.split(",").map(ing => ing.trim());
      const categorizeOption = { minSimilarity: 0.85 };

      const result = ingCheck.categorize(
        ingList,
        ingCheck.ingDict,
        categorizeOption
      );

      this.setState({ searchResult: result });
    }
  };

  handleInputChange = (ele: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: ele.target.value });
  };

  render() {
    const { searchResult } = this.state;

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

export default App;
