/**
 * @problem 1920. Build Array from Permutation
 * @url https://leetcode.com/problems/build-array-from-permutation/
 * @difficulty easy
 * @rating 1160
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   ans[i] = nums[nums[i]] directly. (The O(1)-space follow-up encodes two values per slot with modulo n.)
 */
export function buildArray(nums: number[]): number[] {
  return nums.map(i => nums[i]!);
}
