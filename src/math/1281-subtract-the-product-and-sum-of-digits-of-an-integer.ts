/**
 * @problem 1281. Subtract the Product and Sum of Digits of an Integer
 * @url https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * @difficulty easy
 * @rating 1141
 * @topic math
 * @date 2026-10-03
 * @time O(log n)
 * @space O(1)
 *
 * Approach:
 *   Peel digits with n % 10 and n = floor(n/10); accumulate product and sum; return product - sum.
 */
export function subtractProductAndSum(n: number): number {
  let prod = 1, sum = 0;
  while (n > 0) { const d = n % 10; prod *= d; sum += d; n = Math.floor(n / 10); }
  return prod - sum;
}
