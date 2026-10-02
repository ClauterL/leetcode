import { removeOuterParentheses } from "./1021-remove-outermost-parentheses";

describe("1021. Remove Outermost Parentheses", () => {
it("example 1", () => expect(removeOuterParentheses("(()())(())")).toBe("()()()"));
it("example 2", () => expect(removeOuterParentheses("(()())(())(()(()))")).toBe("()()()()(())"));
it("example 3", () => expect(removeOuterParentheses("()()")).toBe(""));
});
