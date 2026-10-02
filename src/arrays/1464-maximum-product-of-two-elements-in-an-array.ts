/**
 * @problem 1464. Maximum Product of Two Elements in an Array
 * @url https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 * @difficulty easy
 * @rating 1121
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Track the two largest values in one pass (no sort needed); answer is (max1-1)*(max2-1).
 */
export function maxProduct(nums: number[]): number {
  let a = 0, b = 0; // a >= b
  for (const x of nums) {
    if (x > a) { b = a; a = x; }
    else if (x > b) b = x;
  }
  return (a - 1) * (b - 1);
}
