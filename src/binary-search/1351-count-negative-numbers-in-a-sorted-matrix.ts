/**
 * @problem 1351. Count Negative Numbers in a Sorted Matrix
 * @url https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @difficulty easy
 * @rating 1139
 * @topic binary-search
 * @date 2026-10-03
 * @time O(m+n)
 * @space O(1)
 *
 * Approach:
 *   Rows and columns are non-increasing, so walk a staircase: start at the bottom-left; if the cell is negative
 *   the whole rest of the row is negative -> add it and move up; otherwise move right.
 */
export function countNegatives(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  let r = m - 1, c = 0, count = 0;
  while (r >= 0 && c < n) {
    if (grid[r]![c]! < 0) { count += n - c; r--; }
    else c++;
  }
  return count;
}
