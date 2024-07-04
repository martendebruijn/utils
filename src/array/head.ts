/**
 * Returns the first element of an array.
 *
 * @template T The type of the elements in the array.
 * @param {T[]} array The input array.
 * @returns {T} The first element of the array.
 */
export default function head<T>(array: T[]): T {
  return array[0]
}
