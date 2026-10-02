import { isPalindrome } from "./0125-valid-palindrome";

describe("125. Valid Palindrome", () => {
  it("example 1", () => expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true));
  it("example 2", () => expect(isPalindrome("race a car")).toBe(false));
  it("example 3 (only spaces)", () => expect(isPalindrome(" ")).toBe(true));
  it("digits and letters", () => expect(isPalindrome("0P")).toBe(false));
});
