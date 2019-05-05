import ingDict, { CATEGORY } from "./ingDict";

describe("ingDict", () => {
  it("should have property ingNameToInfoKeys", () => {
    expect(ingDict.ingNameToInfoKeys).not.toBeUndefined();
  });

  describe("ingDict#ingNameToInfoKeys", () => {
    it("should map ingredient name to an array of info keys", () => {
      Object.keys(ingDict.ingNameToInfoKeys).forEach(ingName => {
        const infoKeys = ingDict.ingNameToInfoKeys[ingName];

        expect(Array.isArray(infoKeys)).toBe(true);
        expect(infoKeys.every(infoKey => typeof infoKey === "string")).toBe(
          true
        );
      });
    });
  });

  it("should have property infoKeyToInfoDetails", () => {
    expect(ingDict.infoKeyToInfoDetails).not.toBeUndefined();
  });

  describe("ingDict#infoKeyToInfoDetails", () => {
    it("should map info key to info detail with category and definition properties", () => {
      Object.keys(ingDict.infoKeyToInfoDetails).forEach(infoKey => {
        const infoDetails = ingDict.infoKeyToInfoDetails[infoKey];

        expect(typeof infoDetails).toBe("object");
        expect(Object.values(CATEGORY).includes(infoDetails.category)).toBe(
          true
        );
        expect(typeof infoDetails.definition).toBe("string");
      });
    });
  });
});
