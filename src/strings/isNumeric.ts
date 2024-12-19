/**
 * Checks if the given string consists only of numeric characters (0-9).
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is numeric, otherwise `false`.
 */
export function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}
