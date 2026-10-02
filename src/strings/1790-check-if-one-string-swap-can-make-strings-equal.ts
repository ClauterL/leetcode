/**
 * @problem 1790. Check If One String Swap Can Make Strings Equal
 * @url https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
 * @difficulty easy
 * @rating 1300
 * @topic strings
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Collect the indices where the strings differ. Valid iff there are 0 differences, or exactly 2 and
 *   they are each other's mirror (s1[i]==s2[j] && s1[j]==s2[i]). Any other count can't be fixed by one swap.
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
  const diff: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) { diff.push(i); if (diff.length > 2) return false; }
  }
  if (diff.length === 0) return true;
  if (diff.length !== 2) return false;
  const [i, j] = diff as [number, number];
  return s1[i] === s2[j] && s1[j] === s2[i];
}
