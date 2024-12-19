/**
 * Truncates a string to a specified length and appends an ellipsis ("...") if the string exceeds that length.
 *
 * @param str - The string to be truncated.
 * @param length - The maximum length of the truncated string.
 * @returns The truncated string with an ellipsis appended if it exceeds the specified length.
 */
export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "..." : str;
}
