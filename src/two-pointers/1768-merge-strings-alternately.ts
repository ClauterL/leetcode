/**
 * @problem 1768. Merge Strings Alternately
 * @url https://leetcode.com/problems/merge-strings-alternately/
 * @difficulty easy
 * @rating 1166
 * @topic two-pointers
 * @date 2026-10-03
 * @time O(n+m)
 * @space O(n+m)
 *
 * Approach:
 *   Walk both strings with one index; append a char from each while available, then the tail of the longer one.
 */
export function mergeAlternately(word1: string, word2: string): string {
  const out: string[] = [];
  const n = Math.max(word1.length, word2.length);
  for (let i = 0; i < n; i++) {
    if (i < word1.length) out.push(word1[i]!);
    if (i < word2.length) out.push(word2[i]!);
  }
  return out.join("");
}
