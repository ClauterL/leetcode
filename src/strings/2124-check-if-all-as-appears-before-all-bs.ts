/**
 * @problem 2124. Check If All as Appears before All Bs
 * @url https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
 * @difficulty easy
 * @rating 1201
 * @topic strings
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   The string is invalid iff the pattern 'ba' occurs somewhere. So: !s.includes('ba'). Or scan with a 'seen b' flag.
 */
export function checkString(s: string): boolean {
  return !s.includes("ba");
}
