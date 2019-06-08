it("should export ingredients dictionary as the default export", () => {
  expect(require("./index").default).toEqual(require("./data/ingDict").default);
});
