# LeetCode solutions — Claus Laikku

TypeScript solutions with unit tests. Each file documents the approach, time and space complexity, and the community difficulty rating (zerotrac) when the problem appeared in a contest.

- LeetCode profile: https://leetcode.com/u/clauterl/
- Website: https://laikku.com

<!-- stats -->
**56 solved** — Easy 47 · Medium 9 · Hard 0
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
| # | Problem | Difficulty | Rating | Topic | Time | Space | Date |
|---|---------|------------|--------|-------|------|-------|------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) · [code](src/hashing/0001-two-sum.ts) | easy |  | hashing | O(n) | O(n) | 2026-10-03 |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) · [code](src/stack/0020-valid-parentheses.ts) | easy |  | stack | O(n) | O(n) | 2026-10-03 |
| 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) · [code](src/hashing/0049-group-anagrams.ts) | medium |  | hashing | O(n·k)  (n words, k = max word length) | O(n·k) | 2026-10-03 |
| 88 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) · [code](src/arrays/0088-merge-sorted-array.ts) | easy |  | arrays | O(m+n) | O(1) | 2026-10-03 |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) · [code](src/arrays/0121-best-time-to-buy-and-sell-stock.ts) | easy |  | arrays | O(n) | O(1) | 2026-10-03 |
| 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) · [code](src/two-pointers/0125-valid-palindrome.ts) | easy |  | two-pointers | O(n) | O(1) | 2026-10-03 |
| 771 | [Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/) · [code](src/hashing/0771-jewels-and-stones.ts) | easy | 1164 | hashing | O(j + s) | O(j) | 2026-10-03 |
| 796 | [Rotate String](https://leetcode.com/problems/rotate-string/) · [code](src/strings/0796-rotate-string.ts) | easy | 1167 | strings | O(n) | O(n) | 2026-10-03 |
| 804 | [Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/) · [code](src/hashing/0804-unique-morse-code-words.ts) | easy | 1307 | hashing | O(total chars) | O(n) | 2026-10-03 |
| 841 | [Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/) · [code](src/graphs/0841-keys-and-rooms.ts) | medium | 1412 | graphs | O(V + E) | O(V) | 2026-10-03 |
| 844 | [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/) · [code](src/two-pointers/0844-backspace-string-compare.ts) | easy | 1227 | two-pointers | O(n+m) | O(1) | 2026-10-03 |
| 941 | [Valid Mountain Array](https://leetcode.com/problems/valid-mountain-array/) · [code](src/two-pointers/0941-valid-mountain-array.ts) | easy | 1208 | two-pointers | O(n) | O(1) | 2026-10-03 |
| 961 | [N Repeated Element in Size 2n Array](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/) · [code](src/hashing/0961-n-repeated-element-in-size-2n-array.ts) | easy | 1161 | hashing | O(n) | O(n) | 2026-10-03 |
| 973 | [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) · [code](src/heap/0973-k-closest-points-to-origin.ts) | medium | 1213 | heap | O(n log n) | O(n) | 2026-10-03 |
| 977 | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/) · [code](src/two-pointers/0977-squares-of-a-sorted-array.ts) | easy | 1129 | two-pointers | O(n) | O(n) | 2026-10-03 |
| 997 | [Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/) · [code](src/graphs/0997-find-the-town-judge.ts) | easy | 1201 | graphs | O(n + t) | O(n) | 2026-10-03 |
| 1021 | [Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/) · [code](src/stack/1021-remove-outermost-parentheses.ts) | easy | 1311 | stack | O(n) | O(n) | 2026-10-03 |
| 1051 | [Height Checker](https://leetcode.com/problems/height-checker/) · [code](src/counting/1051-height-checker.ts) | easy | 1303 | counting | O(n + 100) | O(100) | 2026-10-03 |
| 1052 | [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/) · [code](src/sliding-window/1052-grumpy-bookstore-owner.ts) | medium | 1418 | sliding-window | O(n) | O(1) | 2026-10-03 |
| 1108 | [Defanging an Ip Address](https://leetcode.com/problems/defanging-an-ip-address/) · [code](src/strings/1108-defanging-an-ip-address.ts) | easy | 1084 | strings | O(n) | O(n) | 2026-10-03 |
| 1137 | [N Th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/) · [code](src/dp/1137-n-th-tribonacci-number.ts) | easy | 1142 | dp | O(n) | O(1) | 2026-10-03 |
| 1221 | [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/) · [code](src/greedy/1221-split-a-string-in-balanced-strings.ts) | easy | 1219 | greedy | O(n) | O(1) | 2026-10-03 |
| 1281 | [Subtract the Product and Sum of Digits of an Integer](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/) · [code](src/math/1281-subtract-the-product-and-sum-of-digits-of-an-integer.ts) | easy | 1141 | math | O(log n) | O(1) | 2026-10-03 |
| 1295 | [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/) · [code](src/math/1295-find-numbers-with-even-number-of-digits.ts) | easy | 1139 | math | O(n log m) | O(1) | 2026-10-03 |
| 1299 | [Replace Elements with Greatest Element on Right Side](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/) · [code](src/arrays/1299-replace-elements-with-greatest-element-on-right-side.ts) | easy | 1219 | arrays | O(n) | O(1) extra | 2026-10-03 |
| 1338 | [Reduce Array Size to the Half](https://leetcode.com/problems/reduce-array-size-to-the-half/) · [code](src/greedy/1338-reduce-array-size-to-the-half.ts) | medium | 1303 | greedy | O(n log n) | O(n) | 2026-10-03 |
| 1342 | [Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/) · [code](src/bit/1342-number-of-steps-to-reduce-a-number-to-zero.ts) | easy | 1163 | bit | O(log n) | O(1) | 2026-10-03 |
| 1343 | [Number of Sub Arrays of Size K and Average Greater Than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) · [code](src/sliding-window/1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold.ts) | medium | 1317 | sliding-window | O(n) | O(1) | 2026-10-03 |
| 1351 | [Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) · [code](src/binary-search/1351-count-negative-numbers-in-a-sorted-matrix.ts) | easy | 1139 | binary-search | O(m+n) | O(1) | 2026-10-03 |
| 1365 | [How Many Numbers Are Smaller Than the Current Number](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/) · [code](src/counting/1365-how-many-numbers-are-smaller-than-the-current-number.ts) | easy | 1152 | counting | O(n + 101) | O(101) | 2026-10-03 |
| 1394 | [Find Lucky Integer in an Array](https://leetcode.com/problems/find-lucky-integer-in-an-array/) · [code](src/hashing/1394-find-lucky-integer-in-an-array.ts) | easy | 1118 | hashing | O(n) | O(n) | 2026-10-03 |
| 1413 | [Minimum Value to Get Positive Step by Step Sum](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/) · [code](src/prefix-sum/1413-minimum-value-to-get-positive-step-by-step-sum.ts) | easy | 1212 | prefix-sum | O(n) | O(1) | 2026-10-03 |
| 1464 | [Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) · [code](src/arrays/1464-maximum-product-of-two-elements-in-an-array.ts) | easy | 1121 | arrays | O(n) | O(1) | 2026-10-03 |
| 1470 | [Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/) · [code](src/arrays/1470-shuffle-the-array.ts) | easy | 1120 | arrays | O(n) | O(n) | 2026-10-03 |
| 1480 | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) · [code](src/arrays/1480-running-sum-of-1d-array.ts) | easy | 1104 | arrays | O(n) | O(1) extra (output reused) | 2026-10-03 |
| 1491 | [Average Salary Excluding the Minimum and Maximum Salary](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/) · [code](src/arrays/1491-average-salary-excluding-the-minimum-and-maximum-salary.ts) | easy | 1201 | arrays | O(n) | O(1) | 2026-10-03 |
| 1512 | [Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/) · [code](src/hashing/1512-number-of-good-pairs.ts) | easy | 1160 | hashing | O(n) | O(n) | 2026-10-03 |
| 1561 | [Maximum Number of Coins You Can Get](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/) · [code](src/greedy/1561-maximum-number-of-coins-you-can-get.ts) | medium | 1405 | greedy | O(n log n) | O(1) extra | 2026-10-03 |
| 1588 | [Sum of All Odd Length Subarrays](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/) · [code](src/math/1588-sum-of-all-odd-length-subarrays.ts) | easy | 1408 | math | O(n) | O(1) | 2026-10-03 |
| 1688 | [Count of Matches in Tournament](https://leetcode.com/problems/count-of-matches-in-tournament/) · [code](src/math/1688-count-of-matches-in-tournament.ts) | easy | 1203 | math | O(1) | O(1) | 2026-10-03 |
| 1700 | [Number of Students Unable to Eat Lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/) · [code](src/counting/1700-number-of-students-unable-to-eat-lunch.ts) | easy | 1404 | counting | O(n) | O(1) | 2026-10-03 |
| 1704 | [Determine If String Halves Are Alike](https://leetcode.com/problems/determine-if-string-halves-are-alike/) · [code](src/strings/1704-determine-if-string-halves-are-alike.ts) | easy | 1207 | strings | O(n) | O(1) | 2026-10-03 |
| 1710 | [Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/) · [code](src/greedy/1710-maximum-units-on-a-truck.ts) | easy | 1309 | greedy | O(n log n) | O(1) extra | 2026-10-03 |
| 1748 | [Sum of Unique Elements](https://leetcode.com/problems/sum-of-unique-elements/) · [code](src/hashing/1748-sum-of-unique-elements.ts) | easy | 1228 | hashing | O(n) | O(n) | 2026-10-03 |
| 1768 | [Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/) · [code](src/two-pointers/1768-merge-strings-alternately.ts) | easy | 1166 | two-pointers | O(n+m) | O(n+m) | 2026-10-03 |
| 1790 | [Check If One String Swap Can Make Strings Equal](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/) · [code](src/strings/1790-check-if-one-string-swap-can-make-strings-equal.ts) | easy | 1300 | strings | O(n) | O(1) | 2026-10-03 |
| 1822 | [Sign of the Product of an Array](https://leetcode.com/problems/sign-of-the-product-of-an-array/) · [code](src/math/1822-sign-of-the-product-of-an-array.ts) | easy | 1209 | math | O(n) | O(1) | 2026-10-03 |
| 1832 | [Check If the Sentence is Pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram/) · [code](src/hashing/1832-check-if-the-sentence-is-pangram.ts) | easy | 1166 | hashing | O(n) | O(1) | 2026-10-03 |
| 1877 | [Minimize Maximum Pair Sum in Array](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/) · [code](src/greedy/1877-minimize-maximum-pair-sum-in-array.ts) | medium | 1301 | greedy | O(n log n) | O(1) extra (sort) | 2026-10-03 |
| 1920 | [Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/) · [code](src/arrays/1920-build-array-from-permutation.ts) | easy | 1160 | arrays | O(n) | O(n) | 2026-10-03 |
| 1929 | [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/) · [code](src/arrays/1929-concatenation-of-array.ts) | easy | 1132 | arrays | O(n) | O(n) | 2026-10-03 |
| 1991 | [Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/) · [code](src/prefix-sum/1991-find-the-middle-index-in-array.ts) | easy | 1302 | prefix-sum | O(n) | O(1) | 2026-10-03 |
| 2124 | [Check If All as Appears before All Bs](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/) · [code](src/strings/2124-check-if-all-as-appears-before-all-bs.ts) | easy | 1201 | strings | O(n) | O(1) | 2026-10-03 |
| 2215 | [Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays/) · [code](src/hashing/2215-find-the-difference-of-two-arrays.ts) | easy | 1207 | hashing | O(n+m) | O(n+m) | 2026-10-03 |
| 2225 | [Find Players with Zero or One Losses](https://leetcode.com/problems/find-players-with-zero-or-one-losses/) · [code](src/hashing/2225-find-players-with-zero-or-one-losses.ts) | medium | 1316 | hashing | O(n log n) | O(n) | 2026-10-03 |
| 2485 | [Find the Pivot Integer](https://leetcode.com/problems/find-the-pivot-integer/) · [code](src/math/2485-find-the-pivot-integer.ts) | easy | 1207 | math | O(1) | O(1) | 2026-10-03 |
<!-- /table -->
