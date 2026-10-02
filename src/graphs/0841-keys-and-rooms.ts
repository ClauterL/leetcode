/**
 * @problem 841. Keys and Rooms
 * @url https://leetcode.com/problems/keys-and-rooms/
 * @difficulty medium
 * @rating 1412
 * @topic graphs
 * @date 2026-10-03
 * @time O(V + E)
 * @space O(V)
 *
 * Approach:
 *   Rooms are nodes, keys are directed edges. DFS/BFS from room 0 with a visited array; every room must be
 *   reached. Iterative stack avoids recursion depth issues.
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const seen = new Array<boolean>(rooms.length).fill(false);
  const stack = [0];
  seen[0] = true;
  let visited = 1;
  while (stack.length) {
    const r = stack.pop()!;
    for (const key of rooms[r]!) {
      if (!seen[key]) { seen[key] = true; visited++; stack.push(key); }
    }
  }
  return visited === rooms.length;
}
