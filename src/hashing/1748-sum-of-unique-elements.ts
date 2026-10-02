/**
 * @problem 1748. Sum of Unique Elements
 * @url https://leetcode.com/problems/sum-of-unique-elements/
 * @difficulty easy
 * @rating 1228
 * @topic hashing
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Count occurrences, sum the keys whose count is exactly 1.
 */
export function sumOfUnique(nums: number[]): number {
  const cnt = new Map<number, number>();
  for (const x of nums) cnt.set(x, (cnt.get(x) ?? 0) + 1);
  let sum = 0;
  for (const [v, c] of cnt) if (c === 1) sum += v;
  return sum;
}
