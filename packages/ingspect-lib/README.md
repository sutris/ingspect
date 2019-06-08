# IngSpect Lib

Utility libraries to help categorize ingredients based on their sources (vegan, vegetarian, and others). The library consists of:

- `categorize(ingList, ingDict, option)`: Categorize `ingList` (array of string) based on `ingDict` dictionary (expected to have the same structure as `ingspect-dict`'s [`ingDict`](../ingspect-dict/README.md)) with optional `option`.

## Usage

You can use IngSpect lib as follow:

```javascript
import { categorize } from "ingspect-lib";
import ingDict from "ingspect-dict";

categorize([sugar, carrot, salt], ingDict, { minSimilarity: 0.8 });
```

## Available Scripts

In the package directory, you can run:

### `npm test`

Run the test.

### `npm run test:ci`

Run the test in CI mode with coverage generation.

### `npm run build`

Build the package.
