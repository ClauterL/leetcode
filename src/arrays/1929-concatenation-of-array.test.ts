import { getConcatenation } from "./1929-concatenation-of-array";

describe("1929. Concatenation of Array", () => {
it("example 1", () => expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]));
it("example 2", () => expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]));
});
