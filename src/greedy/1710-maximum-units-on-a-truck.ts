/**
 * @problem 1710. Maximum Units on a Truck
 * @url https://leetcode.com/problems/maximum-units-on-a-truck/
 * @difficulty easy
 * @rating 1309
 * @topic greedy
 * @date 2026-10-03
 * @time O(n log n)
 * @space O(1) extra
 *
 * Approach:
 *   Fractional-knapsack style greedy: sort box types by units per box descending and fill the truck from the best type until it is full.
 */
export function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1]! - a[1]!);
  let units = 0;
  for (const [count, perBox] of boxTypes) {
    const take = Math.min(count!, truckSize);
    units += take * perBox!;
    truckSize -= take;
    if (truckSize === 0) break;
  }
  return units;
}
