/**
 * @problem 20. Valid Parentheses
 * @url https://leetcode.com/problems/valid-parentheses/
 * @difficulty easy
 * @topic stack
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   - Push the expected closing bracket for every opener. A closer must equal
 *     the top of the stack; otherwise invalid. Valid iff the stack ends empty.
 */
const PAIRS: Record<string, string> = { "(": ")", "[": "]", "{": "}" };

export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const c of s) {
    const close = PAIRS[c];
    if (close) stack.push(close);
    else if (stack.pop() !== c) return false;
  }
  return stack.length === 0;
}
