const fs = require("fs");
const path = require("path");

const dirPath = path.normalize(`${__filename}/..`);

const ingNameToInfoKeys = JSON.parse(
  fs.readFileSync(`${dirPath}/ingNameToInfoKeys.json`, "utf8")
);

const infoKeyToInfoDetails = JSON.parse(
  fs.readFileSync(`${dirPath}/infoKeyToInfoDetails.json`, "utf8")
);

module.exports = {
  ingNameToInfoKeys,
  infoKeyToInfoDetails
};
