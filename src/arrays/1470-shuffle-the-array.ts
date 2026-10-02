/**
 * @problem 1470. Shuffle the Array
 * @url https://leetcode.com/problems/shuffle-the-array/
 * @difficulty easy
 * @rating 1120
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Interleave the two halves: for i in 0..n-1 push nums[i] then nums[n+i].
 */
export function shuffle(nums: number[], n: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(nums[i]!, nums[n + i]!);
  return out;
}
