/**
 * @problem 2485. Find the Pivot Integer
 * @url https://leetcode.com/problems/find-the-pivot-integer/
 * @difficulty easy
 * @rating 1207
 * @topic math
 * @date 2026-10-03
 * @time O(1)
 * @space O(1)
 *
 * Approach:
 *   Need 1+..+x == x+..+n, i.e. x(x+1)/2 == (n(n+1)/2) - x(x-1)/2  =>  x^2 = n(n+1)/2.
 *   So x = sqrt(total); valid iff it is an integer. (Linear scan with prefix sums also passes.)
 */
export function pivotInteger(n: number): number {
  const total = (n * (n + 1)) / 2;
  const x = Math.round(Math.sqrt(total));
  return x * x === total ? x : -1;
}
