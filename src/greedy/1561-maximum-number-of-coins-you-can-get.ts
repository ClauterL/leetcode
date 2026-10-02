/**
 * @problem 1561. Maximum Number of Coins You Can Get
 * @url https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 * @difficulty medium
 * @rating 1405
 * @topic greedy
 * @date 2026-10-03
 * @time O(n log n)
 * @space O(1) extra
 *
 * Approach:
 *   Sort ascending. Bob always gets the smallest piles, so give him the n smallest. From the remaining 2n piles,
 *   form triples (big, me, bob) by walking from the top: Alice takes the largest, I take the second largest.
 *   That means I take every second pile starting at index n: piles[n], piles[n+2], ...
 */
export function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  const n = piles.length / 3;
  let sum = 0;
  for (let i = n; i < piles.length; i += 2) sum += piles[i]!;
  return sum;
}
