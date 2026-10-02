/**
 * @problem 1822. Sign of the Product of an Array
 * @url https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * @difficulty easy
 * @rating 1209
 * @topic math
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Never multiply (overflow); any zero -> 0, otherwise the sign flips once per negative number.
 */
export function arraySign(nums: number[]): number {
  let sign = 1;
  for (const x of nums) { if (x === 0) return 0; if (x < 0) sign = -sign; }
  return sign;
}
