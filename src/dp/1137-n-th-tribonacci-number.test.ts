import { tribonacci } from "./1137-n-th-tribonacci-number";

describe("1137. N Th Tribonacci Number", () => {
it("example 1", () => expect(tribonacci(4)).toBe(4));
it("example 2", () => expect(tribonacci(25)).toBe(1389537));
it("base cases", () => { expect(tribonacci(0)).toBe(0); expect(tribonacci(1)).toBe(1); expect(tribonacci(2)).toBe(1); });
});
