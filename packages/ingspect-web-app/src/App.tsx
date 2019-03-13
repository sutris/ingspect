import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Router } from "react-router-dom";

import "normalize.css";

import AboutPage from "./AboutPage";
import historyManager from "./history";
import HomePage from "./HomePage";
import OCRProgress from "./OCRProgress";
import OfflinePage from "./OfflinePage";
import { AppState } from "./reducers";

import SearchResultPage from "./SearchResultPage";

interface IAppProps {
  progress: {
    status: string;
    progress: number;
  } | null;
}

class App extends Component<IAppProps> {
  public render() {
    return (
      <Router history={historyManager.history}>
        <>
          {this.props.progress ? (
            <OCRProgress progress={this.props.progress} />
          ) : (
            <>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/search" component={SearchResultPage} />
              <Route path="/offline" component={OfflinePage} />
              <Route path="/about" component={AboutPage} />
            </>
          )}
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    progress: state.progress
  };
};

export default connect(mapStateToProps)(App);
