// data-types.ts
export type PredicateFunction<T> = (item: T) => boolean;
export type TransformFunction<T, U> = (item: T) => U;
