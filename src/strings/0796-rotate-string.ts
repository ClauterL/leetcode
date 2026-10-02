/**
 * @problem 796. Rotate String
 * @url https://leetcode.com/problems/rotate-string/
 * @difficulty easy
 * @rating 1167
 * @topic strings
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   goal is a rotation of s iff lengths match and goal is a substring of s+s (every rotation appears in the doubled string).
 */
export function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal);
}
