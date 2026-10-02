import { uniqueMorseRepresentations } from "./0804-unique-morse-code-words";

describe("804. Unique Morse Code Words", () => {
it("example 1", () => expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toBe(2));
it("example 2", () => expect(uniqueMorseRepresentations(["a"])).toBe(1));
});
