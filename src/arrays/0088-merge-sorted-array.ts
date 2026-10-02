/**
 * @problem 88. Merge Sorted Array
 * @url https://leetcode.com/problems/merge-sorted-array/
 * @difficulty easy
 * @topic arrays
 * @date 2026-10-03
 * @time O(m+n)
 * @space O(1)
 *
 * Approach:
 *   - nums1 has room at the end, so fill it from the back: compare the largest
 *     remaining elements of both arrays and write the bigger one to the end.
 *   - When nums2 runs out we are done; leftover nums1 elements are already in place.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i]! > nums2[j]!) nums1[k--] = nums1[i--]!;
    else nums1[k--] = nums2[j--]!;
  }
}
