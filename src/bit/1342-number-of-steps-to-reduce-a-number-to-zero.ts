/**
 * @problem 1342. Number of Steps to Reduce a Number to Zero
 * @url https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 * @difficulty easy
 * @rating 1163
 * @topic bit
 * @date 2026-10-03
 * @time O(log n)
 * @space O(1)
 *
 * Approach:
 *   Simulate: even -> divide by 2, odd -> subtract 1. Bit view: every 1-bit costs a subtraction and every bit
 *   except the highest costs a division, so answer = popcount + bitlength - 1.
 */
export function numberOfSteps(num: number): number {
  let steps = 0;
  while (num > 0) { num = num % 2 === 0 ? num / 2 : num - 1; steps++; }
  return steps;
}
