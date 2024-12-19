/**
 * Counts the number of vowels and consonants in a given string.
 *
 * @param str - The string to be analyzed.
 * @returns An object containing the count of vowels and consonants.
 *
 * @example
 * ```typescript
 * const result = countVowelsAndConsonants("hello");
 * console.log(result); // { vowels: 2, consonants: 3 }
 * ```
 */
export function countVowelsAndConsonants(str: string): {
  vowels: number;
  consonants: number;
} {
  const vowels = str.match(/[aeiou]/gi)?.length || 0;
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
  return { vowels, consonants };
}
