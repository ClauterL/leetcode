/**
 * @problem 1365. How Many Numbers Are Smaller Than the Current Number
 * @url https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * @difficulty easy
 * @rating 1152
 * @topic counting
 * @date 2026-10-03
 * @time O(n + 101)
 * @space O(101)
 *
 * Approach:
 *   Values are 0..100, so counting sort: count[v] = occurrences, then prefix-sum so that
 *   prefix[v] = how many values are < v. Answer for x is prefix[x]. Beats the O(n^2) double loop and the O(n log n) sort.
 */
export function smallerNumbersThanCurrent(nums: number[]): number[] {
  const count = new Array<number>(102).fill(0);
  for (const x of nums) count[x + 1]!++;
  for (let v = 1; v < 102; v++) count[v]! += count[v - 1]!;
  return nums.map(x => count[x]!);
}
