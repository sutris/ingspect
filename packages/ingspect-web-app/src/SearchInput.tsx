import classNames from "classnames";
import { History, Location } from "history";
import React, { ChangeEvent, Component } from "react";
import { match, withRouter } from "react-router";

import TextInput from "./components/TextInput";
import { getCurrentSearch, getSearchUpdateObservable } from "./utils/history";
import Observable from "./utils/observable";
import withSearch, { WithSearchInjectedProps } from "./WithSearch";

interface ISearchInputProps extends WithSearchInjectedProps {
  className?: string;
  onChange?: (ele: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;

  // withRouter props
  history: History;
  location: Location;
  match: match;
}

interface ISearchInputState {
  searchText?: string;
}

class SearchInput extends Component<ISearchInputProps, ISearchInputState> {
  private searchInput: HTMLInputElement | null = null;
  private searchUpdateObservable: Observable<string | undefined> | undefined;

  constructor(props: ISearchInputProps) {
    super(props);

    this.state = {
      searchText: getCurrentSearch() || ""
    };
  }

  public componentDidMount() {
    this.searchInput && this.searchInput.focus();

    this.searchUpdateObservable = getSearchUpdateObservable(this.props.history);
    this.searchUpdateObservable.subscribe(this.onSearchUpdate);
  }

  public componentWillUnmount() {
    this.searchUpdateObservable && this.searchUpdateObservable.unsubscribe();
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
      <TextInput
        ref={el => {
          this.searchInput = el;
        }}
        className={classNames(className)}
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

export default withRouter(withSearch(SearchInput));
