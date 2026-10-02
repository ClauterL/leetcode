/**
 * @problem 49. Group Anagrams
 * @url https://leetcode.com/problems/group-anagrams/
 * @difficulty medium
 * @topic hashing
 * @date 2026-10-03
 * @time O(n·k)  (n words, k = max word length)
 * @space O(n·k)
 *
 * Approach:
 *   - Anagrams share the same letter counts, so build a 26-slot count key per
 *     word (avoids the O(k log k) sort) and group words by that key in a Map.
 */
export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const s of strs) {
    const counts = new Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) counts[s.charCodeAt(i) - 97]!++;
    const key = counts.join(",");
    const g = groups.get(key);
    if (g) g.push(s); else groups.set(key, [s]);
  }
  return [...groups.values()];
}
