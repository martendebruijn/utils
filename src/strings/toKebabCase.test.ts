import { describe, it, expect } from "vitest";
import { toKebabCase } from "./toKebabCase";

describe("toKebabCase", () => {
  it("should convert camelCase to kebab-case", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world");
  });

  it("should convert spaces to hyphens", () => {
    expect(toKebabCase("Hello World")).toBe("hello-world");
  });

  it("should convert underscores to hyphens", () => {
    expect(toKebabCase("hello_world")).toBe("hello-world");
  });

  it("should convert mixed cases and separators to kebab-case", () => {
    expect(toKebabCase("Hello_World Test")).toBe("hello-world-test");
  });

  it("should handle empty strings", () => {
    expect(toKebabCase("")).toBe("");
  });

  it("should handle strings with only spaces", () => {
    expect(toKebabCase("   ")).toBe("");
  });

  it("should handle strings with only underscores", () => {
    expect(toKebabCase("___")).toBe("");
  });

  it("should handle strings with leading and trailing spaces", () => {
    expect(toKebabCase("  hello world  ")).toBe("hello-world");
  });

  it("should handle strings with leading and trailing underscores", () => {
    expect(toKebabCase("__hello_world__")).toBe("hello-world");
  });
});
