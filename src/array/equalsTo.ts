/**
 * Checks if two arrays are equal.
 * 
 * @template T - The type of elements in the arrays.
 * @param {T[]} arrayA - The first array to compare.
 * @param {T[]} arrayB - The second array to compare.
 * @returns {boolean} - Returns true if the arrays are equal, false otherwise.
 */
export default function equalsTo<T>(arrayA: T[], arrayB: T[]): boolean {
  return arrayA.length === arrayB.length && arrayA.every((item, index) => item === arrayB[index])
}
