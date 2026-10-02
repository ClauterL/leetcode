import { maxProfit } from "./0121-best-time-to-buy-and-sell-stock";

describe("121. Best Time to Buy and Sell Stock", () => {
  it("example 1", () => expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5));
  it("example 2 (decreasing)", () => expect(maxProfit([7, 6, 4, 3, 1])).toBe(0));
  it("single day", () => expect(maxProfit([5])).toBe(0));
  it("buy first day", () => expect(maxProfit([1, 2, 3, 4, 5])).toBe(4));
});
