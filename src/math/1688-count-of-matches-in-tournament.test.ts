import { numberOfMatches } from "./1688-count-of-matches-in-tournament";

describe("1688. Count of Matches in Tournament", () => {
it("example 1", () => expect(numberOfMatches(7)).toBe(6));
it("example 2", () => expect(numberOfMatches(14)).toBe(13));
it("one team", () => expect(numberOfMatches(1)).toBe(0));
});
