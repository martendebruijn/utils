import { describe, it, expect } from "vitest";
import { removeDuplicates } from "../removeDuplicates";

describe("removeDuplicates", () => {
  it("should remove duplicate characters from a string", () => {
    expect(removeDuplicates("aabbcc")).toBe("abc");
  });

  it("should return the same string if there are no duplicates", () => {
    expect(removeDuplicates("abc")).toBe("abc");
  });

  it("should handle an empty string", () => {
    expect(removeDuplicates("")).toBe("");
  });

  it("should handle a string with all identical characters", () => {
    expect(removeDuplicates("aaaa")).toBe("a");
  });

  it("should handle a string with mixed characters", () => {
    expect(removeDuplicates("aabbccddeeff")).toBe("abcdef");
  });

  it("should handle a string with special characters", () => {
    expect(removeDuplicates("a!a@b#b$c%c^")).toBe("a!@b#$c%^");
  });

  it("should handle a string with numbers", () => {
    expect(removeDuplicates("112233")).toBe("123");
  });
});
