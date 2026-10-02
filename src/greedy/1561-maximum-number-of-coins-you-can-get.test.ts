import { maxCoins } from "./1561-maximum-number-of-coins-you-can-get";

describe("1561. Maximum Number of Coins You Can Get", () => {
it("example 1", () => expect(maxCoins([2, 4, 1, 2, 7, 8])).toBe(9));
it("example 2", () => expect(maxCoins([2, 4, 5])).toBe(4));
it("example 3", () => expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])).toBe(18));
});
