/**
 * Converts a given string to kebab-case.
 *
 * This function transforms a string by replacing spaces, underscores, and camelCase
 * with hyphens, and converts all characters to lowercase.
 *
 * @param str - The input string to be converted to kebab-case.
 * @returns The kebab-case version of the input string.
 *
 * @example
 * ```typescript
 * toKebabCase("helloWorld"); // "hello-world"
 * toKebabCase("Hello World"); // "hello-world"
 * toKebabCase("hello_world"); // "hello-world"
 * ```
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}
