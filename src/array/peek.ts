/**
 * Returns the last element of an array.
 * 
 * @template T The type of elements in the array.
 * @param {T[]} array The array to peek into.
 * @returns {T} The last element of the array.
 */
export default function peek<T>(array: T[]): T {
  return array[array.length - 1]
}
