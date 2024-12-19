import { describe, it, expect } from "vitest";
import { truncate } from "./truncate";

describe("truncate", () => {
  it("should truncate a string that exceeds the specified length and append an ellipsis", () => {
    const result = truncate("Hello, world!", 5);
    expect(result).toBe("Hello...");
  });

  it("should return the original string if it does not exceed the specified length", () => {
    const result = truncate("Hello", 10);
    expect(result).toBe("Hello");
  });

  it("should handle an empty string", () => {
    const result = truncate("", 5);
    expect(result).toBe("");
  });

  it("should handle a length of 0", () => {
    const result = truncate("Hello, world!", 0);
    expect(result).toBe("...");
  });

  it("should handle a length equal to the string length", () => {
    const result = truncate("Hello", 5);
    expect(result).toBe("Hello");
  });
});
