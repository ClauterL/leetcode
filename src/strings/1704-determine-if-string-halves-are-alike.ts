/**
 * @problem 1704. Determine If String Halves Are Alike
 * @url https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * @difficulty easy
 * @rating 1207
 * @topic strings
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Count vowels in the first half, subtract vowels in the second half; alike iff the balance is 0.
 */
const VOWELS = new Set("aeiouAEIOU");

export function halvesAreAlike(s: string): boolean {
  const half = s.length / 2;
  let bal = 0;
  for (let i = 0; i < s.length; i++) if (VOWELS.has(s[i]!)) bal += i < half ? 1 : -1;
  return bal === 0;
}
