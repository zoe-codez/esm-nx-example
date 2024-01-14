// validator.test.ts

import { isNumber, isString } from "../validator.mjs";

describe("validator", () => {
  it("should validate numbers correctly", () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber("5")).toBe(false);
  });

  it("should validate strings correctly", () => {
    expect(isString("hello")).toBe(true);
    expect(isString(123)).toBe(false);
  });
});
