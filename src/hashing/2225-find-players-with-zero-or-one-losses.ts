/**
 * @problem 2225. Find Players with Zero or One Losses
 * @url https://leetcode.com/problems/find-players-with-zero-or-one-losses/
 * @difficulty medium
 * @rating 1316
 * @topic hashing
 * @date 2026-10-03
 * @time O(n log n)
 * @space O(n)
 *
 * Approach:
 *   Count losses per player in a Map (winners get an entry with 0 if unseen). Then collect keys with 0 and
 *   with 1 losses, sort each ascending.
 */
export function findWinners(matches: number[][]): number[][] {
  const losses = new Map<number, number>();
  for (const [w, l] of matches) {
    if (!losses.has(w!)) losses.set(w!, 0);
    losses.set(l!, (losses.get(l!) ?? 0) + 1);
  }
  const zero: number[] = [], one: number[] = [];
  for (const [p, c] of losses) { if (c === 0) zero.push(p); else if (c === 1) one.push(p); }
  return [zero.sort((a, b) => a - b), one.sort((a, b) => a - b)];
}
