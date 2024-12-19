import { describe, it, expect } from "vitest";
import { replaceAll } from "./replaceAll";

describe("replaceAll", () => {
  it("replaces all occurrences of a substring within a string", () => {
    const result = replaceAll("hello world", "o", "a");
    expect(result).toBe("hella warld");
  });

  it("returns the original string if the search substring is not found", () => {
    const result = replaceAll("hello world", "x", "a");
    expect(result).toBe("hello world");
  });

  it("replaces all occurrences of a substring with an empty string", () => {
    const result = replaceAll("hello world", "o", "");
    expect(result).toBe("hell wrld");
  });

  it("replaces all occurrences of an empty substring with the replacement string", () => {
    const result = replaceAll("hello", "", "x");
    expect(result).toBe("hxexlxlxo");
  });

  it("handles an empty original string", () => {
    const result = replaceAll("", "a", "b");
    expect(result).toBe("");
  });

  it("handles replacing with a longer substring", () => {
    const result = replaceAll("hello world", "o", "ooo");
    expect(result).toBe("hellooo wooorld");
  });

  it("handles replacing with a shorter substring", () => {
    const result = replaceAll("hello world", "world", "w");
    expect(result).toBe("hello w");
  });
});
