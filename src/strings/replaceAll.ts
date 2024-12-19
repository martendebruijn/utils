/**
 * Replaces all occurrences of a substring within a string with a new substring.
 *
 * @param str - The original string in which to perform the replacements.
 * @param search - The substring to search for within the original string.
 * @param replacement - The substring to replace each occurrence of the search substring.
 * @returns A new string with all occurrences of the search substring replaced by the replacement substring.
 */
export function replaceAll(
  str: string,
  search: string,
  replacement: string,
): string {
  return str.split(search).join(replacement);
}
