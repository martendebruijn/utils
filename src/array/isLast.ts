/**
 * Checks if the given index is the last index in the array.
 * 
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to check.
 * @param {number} index - The index to check.
 * @returns {boolean} - Returns `true` if the index is the last index, `false` otherwise.
 */
export default function isLast<T>(array: T[], index: number): boolean {
  const lastIndex = array.length - 1;
  return lastIndex === index
}
