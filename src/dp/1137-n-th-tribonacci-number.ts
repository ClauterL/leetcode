/**
 * @problem 1137. N Th Tribonacci Number
 * @url https://leetcode.com/problems/n-th-tribonacci-number/
 * @difficulty easy
 * @rating 1142
 * @topic dp
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Like Fibonacci with three rolling variables: T0=0, T1=1, T2=1, Tn = Tn-1 + Tn-2 + Tn-3.
 */
export function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n < 3) return 1;
  let a = 0, b = 1, c = 1;
  for (let i = 3; i <= n; i++) [a, b, c] = [b, c, a + b + c];
  return c;
}
