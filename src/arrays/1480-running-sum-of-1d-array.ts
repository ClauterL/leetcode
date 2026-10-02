/**
 * @problem 1480. Running Sum of 1d Array
 * @url https://leetcode.com/problems/running-sum-of-1d-array/
 * @difficulty easy
 * @rating 1104
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(1) extra (output reused)
 *
 * Approach:
 *   Prefix sum: each element becomes itself plus the previous running total. Can be done in place.
 */
export function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) nums[i]! += nums[i - 1]!;
  return nums;
}
