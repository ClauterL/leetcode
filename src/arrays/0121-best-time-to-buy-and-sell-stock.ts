/**
 * @problem 121. Best Time to Buy and Sell Stock
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @difficulty easy
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   - One pass. Track the lowest price seen so far; at each day the best sale
 *     is price - minSoFar. Keep the maximum of those.
 */
export function maxProfit(prices: number[]): number {
  let min = Infinity, best = 0;
  for (const p of prices) {
    if (p < min) min = p;
    else if (p - min > best) best = p - min;
  }
  return best;
}
