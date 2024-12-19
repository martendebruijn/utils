import { describe, it, expect } from "vitest";
import { countVowelsAndConsonants } from "./countVowelsAndConsonants";

describe("countVowelsAndConsonants", () => {
  it("should count vowels and consonants in a simple word", () => {
    const result = countVowelsAndConsonants("hello");
    expect(result).toEqual({ vowels: 2, consonants: 3 });
  });

  it("should return 0 vowels and 0 consonants for an empty string", () => {
    const result = countVowelsAndConsonants("");
    expect(result).toEqual({ vowels: 0, consonants: 0 });
  });

  it("should count vowels and consonants in a string with mixed case", () => {
    const result = countVowelsAndConsonants("HeLLo");
    expect(result).toEqual({ vowels: 2, consonants: 3 });
  });

  it("should count vowels and consonants in a string with only vowels", () => {
    const result = countVowelsAndConsonants("aeiou");
    expect(result).toEqual({ vowels: 5, consonants: 0 });
  });

  it("should count vowels and consonants in a string with only consonants", () => {
    const result = countVowelsAndConsonants("bcdfg");
    expect(result).toEqual({ vowels: 0, consonants: 5 });
  });

  it("should count vowels and consonants in a string with numbers and special characters", () => {
    const result = countVowelsAndConsonants("h3ll0 w0rld!");
    expect(result).toEqual({ vowels: 0, consonants: 7 });
  });
});
