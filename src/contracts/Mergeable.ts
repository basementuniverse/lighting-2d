/**
 * This object maybe can be merged with another object of the same type
 */
export interface Mergeable<T> {
  merge?(other: T, ...args: any[]): T | null;
}
