import { describe, it, expect } from "vitest";
import { isNumeric } from "./isNumeric";

describe("isNumeric", () => {
  it("should return true for a string of digits", () => {
    expect(isNumeric("123456")).toBe(true);
  });

  it("should return false for a string with letters", () => {
    expect(isNumeric("123abc")).toBe(false);
  });

  it("should return false for an empty string", () => {
    expect(isNumeric("")).toBe(false);
  });

  it("should return false for a string with special characters", () => {
    expect(isNumeric("123!@#")).toBe(false);
  });

  it("should return false for a string with spaces", () => {
    expect(isNumeric("123 456")).toBe(false);
  });

  it("should return true for a string with leading zeros", () => {
    expect(isNumeric("00123")).toBe(true);
  });
});
