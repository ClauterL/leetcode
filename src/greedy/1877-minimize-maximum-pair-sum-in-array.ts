/**
 * @problem 1877. Minimize Maximum Pair Sum in Array
 * @url https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 * @difficulty medium
 * @rating 1301
 * @topic greedy
 * @date 2026-10-03
 * @time O(n log n)
 * @space O(1) extra (sort)
 *
 * Approach:
 *   Sort and pair smallest with largest (two pointers inward). Exchange argument: pairing a small element with a
 *   large one keeps every pair sum as balanced as possible, so the maximum pair sum is minimized.
 */
export function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let best = 0;
  for (let l = 0, r = nums.length - 1; l < r; l++, r--) best = Math.max(best, nums[l]! + nums[r]!);
  return best;
}
