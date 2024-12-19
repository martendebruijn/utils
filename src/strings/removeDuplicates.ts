/**
 * Removes duplicate characters from a given string.
 *
 * @param str - The input string from which duplicate characters will be removed.
 * @returns A new string with all duplicate characters removed.
 *
 * @example
 * ```typescript
 * const result = removeDuplicates("aabbcc");
 * console.log(result); // "abc"
 * ```
 */
export function removeDuplicates(str: string): string {
  return Array.from(new Set(str.split(""))).join("");
}
