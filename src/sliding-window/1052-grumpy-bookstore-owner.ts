/**
 * @problem 1052. Grumpy Bookstore Owner
 * @url https://leetcode.com/problems/grumpy-bookstore-owner/
 * @difficulty medium
 * @rating 1418
 * @topic sliding-window
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Base = customers already satisfied (grumpy == 0). The secret technique recovers customers in one window
 *   of length `minutes` where grumpy == 1. Slide a fixed window over the "recoverable" values and take the best
 *   window gain; answer = base + bestGain.
 */
export function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let base = 0, gain = 0, best = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) base += customers[i]!;
    else gain += customers[i]!;
    if (i >= minutes && grumpy[i - minutes] === 1) gain -= customers[i - minutes]!;
    if (gain > best) best = gain;
  }
  return base + best;
}
