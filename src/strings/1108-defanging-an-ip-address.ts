/**
 * @problem 1108. Defanging an Ip Address
 * @url https://leetcode.com/problems/defanging-an-ip-address/
 * @difficulty easy
 * @rating 1084
 * @topic strings
 * @date 2026-10-03
 * @time O(n)
 * @space O(n)
 *
 * Approach:
 *   Replace every '.' with '[.]'. A split/join or a global regex does it in one line; a manual loop would build the result character by character.
 */
export function defangIPaddr(address: string): string {
  return address.split(".").join("[.]");
}
