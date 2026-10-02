/**
 * @problem 1491. Average Salary Excluding the Minimum and Maximum Salary
 * @url https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 * @difficulty easy
 * @rating 1201
 * @topic arrays
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   One pass computing sum, min and max; answer (sum - min - max) / (n - 2).
 */
export function average(salary: number[]): number {
  let sum = 0, min = Infinity, max = -Infinity;
  for (const s of salary) { sum += s; if (s < min) min = s; if (s > max) max = s; }
  return (sum - min - max) / (salary.length - 2);
}
