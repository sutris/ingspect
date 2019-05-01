# IngSpect Lib

Utility libraries to help categorize ingredients based on their sources (vegan, vegetarian, and others). The library consists of:

1. `categorize(ingList, ingDict, option)`: Categorize `ingList` (array of string) based `ingDict` dictionary with optional `option`.
2. `ingDict`: Dictionary of ingredient details which contain `ingNameToInfoKeys` and `infoKeyToInfoDetails`.

## Usage

You can use IngSpect lib

```javascript
import { categorize, ingDict } from "ingspect-lib";

categorize([sugar, carrot, salt], ingDict, { minSimilarity: 0.8 });
```
