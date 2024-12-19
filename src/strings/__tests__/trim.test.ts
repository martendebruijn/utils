import { describe, it, expect } from "vitest";
import { trim } from "../trim";

describe("trim", () => {
  it("should remove leading and trailing whitespace", () => {
    expect(trim("  hello  ")).toBe("hello");
  });

  it("should return the same string if there is no leading or trailing whitespace", () => {
    expect(trim("hello")).toBe("hello");
  });

  it("should handle empty strings", () => {
    expect(trim("")).toBe("");
  });

  it("should handle strings with only whitespace", () => {
    expect(trim("   ")).toBe("");
  });

  it("should not remove internal whitespace", () => {
    expect(trim("  hello world  ")).toBe("hello world");
  });
});
