import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { render } from "react-testing-library";

import store from "../store";

function renderWithAppContext(
  app: React.ReactNode,
  { route: { initialRoute = "/", history = createBrowserHistory() } = {} } = {}
) {
  history.push(initialRoute);

  const renderResult = render(
    <Provider store={store}>
      <Router history={history}>{app}</Router>
    </Provider>
  );

  return { ...renderResult, history };
}

export { renderWithAppContext };
