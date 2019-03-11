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
          Inpect a list of ingredients by copy pasting the ingredient list or
          taking a picture
        </p>
        <SearchInput
          className={styles.searchInput}
          onChange={handleSearchInputChange}
        />
        <div className={styles.buttons_container}>
          <button className={styles.button} onClick={handleIngspectClick}>
            IngSpect
          </button>
          <PictureTaker className={styles.button}>Photo</PictureTaker>
        </div>
      </div>
      <svg
        viewBox="0 0 375 333"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.background}
      >
        <path
          d="M-159 332.75L972 332.75L972 -166.161C937.363 -154.517 901.666 -146.892 865.474 -142.942C786.375 -134.139 705.72 -141.278 628.459 -156.388C626.055 -156.873 623.652 -157.359 621.249 -157.774C538.686 -174.409 457.466 -198.669 375.539 -221.681L-159 -221.681L-159 332.75Z"
          fill="#CBCBCB"
        />
        <path
          d="M633.831 -69.9556C631.569 -70.5101 629.307 -71.1339 627.116 -71.6884C488.427 -108.077 352.353 -164.221 207.585 -194.094C84.4477 -219.463 -39.4674 -214.334 -159 -187.025L-159 332.75L972 332.75L972 -65.7275C935.031 -53.5285 896.718 -46.528 858.123 -44.3099C782.275 -39.7353 706.427 -51.3798 633.831 -69.9556Z"
          fill="#D2D2D2"
        />
        <path
          d="M972 332.75L972 35.1223C932.698 47.8757 891.77 54.0445 850.842 54.3218C778.175 54.8763 707.205 38.5878 639.274 16.5464C637.153 15.8533 635.104 15.1602 632.983 14.4671C503.201 -28.5067 374.479 -86.7985 235.436 -118.682C103.463 -148.972 -30.5606 -142.526 -158.929 -109.949L-158.929 332.75L972 332.75Z"
          fill="#DADADA"
        />
        <path
          d="M843.49 152.954C774.075 148.795 707.841 128.556 644.646 102.979C642.667 102.217 640.758 101.385 638.779 100.623C517.904 50.9948 396.533 -9.23772 263.216 -43.3395C122.69 -79.2434 -21.937 -71.619 -159 -33.0813L-159 332.75L972 332.75L972 136.457C930.294 150.042 886.751 155.518 843.49 152.954Z"
          fill="#E1E1E1"
        />
        <path
          d="M-159 332.75L972 332.75L972 238.277C927.962 252.763 881.732 257.338 836.139 251.585C769.975 243.198 708.548 218.523 650.018 189.481C648.181 188.58 646.413 187.679 644.576 186.778C532.607 130.565 418.588 68.3228 290.926 32.0723C142.129 -10.2083 -13.5958 -1.89083 -159.071 43.5781L-159.071 332.75L-159 332.75Z"
          fill="#E7E7E7"
        />
        <path
          d="M650.452 272.933C547.39 210.067 440.723 146.092 318.787 107.484C171.333 60.7678 13.9114 65.3424 -132.129 111.158C-141.177 114 -150.084 116.98 -159.061 120.099L-159.061 332.75L768.359 332.75C728.774 317.987 691.522 297.678 655.471 275.914C653.775 274.943 652.149 273.904 650.452 272.933Z"
          fill="#EDEDED"
        />
        <path
          d="M-158.999 332.75L619.978 332.75C536.496 273.28 447.854 218.731 346.558 182.896C210.98 134.932 63.8084 131.12 -74.0323 168.271C-102.873 176.034 -131.36 185.738 -159.069 197.175L-159.069 332.75L-158.999 332.75Z"
          fill="#F3F3F3"
        />
        <path
          d="M-15.8635 225.454C-49.228 232.801 -82.027 242.99 -113.836 255.813C-129.176 261.982 -144.232 268.844 -159.006 276.26L-159.006 332.75L517.191 332.75C472.728 303.847 425.509 278.548 374.331 258.308C250.699 209.305 113.707 196.828 -15.8635 225.454Z"
          fill="#F9F9F9"
        />
        <path
          d="M42.2598 282.568C-10.9679 291.301 -62.9939 308.283 -110.991 332.75L400.08 332.75C288.606 283.538 162.853 262.744 42.2598 282.568Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default withSearch(HomePage);
