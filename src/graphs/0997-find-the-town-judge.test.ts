import { findJudge } from "./0997-find-the-town-judge";

describe("997. Find the Town Judge", () => {
it("example 1", () => expect(findJudge(2, [[1, 2]])).toBe(2));
it("example 2", () => expect(findJudge(3, [[1, 3], [2, 3]])).toBe(3));
it("example 3", () => expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1));
it("single person", () => expect(findJudge(1, [])).toBe(1));
});
