/**
 * Converts a given string to PascalCase.
 *
 * PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized.
 *
 * @param str - The input string to be converted.
 * @returns The converted string in PascalCase.
 *
 * @example
 * ```typescript
 * toPascalCase("hello_world"); // "HelloWorld"
 * toPascalCase("foo-bar"); // "FooBar"
 * toPascalCase("example string"); // "ExampleString"
 * ```
 */
export function toPascalCase(str: string): string {
  if (/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(str)) return str;

  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}
