import classNames from "classnames";
import React, { ChangeEvent, Component } from "react";
import { connect } from "react-redux";

import { changeSearchInput, doSearch } from "./actions";
import { AppState } from "./reducers";

import styles from "./SearchInput.module.css";

interface ISearchInputProps {
  searchText: string;
  doSearch: (...arg: any) => any;
  changeSearchInput: (...arg: any) => any;
  className?: string;
}

class SearchInput extends Component<ISearchInputProps> {
  private searchInput: HTMLInputElement | null = null;

  public componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  public handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      this.props.doSearch(this.props.searchText);
    }
  };

  public handleInputChange = (ele: ChangeEvent<HTMLInputElement>) => {
    this.props.changeSearchInput(ele.target.value);
  };

  public render() {
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
