import { History, Location } from "history";
import React, { Component } from "react";
import { connect } from "react-redux";
import { match, withRouter } from "react-router";
import { Route } from "react-router-dom";

import "normalize.css";

import AboutPage from "./AboutPage";
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

  // withRouter props
  history: History;
  location: Location;
  match: match;
}

class App extends Component<IAppProps> {
  public render() {
    return (
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
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    progress: state.progress
  };
};

// withRouter is necessary to make the App component re-render
// when the parent Router update the history.
// Related issue: https://github.com/ReactTraining/react-router/issues/4671
export default withRouter(connect(mapStateToProps)(App));
