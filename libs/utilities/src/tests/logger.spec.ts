// logger.test.ts

import { logger, LogLevel } from "../logger.mjs";

describe("logger", () => {
  it("should log without error", () => {
    expect(() => logger("Test message", LogLevel.INFO)).not.toThrow();
  });
});
