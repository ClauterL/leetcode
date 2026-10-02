/**
 * @problem 1021. Remove Outermost Parentheses
 * @url https://leetcode.com/problems/remove-outermost-parentheses/
 * @difficulty easy
 * @rating 1311
 * @topic stack
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Track depth with a counter instead of a real stack. An opening paren at depth 0 and a closing paren
 *   returning to depth 0 are the outer ones, everything else is kept.
 */
export function removeOuterParentheses(s: string): string {
  let depth = 0, out = "";
  for (const c of s) {
    if (c === "(") { if (depth > 0) out += c; depth++; }
    else { depth--; if (depth > 0) out += c; }
  }
  return out;
}
