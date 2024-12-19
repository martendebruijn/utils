/**
 * Capitalizes the first character of the given string and converts the rest to lowercase.
 *
 * @param str - The string to be capitalized.
 * @returns The capitalized string.
 */
export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
