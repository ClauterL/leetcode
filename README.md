# LeetCode solutions — Claus Laikku

TypeScript solutions with unit tests. Each file documents the approach, time and space complexity.

- LeetCode profile: https://leetcode.com/u/clauterl/
- Website: https://laikku.com

<!-- stats -->
**6 solved** — Easy 5 · Medium 1 · Hard 0
<!-- /stats -->

## Workflow

```bash
npm install
npm run new -- 1 two-sum arrays easy   # scaffold src/arrays/0001-two-sum.ts + test
npm test                               # run all tests
npm run readme                         # regenerate the table below
```

Topics (folders under `src/`): `arrays`, `strings`, `hashing`, `two-pointers`, `sliding-window`, `stack`, `linked-list`, `trees`, `graphs`, `heap`, `binary-search`, `dp`, `greedy`, `math`, `bit`.

## Solutions

<!-- table -->
| # | Problem | Difficulty | Topic | Time | Space | Date |
|---|---------|------------|-------|------|-------|------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) · [code](src/hashing/0001-two-sum.ts) | easy | hashing | O(n) | O(n) | 2026-10-03 |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) · [code](src/stack/0020-valid-parentheses.ts) | easy | stack | O(n) | O(n) | 2026-10-03 |
| 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) · [code](src/hashing/0049-group-anagrams.ts) | medium | hashing | O(n·k)  (n words, k = max word length) | O(n·k) | 2026-10-03 |
| 88 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) · [code](src/arrays/0088-merge-sorted-array.ts) | easy | arrays | O(m+n) | O(1) | 2026-10-03 |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) · [code](src/arrays/0121-best-time-to-buy-and-sell-stock.ts) | easy | arrays | O(n) | O(1) | 2026-10-03 |
| 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) · [code](src/two-pointers/0125-valid-palindrome.ts) | easy | two-pointers | O(n) | O(1) | 2026-10-03 |
<!-- /table -->
