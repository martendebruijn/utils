/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param str - The input string to be transformed.
 * @returns The transformed string with the first letter of each word capitalized and the rest in lowercase.
 */
export function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
