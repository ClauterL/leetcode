/**
 * @problem 1338. Reduce Array Size to the Half
 * @url https://leetcode.com/problems/reduce-array-size-to-the-half/
 * @difficulty medium
 * @rating 1303
 * @topic greedy
 * @date 2026-10-03
 * @time O(n log n)
 * @space O(n)
 *
 * Approach:
 *   Count frequencies, sort counts descending, and greedily remove the most frequent values until
 *   at least n/2 elements are gone. Removing the biggest groups first is optimal by exchange.
 */
export function minSetSize(arr: number[]): number {
  const cnt = new Map<number, number>();
  for (const x of arr) cnt.set(x, (cnt.get(x) ?? 0) + 1);
  const counts = [...cnt.values()].sort((a, b) => b - a);
  let removed = 0, picked = 0;
  for (const c of counts) { removed += c; picked++; if (removed * 2 >= arr.length) break; }
  return picked;
}
