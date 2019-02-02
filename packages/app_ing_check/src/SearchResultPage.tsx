import { ICategorizeResult } from "ing_check";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { doSearch } from "./actions";
import Logo from "./Logo";
import PictureTaker from "./PictureTaker";
import ProgressBar from "./ProgressBar";
import { AppState } from "./reducers";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import { IHistoryUpdater } from "./shared";

import styles from "./SearchResultPage.module.css";

interface ISearchResultPageProps extends IHistoryUpdater {
  result: ICategorizeResult;
  progress: {
    status: string;
    progress: number;
  } | null;
  searchQuery?: string;
  doSearch: (...arg: any) => any;
}

class SearchResultPage extends Component<ISearchResultPageProps> {
  public componentDidMount() {
    this.props.doSearch(this.props.searchQuery);
  }

  public componentDidUpdate(prevProps: ISearchResultPageProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.props.doSearch(this.props.searchQuery);
    }
  }

  public render() {
    return (
      <div>
        <div className={styles.header}>
          <Link to="/">
            <Logo inline={true} small={true} className={styles.logo} />
          </Link>
          <SearchInput
            className={styles.input}
            updateHistory={this.props.updateHistory}
            initialSearchQuery={this.props.searchQuery}
          />
          <PictureTaker className={styles.pictureTaker} />
        </div>
        {this.props.progress ? (
          <ProgressBar progress={this.props.progress} />
        ) : null}
        {Object.keys(this.props.result).length > 0 ? (
          <SearchResult result={this.props.result} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    result: state.search.searchResult,
    progress: state.progress
  };
};

const mapDispatchToProps = { doSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultPage);
