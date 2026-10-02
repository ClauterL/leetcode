/**
 * @problem 1299. Replace Elements with Greatest Element on Right Side
 * @url https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @difficulty easy
 * @rating 1219
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(1) extra
 *
 * Approach:
 *   Scan from the right carrying the running maximum; write it before updating it. Last element becomes -1.
 */
export function replaceElements(arr: number[]): number[] {
  let mx = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i]!;
    arr[i] = mx;
    if (cur > mx) mx = cur;
  }
  return arr;
}
