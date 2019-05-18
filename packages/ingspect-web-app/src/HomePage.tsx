import classnames from "classnames";
import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";

import PictureTaker from "./PictureTaker";
import SearchInput from "./SearchInput";
import withSearch, { WithSearchProps } from "./WithSearch";

import styles from "./HomePage.module.css";

const HomePage = (props: WithSearchProps) => {
  const { search } = props;
  let searchInputValue: string;

  const handleIngspectClick = () => {
    if (!searchInputValue) return;

    search(searchInputValue);
  };

  const handleSearchInputChange = (
    ele: ChangeEvent<HTMLInputElement>
  ): void => {
    searchInputValue = ele.target.value;
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
          <button
            className={styles.button}
            onClick={handleIngspectClick}
            data-testid="ingspect-button"
          >
            IngSpect
          </button>
          <PictureTaker className={styles.button}>Photo</PictureTaker>
        </div>
      </div>
    </div>
  );
};

export default withSearch(HomePage);
