// dataFilter.test.ts

import { dataFilter } from "../data-filter.mjs";

describe("dataFilter", () => {
  it("filters data correctly", () => {
    const numbers = [1, 2, 3, 4, 5];
    const even = dataFilter(numbers, n => n % 2 === 0);
    expect(even).toEqual([2, 4]);
  });
});
