/**
 * @problem 1394. Find Lucky Integer in an Array
 * @url https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * @difficulty easy
 * @rating 1118
 * @topic hashing
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Count frequencies in a Map, then take the largest value whose frequency equals the value itself; -1 if none.
 */
export function findLucky(arr: number[]): number {
  const freq = new Map<number, number>();
  for (const x of arr) freq.set(x, (freq.get(x) ?? 0) + 1);
  let best = -1;
  for (const [v, c] of freq) if (v === c && v > best) best = v;
  return best;
}
