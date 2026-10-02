import { groupAnagrams } from "./0049-group-anagrams";

const norm = (g: string[][]) => g.map(x => [...x].sort()).sort((a, b) => a.join().localeCompare(b.join()));

describe("49. Group Anagrams", () => {
  it("example 1", () => {
    expect(norm(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])))
      .toEqual(norm([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]));
  });
  it("example 2 (empty string)", () => expect(groupAnagrams([""])).toEqual([[""]]));
  it("example 3 (single)", () => expect(groupAnagrams(["a"])).toEqual([["a"]]));
});
