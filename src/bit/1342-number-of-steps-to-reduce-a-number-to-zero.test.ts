import { numberOfSteps } from "./1342-number-of-steps-to-reduce-a-number-to-zero";

describe("1342. Number of Steps to Reduce a Number to Zero", () => {
it("example 1", () => expect(numberOfSteps(14)).toBe(6));
it("example 2", () => expect(numberOfSteps(8)).toBe(4));
it("example 3", () => expect(numberOfSteps(123)).toBe(12));
it("zero", () => expect(numberOfSteps(0)).toBe(0));
});
