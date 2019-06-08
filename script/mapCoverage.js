/**
 * Node script to map test coverage of all packages
 * into a single test coverage.
 *
 * It is expected to be called in the project root directory
 *
 * Inspired by https://github.com/facebook/jest/issues/2418#issuecomment-276056758
 */

const createReporter = require("istanbul-api").createReporter;
const istanbulCoverage = require("istanbul-lib-coverage");
const fs = require("fs");

const coverageMap = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

let packages = fs.readdirSync("./packages/");

packages.forEach(package => {
  const coverage = require(`../packages/${package}/coverage/coverage-final.json`);

  Object.keys(coverage).forEach(fileName =>
    coverageMap.addFileCoverage(coverage[fileName])
  );
});

reporter.addAll(["json", "lcov"]);
reporter.write(coverageMap);
