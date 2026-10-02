/**
 * @problem 1295. Find Numbers with Even Number of Digits
 * @url https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * @difficulty easy
 * @rating 1139
 * @topic math
 * @date 2026-10-03
 * @time O(n log m)
 * @space O(1)
 *
 * Approach:
 *   Digit count of x is floor(log10 x)+1; count the numbers where that is even. String length works too.
 */
export function findNumbers(nums: number[]): number {
  let c = 0;
  for (const x of nums) if (String(x).length % 2 === 0) c++;
  return c;
}
