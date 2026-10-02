/**
 * @problem 941. Valid Mountain Array
 * @url https://leetcode.com/problems/valid-mountain-array/
 * @difficulty easy
 * @rating 1208
 * @topic two-pointers
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Climb from the left while strictly increasing, then descend while strictly decreasing.
 *   Valid iff we ended at the last index and the peak is neither the first nor the last element.
 */
export function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  let i = 0;
  while (i + 1 < n && arr[i]! < arr[i + 1]!) i++;
  if (i === 0 || i === n - 1) return false;
  while (i + 1 < n && arr[i]! > arr[i + 1]!) i++;
  return i === n - 1;
}
