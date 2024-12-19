import { describe, it, expect } from "vitest";
import { capitalizeWords } from "../capitalizeWords";

describe("capitalizeWords", () => {
  it("should capitalize the first letter of each word", () => {
    const input = "hello world";
    const output = "Hello World";
    expect(capitalizeWords(input)).toBe(output);
  });

  it("should handle single word input", () => {
    const input = "typescript";
    const output = "Typescript";
    expect(capitalizeWords(input)).toBe(output);
  });

  it("should handle empty string input", () => {
    const input = "";
    const output = "";
    expect(capitalizeWords(input)).toBe(output);
  });

  it("should handle multiple spaces between words", () => {
    const input = "hello   world";
    const output = "Hello   World";
    expect(capitalizeWords(input)).toBe(output);
  });

  it("should handle words with mixed casing", () => {
    const input = "hElLo WoRLd";
    const output = "Hello World";
    expect(capitalizeWords(input)).toBe(output);
  });

  it("should handle words with special characters", () => {
    const input = "hello-world";
    const output = "Hello-world";
    expect(capitalizeWords(input)).toBe(output);
  });
});
