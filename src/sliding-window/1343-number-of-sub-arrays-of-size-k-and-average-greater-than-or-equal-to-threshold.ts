/**
 * @problem 1343. Number of Sub Arrays of Size K and Average Greater Than or Equal to Threshold
 * @url https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * @difficulty medium
 * @rating 1317
 * @topic sliding-window
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   Fixed-size sliding window: keep the sum of the current k elements, slide by adding the new element and
 *   removing the one that left. Compare sum >= k*threshold to avoid division.
 */
export function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const need = k * threshold;
  let sum = 0, count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]!;
    if (i >= k) sum -= arr[i - k]!;
    if (i >= k - 1 && sum >= need) count++;
  }
  return count;
}
