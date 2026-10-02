/**
 * @problem 1413. Minimum Value to Get Positive Step by Step Sum
 * @url https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 * @difficulty easy
 * @rating 1212
 * @topic prefix-sum
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Find the minimum prefix sum. The start value must lift it to at least 1: answer = max(1, 1 - minPrefix).
 */
export function minStartValue(nums: number[]): number {
  let run = 0, minPrefix = 0;
  for (const x of nums) { run += x; if (run < minPrefix) minPrefix = run; }
  return 1 - minPrefix;
}
