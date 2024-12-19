/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring spaces, punctuation, and case).
 *
 * @param str - The string to check.
 * @returns `true` if the string is a palindrome, `false` otherwise.
 */
export function isPalindrome(str: string): boolean {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
