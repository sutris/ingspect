import { ICategorizeResult } from "ing_check";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { doSearch } from "./actions";
import historyManager, { HISTORY_EVENT } from "./history";
import Logo from "./Logo";
import PictureTaker from "./PictureTaker";
import { AppState } from "./reducers";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import styles from "./SearchResultPage.module.css";

interface ISearchResultPageProps {
  result: ICategorizeResult;
  doSearch: (...arg: any) => any;
}

class SearchResultPage extends Component<ISearchResultPageProps> {
  public componentDidMount() {
    historyManager.addListener(
      HISTORY_EVENT.SEARCH_UPDATE,
      this.onSearchUpdate
    );

    this.onSearchUpdate(historyManager.getCurrentSearch());
  }

  public componentWillUnmount() {
    historyManager.removeListener(
      HISTORY_EVENT.SEARCH_UPDATE,
      this.onSearchUpdate
    );
  }

  public render() {
    return (
      <div>
        <div className={styles.header}>
          <Link to="/">
            <Logo inline={true} small={true} className={styles.logo} />
          </Link>
          <SearchInput className={styles.input} />
          <PictureTaker className={styles.pictureTaker} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultPage);