/**
 * @problem 125. Valid Palindrome
 * @url https://leetcode.com/problems/valid-palindrome/
 * @difficulty easy
 * @topic two-pointers
 * @date 2026-10-03
 * @time O(n)
 * @space O(1)
 *
 * Approach:
 *   - Two pointers from both ends. Skip non-alphanumeric characters, compare
 *     lower-cased characters, stop at the first mismatch.
 */
const isAlnum = (c: string) => /[a-z0-9]/i.test(c);

export function isPalindrome(s: string): boolean {
  let l = 0, r = s.length - 1;
  while (l < r) {
    while (l < r && !isAlnum(s[l]!)) l++;
    while (l < r && !isAlnum(s[r]!)) r--;
    if (s[l]!.toLowerCase() !== s[r]!.toLowerCase()) return false;
    l++; r--;
  }
  return true;
}
