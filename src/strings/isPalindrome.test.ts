import { describe, it, expect } from "vitest";
import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  it("should return true for a simple palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for a palindrome with mixed case", () => {
    expect(isPalindrome("MadAm")).toBe(true);
  });

  it("should return true for a palindrome with spaces and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
  });

  it("should return true for a numeric palindrome", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  it("should return false for a non-palindrome number", () => {
    expect(isPalindrome("12345")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });
});
