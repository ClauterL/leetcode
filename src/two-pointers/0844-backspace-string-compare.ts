/**
 * @problem 844. Backspace String Compare
 * @url https://leetcode.com/problems/backspace-string-compare/
 * @difficulty easy
 * @rating 1227
 * @topic two-pointers
 * @date 2026-10-03
 * @time O(n+m)
 * @space O(1)
 *
 * Approach:
 *   O(n) space: build each string with a stack (push char, pop on '#').
 *   O(1) space: walk both strings from the end, skipping characters consumed by '#' counts, and compare the next surviving chars.
 */
export function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1, j = t.length - 1, skipS = 0, skipT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) { if (s[i] === "#") { skipS++; i--; } else if (skipS) { skipS--; i--; } else break; }
    while (j >= 0) { if (t[j] === "#") { skipT++; j--; } else if (skipT) { skipT--; j--; } else break; }
    if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
    if ((i >= 0) !== (j >= 0)) return false;
    i--; j--;
  }
  return true;
}
