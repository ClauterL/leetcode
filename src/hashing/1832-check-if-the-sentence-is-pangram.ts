/**
 * @problem 1832. Check If the Sentence is Pangram
 * @url https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * @difficulty easy
 * @rating 1166
 * @topic hashing
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   A Set of the letters has size 26 iff every letter appears. Bitmask variant: OR 1<<(c-'a'), compare with (1<<26)-1.
 */
export function checkIfPangram(sentence: string): boolean {
  return new Set(sentence).size === 26;
}
