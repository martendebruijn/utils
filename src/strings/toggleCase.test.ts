import { describe, it, expect } from "vitest";
import { toggleCase } from "./toggleCase";

describe("toggleCase", () => {
  it("should toggle the case of each character in the string", () => {
    expect(toggleCase("Hello World")).toBe("hELLO wORLD");
    expect(toggleCase("JavaScript")).toBe("jAVAsCRIPT");
    expect(toggleCase("")).toBe("");
    expect(toggleCase("123")).toBe("123");
    expect(toggleCase("aBcDeFg")).toBe("AbCdEfG");
  });

  it("should handle strings with special characters", () => {
    expect(toggleCase("!@#")).toBe("!@#");
    expect(toggleCase("Hello@123")).toBe("hELLO@123");
  });

  it("should handle strings with only uppercase characters", () => {
    expect(toggleCase("HELLO")).toBe("hello");
  });

  it("should handle strings with only lowercase characters", () => {
    expect(toggleCase("hello")).toBe("HELLO");
  });
});
