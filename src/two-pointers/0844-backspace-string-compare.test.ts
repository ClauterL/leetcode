import { backspaceCompare } from "./0844-backspace-string-compare";

describe("844. Backspace String Compare", () => {
it("example 1", () => expect(backspaceCompare("ab#c", "ad#c")).toBe(true));
it("example 2", () => expect(backspaceCompare("ab##", "c#d#")).toBe(true));
it("example 3", () => expect(backspaceCompare("a#c", "b")).toBe(false));
it("different lengths after erase", () => expect(backspaceCompare("a##c", "#a#c")).toBe(true));
it("extra char", () => expect(backspaceCompare("bxj##tw", "bxj###tw")).toBe(false));
});
