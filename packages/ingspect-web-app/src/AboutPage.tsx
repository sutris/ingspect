import React from "react";
import { Link } from "react-router-dom";

import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <>
      <div className={styles.page}>
        <Link to="/" className={styles["backButton--top"]}>
          Back
        </Link>
        <h2 className={styles.heading}>IngCheck</h2>
        <p className={styles.paragraph}>
          IngCheck is a web application for categorizing a list of ingredients
          based on its source. There are 9 categories in total:
        </p>
        <ul className={styles.categList}>
          <li>
            <span className={styles.categList__itemName}>Vegan</span>: The
            ingredient contains no animal-derived products or byproducts
            whatsoever. Its processing occurs solely with or by non-animal
            substances.
          </li>
          <li>
            <span className={styles.categList__itemName}>Vegetarian</span>: The
            ingredient contains no meat, poultry, fish, or seafood, nor any
            products derived from them or any other part of an animal's
            (including insect's) body. The ingredient was not processed using
            animal-derived substances (such as bone char). Eggs and dairy, and
            substances derived from them, are vegetarian. Insect secretions,
            (such as honey), are vegetarian.
          </li>
          <li>
            <span className={styles.categList__itemName}>Typically vegan</span>
          </li>
          <li>
            <span className={styles.categList__itemName}>
              Typically vegetarian
            </span>
          </li>
          <li>
            <span className={styles.categList__itemName}>
              Typically Non-vegetarian
            </span>
          </li>
          <li>
            <span className={styles.categList__itemName}>
              May be non-vegetarian
            </span>
          </li>
          <li>
            <span className={styles.categList__itemName}>Non vegetarian</span>
          </li>
          <li>
            <span className={styles.categList__itemName}>Unspecified</span>
          </li>
          <li>
            <span className={styles.categList__itemName}>Unsure</span>
          </li>
        </ul>
        <p>
          There are cases where both vegetarian and non-vegetarian sources are
          available for a given ingredient, but some manufacturers told us that
          they use vegetarian sources only. Since we can't generalize this to
          all suppliers, the ingredient will be classified as either typically
          vegetarian, typically vegan, typically non-vegetarian, or may be
          non-vegetarian.
        </p>
        <h2 className={styles.heading}>Copyright</h2>
        <p className={styles.paragraph}>
          All ingredients information is retrieved from the Vegetarian Resource
          Group (
          <a
            href="https://www.vrg.org/ingredients"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"https://www.vrg.org/ingredients"}
          </a>
          )
        </p>
        <h2 className={styles.heading}>Feedbacks</h2>
        <p className={styles.paragraph}>
          Feel free to submit feedback or issues to{" "}
          <a href="mailto:sutris.sdp@protonmail.com">
            sutris.sdp@protonmail.com
          </a>
        </p>
      </div>
      <Link to="/" className={styles["backButton--bottom"]}>
        Back to Home
      </Link>
    </>
  );
}

export default AboutPage;
