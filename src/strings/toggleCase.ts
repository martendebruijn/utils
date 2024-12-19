/**
 * Toggles the case of each character in the given string.
 * Converts uppercase characters to lowercase and vice versa.
 *
 * @param str - The input string to toggle case.
 * @returns The resulting string with toggled case for each character.
 *
 * @example
 * ```typescript
 * toggleCase("Hello World"); // returns "hELLO wORLD"
 * toggleCase("JavaScript"); // returns "jAVAsCRIPT"
 * ```
 */
export function toggleCase(str: string): string {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join("");
}
