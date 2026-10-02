import { balancedStringSplit } from "./1221-split-a-string-in-balanced-strings";

describe("1221. Split a String in Balanced Strings", () => {
it("example 1", () => expect(balancedStringSplit("RLRRLLRLRL")).toBe(4));
it("example 2", () => expect(balancedStringSplit("RLRRRLLRLL")).toBe(2));
it("example 3", () => expect(balancedStringSplit("LLLLRRRR")).toBe(1));
});
