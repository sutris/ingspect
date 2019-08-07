import { History, Location } from "history";
import { CategorizeResult } from "ingspect-lib";
import React, { Component } from "react";
import { connect } from "react-redux";
import { match, withRouter } from "react-router";
import { Link } from "react-router-dom";

import { doSearch } from "../actions";
import PictureTaker from "../containers/PictureTaker";
import SearchInput from "../containers/SearchInput";
import { AppState } from "../reducers";
import { getCurrentSearch, getSearchUpdateObservable } from "../utils/history";
import Observable from "../utils/observable";
import SearchResult from "./SearchResult";

import styles from "./SearchResultPage.module.css";

interface ISearchResultPageProps {
  result: CategorizeResult;
  doSearch: (...arg: any) => any;

  // withRouter props
  history: History;
  location: Location;
  match: match;
}

class SearchResultPage extends Component<ISearchResultPageProps> {
  private searchUpdateObservable: Observable<string | undefined> | undefined;

  public componentDidMount() {
    this.searchUpdateObservable = getSearchUpdateObservable(this.props.history);
    this.searchUpdateObservable.subscribe(this.onSearchUpdate);

    this.onSearchUpdate(getCurrentSearch());
  }

  public componentWillUnmount() {
    this.searchUpdateObservable && this.searchUpdateObservable.unsubscribe();
  }

  public render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.widthConstrainer}>
            <SearchInput className={styles.input} />
            <PictureTaker className={styles.pictureTaker} showIcon={true} />
            <Link to="/" className={styles.backButton}>
              Back
            </Link>
          </div>
        </div>
        {Object.keys(this.props.result).length > 0 ? (
          <SearchResult result={this.props.result} />
        ) : null}
      </div>
    );
  }

  private onSearchUpdate = (search: string | undefined): void => {
    if (search) {
      this.props.doSearch(search);
    }
  };
}

const mapStateToProps = (state: AppState) => {
  return {
    result: state.search.searchResult
  };
};

const mapDispatchToProps = { doSearch };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchResultPage)
);
