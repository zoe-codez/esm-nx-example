// dataFilter.ts
import { logger, LogLevel } from "@demo-ts/utilities";

export function dataFilter<T>(
  items: T[],
  predicate: (item: T) => boolean,
): T[] {
  logger("Filtering data", LogLevel.DEBUG);
  return items.filter(predicate);
}
