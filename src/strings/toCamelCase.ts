/**
 * Converts a given string to camelCase.
 *
 * This function takes a string with words separated by hyphens or underscores
 * and converts it to camelCase format. For example, "hello-world" or "hello_world"
 * will be converted to "helloWorld".
 *
 * @param str - The input string to be converted to camelCase.
 * @returns The camelCase formatted string.
 */
export function toCamelCase(str: string): string {
  str = str.replace(/[-_]+$/, "");
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", ""),
  );
}
