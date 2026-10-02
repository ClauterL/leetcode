/**
 * @problem 1221. Split a String in Balanced Strings
 * @url https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * @difficulty easy
 * @rating 1219
 * @topic greedy
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Greedy: keep a counter (+1 for R, -1 for L); every time it returns to 0 a balanced piece ends. Cutting as early as possible maximizes the count.
 */
export function balancedStringSplit(s: string): number {
  let bal = 0, parts = 0;
  for (const c of s) { bal += c === "R" ? 1 : -1; if (bal === 0) parts++; }
  return parts;
}
