/**
 * @problem 1688. Count of Matches in Tournament
 * @url https://leetcode.com/problems/count-of-matches-in-tournament/
 * @difficulty easy
 * @rating 1203
 * @topic math
 * @date 2026-10-03
 * @time O(1)
 * @space O(1)
 *
 * Approach:
 *   Every match eliminates exactly one team and one team survives, so there are n-1 matches. Simulation also works.
 */
export function numberOfMatches(n: number): number {
  return n - 1;
}
