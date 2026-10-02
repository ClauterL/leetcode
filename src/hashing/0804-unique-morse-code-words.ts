/**
 * @problem 804. Unique Morse Code Words
 * @url https://leetcode.com/problems/unique-morse-code-words/
 * @difficulty easy
 * @rating 1307
 * @topic hashing
 * @date 2026-10-03
 * @time O(total chars)
 * @space O(n)
 *
 * Approach:
 *   Map each word to its Morse concatenation via the table and count distinct strings with a Set.
 */
const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

export function uniqueMorseRepresentations(words: string[]): number {
  const seen = new Set<string>();
  for (const w of words) {
    let code = "";
    for (let i = 0; i < w.length; i++) code += MORSE[w.charCodeAt(i) - 97];
    seen.add(code);
  }
  return seen.size;
}
