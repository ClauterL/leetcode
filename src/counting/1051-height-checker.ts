/**
 * @problem 1051. Height Checker
 * @url https://leetcode.com/problems/height-checker/
 * @difficulty easy
 * @rating 1303
 * @topic counting
 * @date 2026-10-03
 * @time O(n + 100)
 * @space O(100)
 *
 * Approach:
 *   Compare with the sorted order and count mismatches. Heights are <= 100, so counting sort produces the
 *   expected order in linear time; a plain sort + compare is also fine.
 */
export function heightChecker(heights: number[]): number {
  const cnt = new Array<number>(101).fill(0);
  for (const h of heights) cnt[h]!++;
  let mismatches = 0, h = 0;
  for (const actual of heights) {
    while (cnt[h] === 0) h++;
    if (actual !== h) mismatches++;
    cnt[h]!--;
  }
  return mismatches;
}
