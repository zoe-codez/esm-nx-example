// dataMapper.ts
import { logger, LogLevel } from "@demo-ts/utilities";

export function dataMapper<T, U>(items: T[], transform: (item: T) => U): U[] {
  logger("Mapping data", LogLevel.DEBUG);
  return items.map(transform);
}
