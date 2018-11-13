import React, { Component } from "react";
import "normalize.css";

import "./App.css";

class App extends Component {
  private searchInput: HTMLInputElement | null = null;

  componentDidMount() {
    if (this.searchInput) {
      this.searchInput.focus();
    }
  }

  handleKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      // DO SOMETHING
    }
  }

  render() {
    return (
      <div className="app">
        <div className="logo" />
        <input
          ref={el => {
            this.searchInput = el;
          }}
          className="search_input"
          type="text"
          placeholder="Put ingredient list here"
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default App;
