import { minStartValue } from "./1413-minimum-value-to-get-positive-step-by-step-sum";

describe("1413. Minimum Value to Get Positive Step by Step Sum", () => {
it("example 1", () => expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5));
it("example 2", () => expect(minStartValue([1, 2])).toBe(1));
it("example 3", () => expect(minStartValue([1, -2, -3])).toBe(5));
});
