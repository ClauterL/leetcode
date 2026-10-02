/**
 * @problem 1700. Number of Students Unable to Eat Lunch
 * @url https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 * @difficulty easy
 * @rating 1404
 * @topic counting
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   The queue order doesn't matter: as long as some student wants the top sandwich, it will be taken eventually.
 *   So count how many students want 0 and how many want 1, then walk the sandwich stack from the top; the first
 *   sandwich nobody wants blocks everything below it - the remaining students are the answer.
 */
export function countStudents(students: number[], sandwiches: number[]): number {
  const want = [0, 0];
  for (const s of students) want[s]!++;
  for (const s of sandwiches) {
    if (want[s] === 0) return want[1 - s]!;
    want[s]!--;
  }
  return 0;
}
