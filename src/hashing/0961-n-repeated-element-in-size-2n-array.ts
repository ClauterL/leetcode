/**
 * @problem 961. N Repeated Element in Size 2n Array
 * @url https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @difficulty easy
 * @rating 1161
 * @topic hashing
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Only one value repeats, so the first value seen twice is the answer. A Set of seen values finds it.
 */
export function repeatedNTimes(nums: number[]): number {
  const seen = new Set<number>();
  for (const x of nums) { if (seen.has(x)) return x; seen.add(x); }
  return -1;
}
