/**
 * Pads the given string to the specified length with the given character.
 * The string is centered, with padding characters added to both sides.
 *
 * @param str - The string to pad.
 * @param length - The total length of the resulting string after padding.
 * @param char - The character to use for padding. Defaults to a space (" ").
 * @returns The padded string.
 */
export function padString(
  str: string,
  length: number,
  char: string = " ",
): string {
  return str.padStart((str.length + length) / 2, char).padEnd(length, char);
}
