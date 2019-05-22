import classNames from "classnames";
import React, { ChangeEvent, Component } from "react";

import historyManager, { HISTORY_EVENT } from "./history";
import withSearch, { WithSearchProps } from "./WithSearch";

import styles from "./SearchInput.module.css";

interface ISearchInputProps extends WithSearchProps {
  className?: string;
  onChange?: (ele: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
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
    this.searchInput && this.searchInput.focus();

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
    const sanitizedSearchText =
      this.state.searchText && this.state.searchText.trim();

    if (event.key === "Enter" && sanitizedSearchText) {
      this.props.search(sanitizedSearchText);
    }
  };

  public handleInputChange = (ele: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: ele.target.value
    });

    if (this.props.onChange) {
      this.props.onChange(ele);
    }
  };

  public render() {
    const { className, placeholder } = this.props;

    return (
      <input
        ref={el => {
          this.searchInput = el;
        }}
        className={classNames(styles.searchInput, className)}
        type="text"
        placeholder={placeholder ? placeholder : "carrot, sugar, salt, ..."}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleInputChange}
        value={this.state.searchText}
        data-testid="search-input"
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

export default withSearch(SearchInput);
