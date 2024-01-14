// logger.ts
export enum LogLevel {
  INFO = "INFO",
  ERROR = "ERROR",
  DEBUG = "DEBUG",
}

export function logger(message: string, level: LogLevel = LogLevel.INFO): void {
  console.log(`[${level}]: ${message}`);
}
