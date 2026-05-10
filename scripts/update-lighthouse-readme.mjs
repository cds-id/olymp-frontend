import { readFile, writeFile } from "node:fs/promises";

const readmePath = "README.md";
const manifestPath = ".lighthouseci/manifest.json";
const start = "<!-- LIGHTHOUSE_REPORT_START -->";
const end = "<!-- LIGHTHOUSE_REPORT_END -->";

function percent(score) {
  if (typeof score !== "number") return "n/a";
  return `${Math.round(score * 100)}%`;
}

function status(score) {
  if (typeof score !== "number") return "⚪";
  if (score >= 0.9) return "🟢";
  if (score >= 0.5) return "🟡";
  return "🔴";
}

const [readme, manifestRaw] = await Promise.all([
  readFile(readmePath, "utf8"),
  readFile(manifestPath, "utf8"),
]);

const manifest = JSON.parse(manifestRaw);
const landing = manifest.find((entry) => entry.url?.endsWith("/")) ?? manifest[0];

if (!landing?.summary) {
  throw new Error("No Lighthouse summary found in .lighthouseci/manifest.json");
}

const summary = landing.summary;
const now = new Date().toISOString();
const commit = process.env.GITHUB_SHA ? process.env.GITHUB_SHA.slice(0, 7) : "local";
const runUrl = process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY && process.env.GITHUB_RUN_ID
  ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
  : "local";

const block = `${start}
## Lighthouse — Landing Page

Latest automated Lighthouse CI result for \`/\`.

| Category | Score |
| --- | ---: |
| ${status(summary.performance)} Performance | ${percent(summary.performance)} |
| ${status(summary.accessibility)} Accessibility | ${percent(summary.accessibility)} |
| ${status(summary["best-practices"])} Best Practices | ${percent(summary["best-practices"])} |
| ${status(summary.seo)} SEO | ${percent(summary.seo)} |

- URL: \`${landing.url ?? "/"}\`
- Updated: \`${now}\`
- Commit: \`${commit}\`
- Workflow: ${runUrl}
${end}`;

const nextReadme = readme.includes(start) && readme.includes(end)
  ? readme.replace(new RegExp(`${start}[\\s\\S]*?${end}`), block)
  : readme.replace("## CI — GitHub Actions", `${block}\n\n---\n\n## CI — GitHub Actions`);

await writeFile(readmePath, `${nextReadme.trimEnd()}\n`);
