import { describe, it, expect } from "vitest";
import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("should capitalize the first character of a lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should capitalize the first character and lowercase the rest of an uppercase string", () => {
    expect(capitalize("HELLO")).toBe("Hello");
  });

  it("should capitalize the first character and lowercase the rest of a mixed case string", () => {
    expect(capitalize("hElLo")).toBe("Hello");
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should handle single character strings", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("A")).toBe("A");
  });

  it("should handle strings with leading spaces", () => {
    expect(capitalize(" hello")).toBe(" hello");
  });

  it("should handle strings with special characters", () => {
    expect(capitalize("!hello")).toBe("!hello");
  });
});
