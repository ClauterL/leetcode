/**
 * @problem 2215. Find the Difference of Two Arrays
 * @url https://leetcode.com/problems/find-the-difference-of-two-arrays/
 * @difficulty easy
 * @rating 1207
 * @topic hashing
 * @date 2026-10-03
 * @time O(n+m)
 * @space O(n+m)
 *
 * Approach:
 *   Two Sets. Answer[0] = elements of set1 not in set2, answer[1] = the reverse. Sets also deduplicate for free.
 */
export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const a = new Set(nums1), b = new Set(nums2);
  return [[...a].filter(x => !b.has(x)), [...b].filter(x => !a.has(x))];
}
