// responseHandler.test.ts

import { responseHandler } from "../response-hander.mjs";

describe("responseHandler", () => {
  it("should process the response", () => {
    const response = { data: "Test data", url: "https://example.com" };
    const processed = responseHandler(response);
    expect(processed[0].processed).toBe(true);
  });
});
