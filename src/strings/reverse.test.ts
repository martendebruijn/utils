import { describe, it, expect } from "vitest";
import { reverse } from "./reverse";

describe("reverse", () => {
  it("should reverse a regular string", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  it("should reverse a string with spaces", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });

  it("should reverse a string with special characters", () => {
    expect(reverse("!@#")).toBe("#@!");
  });

  it("should return an empty string when input is empty", () => {
    expect(reverse("")).toBe("");
  });

  it("should reverse a string with numbers", () => {
    expect(reverse("12345")).toBe("54321");
  });
});
