# IngSpect Dict

Ingredients data/dictionary to document various ingredients information, such as their source and information.

The data is an object with 2 properties:

1. `ingNameToInfoKeys`: Map an ingredient to its information keys. An ingredient can have multiple information keys since it can too generic, for example: `sugar` which can refer to either `cane sugar`, `refined beet sugar` or `sucrose`.
2. `infoKeyToInfoDetails`: Map an information key to the information details (category and definition).

All ingredients information is retrieved from the Vegetarian Resource Group (https://www.vrg.org/ingredients) with the help of the [scrapper](./util/vrg_scraper.js).

## Available Scripts

In the package directory, you can run:

### `npm test`

Run the test.

### `npm run test:ci`

Run the test in CI mode with coverage generation.

### `npm run build`

Build the package.
