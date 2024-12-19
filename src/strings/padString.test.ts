import { describe, it, expect } from "vitest";
import { padString } from "./padString";

describe("padString", () => {
  it("should pad the string with spaces by default", () => {
    expect(padString("test", 10)).toBe("   test   ");
  });

  it("should pad the string with the specified character", () => {
    expect(padString("test", 10, "*")).toBe("***test***");
  });

  it("should return the original string if the length is less than or equal to the string length", () => {
    expect(padString("test", 4)).toBe("test");
    expect(padString("test", 2)).toBe("test");
  });

  it("should handle an empty string", () => {
    expect(padString("", 5)).toBe("     ");
  });

  it("should handle padding with multiple characters", () => {
    expect(padString("test", 10, "ab")).toBe("abatestaba");
  });

  it("should handle odd length padding", () => {
    expect(padString("test", 9)).toBe("  test   ");
  });
});
