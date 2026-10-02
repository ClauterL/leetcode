import { defangIPaddr } from "./1108-defanging-an-ip-address";

describe("1108. Defanging an Ip Address", () => {
it("example 1", () => expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1"));
it("example 2", () => expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0"));
});
