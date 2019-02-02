import classNames from "classnames";
import React, { ChangeEvent, Component } from "react";

import { IHistoryUpdater } from "./shared";

import styles from "./SearchInput.module.css";

interface ISearchInputProps extends IHistoryUpdater {
  initialSearchQuery?: string;
  className?: string;
}

interface ISearchInputState {
  searchText?: string;
}

class SearchInput extends Component<ISearchInputProps, ISearchInputState> {
  public static getDerivedStateFromProps(
    props: ISearchInputProps,
    state: ISearchInputState
  ) {
    if (state.searchText === undefined) {
      return {
        searchText: props.initialSearchQuery
      };
    }

    return {
      searchText: state.searchText
    };
  }
  private searchInput: HTMLInputElement | null = null;

  constructor(props: ISearchInputProps) {
    super(props);

    this.state = {
      searchText: undefined
    };
  }

  public componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  public handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && this.state.searchText) {
      const searchParams = new URLSearchParams(window.location.search);

      searchParams.set("search", this.state.searchText);

      const newPath = "/search/?" + searchParams.toString();

      this.props.updateHistory(newPath);
    }
  };

  public handleInputChange = (ele: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: ele.target.value
    });
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
        value={this.state.searchText}
      />
    );
  }
}

export default SearchInput;
