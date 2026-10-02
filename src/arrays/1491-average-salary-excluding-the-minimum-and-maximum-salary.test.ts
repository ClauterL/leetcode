import { average } from "./1491-average-salary-excluding-the-minimum-and-maximum-salary";

describe("1491. Average Salary Excluding the Minimum and Maximum Salary", () => {
it("example 1", () => expect(average([4000, 3000, 1000, 2000])).toBeCloseTo(2500));
it("example 2", () => expect(average([1000, 2000, 3000])).toBeCloseTo(2000));
});
