// dataMapper.test.ts

import { dataMapper } from "../data-mapper.mjs";

describe("dataMapper", () => {
  it("maps data correctly", () => {
    const numbers = [1, 2, 3];
    const doubled = dataMapper(numbers, n => n * 2);
    expect(doubled).toEqual([2, 4, 6]);
  });
});
