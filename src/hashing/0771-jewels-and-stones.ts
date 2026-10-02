/**
 * @problem 771. Jewels and Stones
 * @url https://leetcode.com/problems/jewels-and-stones/
 * @difficulty easy
 * @rating 1164
 * @topic hashing
 * @date 2026-10-03
 * @time O(j + s)
 * @space O(j)
 *
 * Approach:
 *   Put jewel characters in a Set, count stones that are in it.
 */
export function numJewelsInStones(jewels: string, stones: string): number {
  const J = new Set(jewels);
  let c = 0;
  for (const s of stones) if (J.has(s)) c++;
  return c;
}
