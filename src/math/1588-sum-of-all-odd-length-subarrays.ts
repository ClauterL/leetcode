/**
 * @problem 1588. Sum of All Odd Length Subarrays
 * @url https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 * @difficulty easy
 * @rating 1408
 * @topic math
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Contribution counting instead of enumerating subarrays. Element i appears in (i+1)*(n-i) subarrays
 *   (choices of left end * choices of right end); exactly ceil(that / 2) of them have odd length.
 *   Multiply each element by its odd-length count and sum. (O(n^2) prefix-sum enumeration also passes.)
 */
export function sumOddLengthSubarrays(arr: number[]): number {
  const n = arr.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    const all = (i + 1) * (n - i);
    total += arr[i]! * Math.ceil(all / 2);
  }
  return total;
}
