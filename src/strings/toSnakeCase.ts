/**
 * Converts a given string to snake_case.
 *
 * This function transforms a string by replacing spaces and hyphens with underscores,
 * and converting all characters to lowercase. It also inserts underscores between
 * lowercase and uppercase letters.
 *
 * @param str - The input string to be converted to snake_case.
 * @returns The snake_case version of the input string.
 *
 * @example
 * ```typescript
 * toSnakeCase("helloWorld"); // "hello_world"
 * toSnakeCase("Hello World"); // "hello_world"
 * toSnakeCase("foo-bar"); // "foo_bar"
 * ```
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
}
