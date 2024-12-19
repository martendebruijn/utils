import { describe, it, expect } from "vitest";
import { toCamelCase } from "./toCamelCase";

describe("toCamelCase", () => {
  it("should convert hyphen-separated words to camelCase", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
    expect(toCamelCase("my-variable-name")).toBe("myVariableName");
  });

  it("should convert underscore-separated words to camelCase", () => {
    expect(toCamelCase("hello_world")).toBe("helloWorld");
    expect(toCamelCase("my_variable_name")).toBe("myVariableName");
  });

  it("should handle mixed separators", () => {
    expect(toCamelCase("hello-world_and_universe")).toBe(
      "helloWorldAndUniverse",
    );
  });

  it("should return the same string if there are no separators", () => {
    expect(toCamelCase("helloworld")).toBe("helloworld");
  });

  it("should handle empty strings", () => {
    expect(toCamelCase("")).toBe("");
  });

  it("should handle strings with leading and trailing separators", () => {
    expect(toCamelCase("-hello-world-")).toBe("HelloWorld");
    expect(toCamelCase("_hello_world_")).toBe("HelloWorld");
  });
});
