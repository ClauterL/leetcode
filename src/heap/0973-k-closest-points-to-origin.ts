/**
 * @problem 973. K Closest Points to Origin
 * @url https://leetcode.com/problems/k-closest-points-to-origin/
 * @difficulty medium
 * @rating 1213
 * @topic heap
 * @date 2026-10-03
 * @time O(n log n)
 * @space O(n)
 *
 * Approach:
 *   Compare by squared distance (no sqrt needed). Simplest: sort by x^2+y^2 and take k.
 *   Interview follow-up: a max-heap of size k gives O(n log k); quickselect gives average O(n).
 */
export function kClosest(points: number[][], k: number): number[][] {
  const d = (p: number[]) => p[0]! * p[0]! + p[1]! * p[1]!;
  return [...points].sort((a, b) => d(a) - d(b)).slice(0, k);
}
