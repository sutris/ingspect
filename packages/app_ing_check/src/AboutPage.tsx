import React from "react";

function AboutPage() {
  return (
    <div>
      <h2>IngCheck</h2>
      <p>
        IngCheck is a web application for categorizing a list of ingredients
        based on its source. There are 9 categories in total:
      </p>
      <ol>
        <li>
          Vegan: The ingredient contains no animal-derived products or
          byproducts whatsoever. Its processing occurs solely with or by
          non-animal substances.
        </li>
        <li>
          Vegetarian: The ingredient contains no meat, poultry, fish, or
          seafood, nor any products derived from them or any other part of an
          animal's (including insect's) body. The ingredient was not processed
          using animal-derived substances (such as bone char). Eggs and dairy,
          and substances derived from them, are vegetarian. Insect secretions,
          (such as honey), are vegetarian.
        </li>
        <li>Typically vegan</li>
        <li>Typically vegetarian</li>
        <li>Typically Non-vegetarian</li>
        <li>May be non-vegetarian</li>
        <li>Non vegetarian</li>
        <li>Unspecified</li>
        <li>Unsure</li>
      </ol>
      <p>
        There are cases where both vegetarian and non-vegetarian sources are
        available for a given ingredient, but some manufacturers told us that
        they use vegetarian sources only. Since we can't generalize this to all
        suppliers, the ingredient will be classified as either typically
        vegetarian, typically vegan, typically non-vegetarian, or may be
        non-vegetarian.
      </p>
      <h2>Copyright</h2>
      <p>
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
      <h2>Feedbacks</h2>
      <p>
        Feel free to submit feedback or issues to{" "}
        <a href="mailto:sutris.sdp@protonmail.com">sutris.sdp@protonmail.com</a>
      </p>
    </div>
  );
}

export default AboutPage;
