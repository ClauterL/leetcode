import { replaceElements } from "./1299-replace-elements-with-greatest-element-on-right-side";

describe("1299. Replace Elements with Greatest Element on Right Side", () => {
it("example 1", () => expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]));
it("example 2", () => expect(replaceElements([400])).toEqual([-1]));
});
