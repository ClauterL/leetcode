/**
 * @problem 977. Squares of a Sorted Array
 * @url https://leetcode.com/problems/squares-of-a-sorted-array/
 * @difficulty easy
 * @rating 1129
 * @topic two-pointers
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   The largest square is at one of the two ends (most negative or most positive).
 *   Two pointers from both ends, fill the result from the back with the larger square.
 */
export function sortedSquares(nums: number[]): number[] {
  const n = nums.length, out = new Array<number>(n);
  let l = 0, r = n - 1;
  for (let k = n - 1; k >= 0; k--) {
    const ls = nums[l]! ** 2, rs = nums[r]! ** 2;
    if (ls > rs) { out[k] = ls; l++; } else { out[k] = rs; r--; }
  }
  return out;
}
