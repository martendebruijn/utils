import { describe, it, expect } from "vitest";
import { toPascalCase } from "./toPascalCase";

describe("toPascalCase", () => {
  it("should convert snake_case to PascalCase", () => {
    expect(toPascalCase("hello_world")).toBe("HelloWorld");
  });

  it("should convert kebab-case to PascalCase", () => {
    expect(toPascalCase("foo-bar")).toBe("FooBar");
  });

  it("should convert space separated string to PascalCase", () => {
    expect(toPascalCase("example string")).toBe("ExampleString");
  });

  it("should handle mixed delimiters", () => {
    expect(toPascalCase("foo_bar-baz")).toBe("FooBarBaz");
  });

  it("should handle single word", () => {
    expect(toPascalCase("word")).toBe("Word");
  });

  it("should handle empty string", () => {
    expect(toPascalCase("")).toBe("");
  });

  it("should handle already PascalCase string", () => {
    expect(toPascalCase("AlreadyPascalCase")).toBe("AlreadyPascalCase");
  });

  it("should handle string with numbers", () => {
    expect(toPascalCase("string_with_123_numbers")).toBe(
      "StringWith123Numbers",
    );
  });
});
