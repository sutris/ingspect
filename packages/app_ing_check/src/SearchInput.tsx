import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { changeSearchInput, doSearch } from "./actions";
import { AppState } from "./reducers";

import styles from "./SearchInput.module.css";

interface ISearchInputProps {
  searchText: string;
  doSearch: Function;
  changeSearchInput: Function;
  className?: string;
}

class SearchInput extends Component<ISearchInputProps> {
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
    return (
      <input
        ref={el => {
          this.searchInput = el;
        }}
        className={classNames(styles.searchInput, this.props.className)}
        type="text"
        placeholder="Put ingredient list here"
        onKeyPress={this.handleKeyPress}
        onChange={this.handleInputChange}
        value={this.props.searchText}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    searchText: state.searchText
  };
};

const mapDispatchToProps = { changeSearchInput, doSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
