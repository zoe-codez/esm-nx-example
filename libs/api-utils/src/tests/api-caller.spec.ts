// apiCaller.test.ts

import { apiCaller } from "../api-caller.mjs";

describe("apiCaller", () => {
  it("should return a promise", () => {
    const result = apiCaller("https://example.com");
    expect(result).toBeInstanceOf(Promise);
  });
});
