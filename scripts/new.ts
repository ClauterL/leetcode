/**
 * Scaffold a new problem:  npm run new -- <id> <slug> <topic> <difficulty>
 * e.g.  npm run new -- 1 two-sum arrays easy
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [id, slug, topic = "misc", difficulty = "medium"] = process.argv.slice(2);
if (!id || !slug) {
  console.error("usage: npm run new -- <id> <slug> <topic> <easy|medium|hard>");
  process.exit(1);
}
const dir = join("src", topic);
mkdirSync(dir, { recursive: true });
const base = `${String(id).padStart(4, "0")}-${slug}`;
const fn = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const date = new Date().toISOString().slice(0, 10);

const impl = join(dir, `${base}.ts`);
const test = join(dir, `${base}.test.ts`);
if (existsSync(impl)) { console.error(`${impl} exists`); process.exit(1); }

writeFileSync(impl, `/**
 * @problem ${id}. ${slug.split("-").map(w => w[0]!.toUpperCase() + w.slice(1)).join(" ")}
 * @url https://leetcode.com/problems/${slug}/
 * @difficulty ${difficulty}
 * @topic ${topic}
 * @date ${date}
 * @time O(?)
 * @space O(?)
 *
 * Approach:
 *   -
 */
export function ${fn}(): void {
  // TODO
}
`);
writeFileSync(test, `import { ${fn} } from "./${base}";

describe("${id}. ${slug}", () => {
  it("example 1", () => {
    expect(${fn}()).toBeUndefined();
  });
});
`);
console.log(`created ${impl}\n        ${test}`);
