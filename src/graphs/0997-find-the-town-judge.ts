/**
 * @problem 997. Find the Town Judge
 * @url https://leetcode.com/problems/find-the-town-judge/
 * @difficulty easy
 * @rating 1201
 * @topic graphs
 * @date 2026-10-03
 * @time O(n + t)
 * @space O(n)
 *
 * Approach:
 *   Treat trust as a directed graph. score[v] = indegree - outdegree. The judge is the only node with
 *   score n-1 (trusted by everyone else, trusts nobody). One array suffices: +1 for trusted, -1 for truster.
 */
export function findJudge(n: number, trust: number[][]): number {
  const score = new Array<number>(n + 1).fill(0);
  for (const [a, b] of trust) { score[a!]!--; score[b!]!++; }
  for (let v = 1; v <= n; v++) if (score[v] === n - 1) return v;
  return -1;
}
