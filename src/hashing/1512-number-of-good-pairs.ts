/**
 * @problem 1512. Number of Good Pairs
 * @url https://leetcode.com/problems/number-of-good-pairs/
 * @difficulty easy
 * @rating 1160
 * @topic hashing
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   When we see value x for the k-th time it forms k-1 new pairs with the earlier copies.
 *   So keep a count map and add seen[x] before incrementing.
 */
export function numIdenticalPairs(nums: number[]): number {
  const seen = new Map<number, number>();
  let pairs = 0;
  for (const x of nums) {
    const k = seen.get(x) ?? 0;
    pairs += k;
    seen.set(x, k + 1);
  }
  return pairs;
}
