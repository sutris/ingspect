const baseConfig = require("./jest.config");

const currentPath = process.cwd();
const packagePathRegex = /(\w+\/)+(?<packagePath>packages\/[\w\-]+)/;
const packagePath = packagePathRegex.exec(currentPath).groups.packagePath;

module.exports = {
  ...baseConfig,
  collectCoverage: true,
  collectCoverageFrom: [
    `${packagePath}/**/*.{ts,tsx}`,
    `${packagePath}/!dist/**/*`
  ],
  coverageReporters: ["json", "text"],
  coverageDirectory: `${currentPath}/coverage`,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
