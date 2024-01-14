// apiCaller.ts
import { logger, LogLevel } from "@demo-ts/utilities";

export async function apiCaller(url: string): Promise<unknown> {
  logger(`Making API call to ${url}`, LogLevel.INFO);
  // Simulated API call (in a real scenario, you'd use fetch, axios, etc.)
  return { data: "Sample Data", url };
}
