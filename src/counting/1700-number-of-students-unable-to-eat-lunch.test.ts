import { countStudents } from "./1700-number-of-students-unable-to-eat-lunch";

describe("1700. Number of Students Unable to Eat Lunch", () => {
it("example 1", () => expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0));
it("example 2", () => expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3));
});
