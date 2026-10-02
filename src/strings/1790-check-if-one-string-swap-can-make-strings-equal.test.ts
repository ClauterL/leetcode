import { areAlmostEqual } from "./1790-check-if-one-string-swap-can-make-strings-equal";

describe("1790. Check If One String Swap Can Make Strings Equal", () => {
it("example 1", () => expect(areAlmostEqual("bank", "kanb")).toBe(true));
it("example 2", () => expect(areAlmostEqual("attack", "defend")).toBe(false));
it("example 3", () => expect(areAlmostEqual("kelb", "kelb")).toBe(true));
it("one difference", () => expect(areAlmostEqual("abcd", "abce")).toBe(false));
});
