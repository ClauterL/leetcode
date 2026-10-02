/**
 * @problem 1991. Find the Middle Index in Array
 * @url https://leetcode.com/problems/find-the-middle-index-in-array/
 * @difficulty easy
 * @rating 1302
 * @topic prefix-sum
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Total sum once; then sweep keeping the left sum. At index i the right sum is total - left - nums[i];
 *   the first i where left == right is the answer.
 */
export function findMiddleIndex(nums: number[]): number {
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]!) return i;
    left += nums[i]!;
  }
  return -1;
}
