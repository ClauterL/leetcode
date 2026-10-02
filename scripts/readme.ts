/** Regenerate the solutions table in README.md from @-tags in src/**.ts */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

type Row = { id: number; title: string; url: string; difficulty: string; topic: string; date: string; time: string; space: string; file: string };

function walk(dir: string, out: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".ts") && !p.endsWith(".test.ts")) out.push(p);
  }
  return out;
}
const tag = (src: string, t: string) => src.match(new RegExp(`@${t}\\s+(.*)`))?.[1]?.trim() ?? "";

const rows: Row[] = walk("src").map(file => {
  const s = readFileSync(file, "utf8");
  const prob = tag(s, "problem");
  const m = prob.match(/^(\d+)\.\s*(.*)$/);
  return { id: Number(m?.[1] ?? 0), title: m?.[2] ?? prob, url: tag(s, "url"), difficulty: tag(s, "difficulty"), topic: tag(s, "topic"), date: tag(s, "date"), time: tag(s, "time"), space: tag(s, "space"), file: file.replace(/\\/g, "/") };
}).sort((a, b) => a.id - b.id);

const count = (d: string) => rows.filter(r => r.difficulty === d).length;
const table = [
  "| # | Problem | Difficulty | Topic | Time | Space | Date |",
  "|---|---------|------------|-------|------|-------|------|",
  ...rows.map(r => `| ${r.id} | [${r.title}](${r.url}) · [code](${r.file}) | ${r.difficulty} | ${r.topic} | ${r.time} | ${r.space} | ${r.date} |`),
].join("\n");
const stats = `**${rows.length} solved** — Easy ${count("easy")} · Medium ${count("medium")} · Hard ${count("hard")}`;

const readme = readFileSync("README.md", "utf8");
const out = readme
  .replace(/<!-- stats -->[\s\S]*?<!-- \/stats -->/, `<!-- stats -->\n${stats}\n<!-- /stats -->`)
  .replace(/<!-- table -->[\s\S]*?<!-- \/table -->/, `<!-- table -->\n${table}\n<!-- /table -->`);
writeFileSync("README.md", out);
console.log(`README updated: ${rows.length} problems`);
