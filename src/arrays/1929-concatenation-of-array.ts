/**
 * @problem 1929. Concatenation of Array
 * @url https://leetcode.com/problems/concatenation-of-array/
 * @difficulty easy
 * @rating 1132
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Return the array followed by itself.
 */
export function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}
