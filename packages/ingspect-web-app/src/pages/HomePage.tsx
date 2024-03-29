import classnames from "classnames";
import { History, Location } from "history";
import React, { ChangeEvent } from "react";
import { match, withRouter } from "react-router";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import PictureTaker from "../containers/PictureTaker";
import SearchInput from "../containers/SearchInput";
import withSearch, { WithSearchInjectedProps } from "../WithSearch";

import styles from "./HomePage.module.css";

interface HomePageProps extends WithSearchInjectedProps {
  // withRouter props
  history: History;
  location: Location;
  match: match;
}

const HomePage = (props: HomePageProps) => {
  const { search } = props;
  let searchInputValue: string;

  const handleIngspectClick = () => {
    if (!searchInputValue) return;

    search(searchInputValue);
  };

  const handleSearchInputChange = (
    ele: ChangeEvent<HTMLInputElement>
  ): void => {
    searchInputValue = ele.target.value.trim();
  };

  return (
    <div className={styles.app}>
      <nav>
        <Link
          to="/offline"
          className={classnames(styles.nav__item, styles.nav__offline)}
        >
          Offline
        </Link>
        <Link
          to="/about"
          className={classnames(styles.nav__item, styles.nav__about)}
        >
          About
        </Link>
      </nav>
      <div className={styles.main}>
        <h1 className={styles.main__title}>IngSpect</h1>
        <p className={styles.main__subtitle}>
          Categorize a list of ingredients by their source. Separate the
          ingredients with comma.
        </p>
        <SearchInput
          className={styles.searchInput}
          onChange={handleSearchInputChange}
        />
        <div className={styles.buttons_container}>
          <Button
            className={styles.button}
            onClick={handleIngspectClick}
            data-testid="ingspect-button"
          >
            IngSpect
          </Button>
          <PictureTaker className={styles.button}>Photo</PictureTaker>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withSearch(HomePage));
