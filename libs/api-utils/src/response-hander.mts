// responseHandler.ts
import { dataMapper } from "@demo-ts/data-processing";
import { logger, LogLevel } from "@demo-ts/utilities";

import { ApiResponse } from "./api-types.mjs";

export function responseHandler(response: ApiResponse): any {
  logger("Processing API response", LogLevel.DEBUG);
  // Example processing (could be more complex in real use cases)
  return dataMapper([response], res => ({ ...res, processed: true }));
}
