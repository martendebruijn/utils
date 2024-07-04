/**
 * Creates a shallow copy of an array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be copied.
 * @returns {T[]} - A new array with the same elements as the original array.
 */
export default function copy<T>(array: T[]): T[] {
  return [...array]
}
