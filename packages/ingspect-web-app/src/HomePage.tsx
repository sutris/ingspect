import React from "react";

import Logo from "./Logo";
import PictureTaker from "./PictureTaker";
import SearchInput from "./SearchInput";

import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.app}>
    <Logo />
    <div className={styles.searchContainer}>
      <SearchInput className={styles.searchInput} />
      <PictureTaker className={styles.pictureTaker} />
    </div>
  </div>
);

export default HomePage;
