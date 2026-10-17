/**
 * Pull published portfolio projects from Rurango Studio into
 * src/content/cms-projects.generated.json
 *
 * Env:
 *   STUDIO_CONTENT_URL  e.g. http://localhost:3001/api/public/content/projects
 *   STUDIO_CONTENT_TOKEN  shared secret (CMS_CONTENT_TOKEN on Studio)
 *
 * Static projects in projects.ts always win on slug conflicts.
 */
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "..",
  "src",
  "content",
  "cms-projects.generated.json",
);

const url =
  process.env.STUDIO_CONTENT_URL?.trim() ||
  "http://localhost:3001/api/public/content/projects";
const token = process.env.STUDIO_CONTENT_TOKEN?.trim();

if (!token) {
  console.error("STUDIO_CONTENT_TOKEN is required.");
  process.exit(1);
}

const response = await fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});

if (!response.ok) {
  const text = await response.text();
  console.error(`Pull failed (${response.status}): ${text}`);
  process.exit(1);
}

const payload = await response.json();
if (!payload || !Array.isArray(payload.projects)) {
  console.error("Unexpected response shape: expected { projects: [] }");
  process.exit(1);
}

const normalized = {
  version: payload.version ?? 1,
  generatedAt: payload.generatedAt ?? new Date().toISOString(),
  source: payload.source ?? "rurango-studio",
  projects: payload.projects,
};

await writeFile(outPath, `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
console.log(
  `Wrote ${normalized.projects.length} Studio project(s) to ${path.relative(process.cwd(), outPath)}`,
);
