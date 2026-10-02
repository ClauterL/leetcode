import { rotateString } from "./0796-rotate-string";

describe("796. Rotate String", () => {
it("example 1", () => expect(rotateString("abcde", "cdeab")).toBe(true));
it("example 2", () => expect(rotateString("abcde", "abced")).toBe(false));
it("different length", () => expect(rotateString("ab", "abab")).toBe(false));
});
