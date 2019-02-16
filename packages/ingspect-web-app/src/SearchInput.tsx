import classNames from "classnames";
import React, { ChangeEvent, Component } from "react";

import historyManager, { HISTORY_EVENT } from "./history";

import styles from "./SearchInput.module.css";

interface ISearchInputProps {
  className?: string;
}

interface ISearchInputState {
  searchText?: string;
}

class SearchInput extends Component<ISearchInputProps, ISearchInputState> {
  private searchInput: HTMLInputElement | null = null;

  constructor(props: ISearchInputProps) {
    super(props);

    this.state = {
      searchText: historyManager.getCurrentSearch()
    };
  }

  public componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }

    historyManager.addListener(
      HISTORY_EVENT.SEARCH_UPDATE,
      this.onSearchUpdate
    );
  }

  public componentWillUnmount() {
    historyManager.removeListener(
      HISTORY_EVENT.SEARCH_UPDATE,
      this.onSearchUpdate
    );
  }

  public handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && this.state.searchText) {
      historyManager.updateHistory("/search", {
        search: this.state.searchText
      });
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

  private onSearchUpdate = (search: string | undefined): void => {
    if (search !== this.state.searchText) {
      this.setState({
        searchText: search
      });
    }
  };
}

export default SearchInput;
