import { checkIfPangram } from "./1832-check-if-the-sentence-is-pangram";

describe("1832. Check If the Sentence is Pangram", () => {
it("example 1", () => expect(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")).toBe(true));
it("example 2", () => expect(checkIfPangram("leetcode")).toBe(false));
});
