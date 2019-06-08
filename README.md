# IngSpect <a href="https://travis-ci.com/sutris/ingspect"><img alt="Travis Status" src="https://travis-ci.com/sutris/ingspect.svg?token=p8EQStg3mnq2qNy2vcMo&branch=master"></a> <a href="https://codecov.io/gh/sutris/ingspect"><img src="https://codecov.io/gh/sutris/ingspect/branch/master/graph/badge.svg?token=q00eG8hqs8" /></a>

IngSpect is a set of libraries and applications to help categorize ingredients based on their source (vegan, vegetarian, and others).

## Getting Started

IngSpect is a managed as a monorepo with the help of [Lerna](https://lernajs.io/). You can bootstrap the repo by executing the following command in a terminal:

```
git clone git@github.com:sutris/ingspect.git
cd ingspect
npm install
npm run bootstrap
```

## Available Scripts

In the package directory, you can run:

### `npm run bootstrap`

Bootstrap the project by installing all the packages' dependencies.

### `npm test`

Run all packages test.

### `npm run test:ci`

Run all packages test in CI mode with coverage generation and then merge/map all packages code coverage into a single code coverage.
