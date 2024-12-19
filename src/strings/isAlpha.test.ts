import { describe, it, expect } from "vitest";
import { isAlpha } from "./isAlpha";

describe("isAlpha", () => {
  it("should return true for a string with only alphabetic characters", () => {
    expect(isAlpha("abc")).toBe(true);
    expect(isAlpha("ABC")).toBe(true);
    expect(isAlpha("aBcDeF")).toBe(true);
  });

  it("should return false for a string with non-alphabetic characters", () => {
    expect(isAlpha("abc123")).toBe(false);
    expect(isAlpha("123")).toBe(false);
    expect(isAlpha("abc!")).toBe(false);
    expect(isAlpha("abc def")).toBe(false);
  });

  it("should return false for an empty string", () => {
    expect(isAlpha("")).toBe(false);
  });
});
