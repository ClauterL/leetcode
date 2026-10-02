import { halvesAreAlike } from "./1704-determine-if-string-halves-are-alike";

describe("1704. Determine If String Halves Are Alike", () => {
it("example 1", () => expect(halvesAreAlike("book")).toBe(true));
it("example 2", () => expect(halvesAreAlike("textbook")).toBe(false));
it("uppercase vowels", () => expect(halvesAreAlike("AbCdEfGh")).toBe(true));
});
