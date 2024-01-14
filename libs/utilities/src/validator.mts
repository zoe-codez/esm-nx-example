// validator.ts
export function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

export function isString(value: any): boolean {
  return typeof value === "string";
}
