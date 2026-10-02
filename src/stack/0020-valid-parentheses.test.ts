import { isValid } from "./0020-valid-parentheses";

describe("20. Valid Parentheses", () => {
  it("example 1", () => expect(isValid("()")).toBe(true));
  it("example 2", () => expect(isValid("()[]{}")).toBe(true));
  it("example 3", () => expect(isValid("(]")).toBe(false));
  it("example 4", () => expect(isValid("([])")).toBe(true));
  it("unclosed", () => expect(isValid("((")).toBe(false));
  it("closer first", () => expect(isValid("]")).toBe(false));
});
