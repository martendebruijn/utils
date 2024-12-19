import { describe, it, expect } from "vitest";
import { toSnakeCase } from "./toSnakeCase";

describe("toSnakeCase", () => {
  it("should convert camelCase to snake_case", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
  });

  it("should convert space-separated words to snake_case", () => {
    expect(toSnakeCase("Hello World")).toBe("hello_world");
  });

  it("should convert hyphen-separated words to snake_case", () => {
    expect(toSnakeCase("foo-bar")).toBe("foo_bar");
  });

  it("should handle mixed cases and separators", () => {
    expect(toSnakeCase("Hello-World fooBar")).toBe("hello_world_foo_bar");
  });

  it("should handle strings with multiple spaces and hyphens", () => {
    expect(toSnakeCase("Hello   World---foo   bar")).toBe(
      "hello_world_foo_bar",
    );
  });

  it("should handle strings with no spaces or hyphens", () => {
    expect(toSnakeCase("helloworld")).toBe("helloworld");
  });

  it("should handle empty strings", () => {
    expect(toSnakeCase("")).toBe("");
  });

  it("should handle strings with special characters", () => {
    expect(toSnakeCase("Hello@World!")).toBe("hello@world!");
  });
});
