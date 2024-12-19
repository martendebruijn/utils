/**
 * Checks if the given string contains only alphabetic characters (a-z, A-Z).
 *
 * @param str - The string to be checked.
 * @returns `true` if the string contains only alphabetic characters, otherwise `false`.
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}
