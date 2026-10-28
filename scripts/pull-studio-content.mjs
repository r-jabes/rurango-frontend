/**
 * Pull published portfolio projects from Rurango Studio into
 * src/content/cms-projects.generated.json
 *
 * Env (from process env or web/.env.local):
 *   STUDIO_CONTENT_URL
 *   STUDIO_CONTENT_TOKEN  (must match Studio CMS_CONTENT_TOKEN)
 */
import { existsSync, readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, "..");

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(path.join(webRoot, ".env.local"));
loadEnvFile(path.join(webRoot, ".env"));

const outPath = path.join(webRoot, "src", "content", "cms-projects.generated.json");

const url =
  process.env.STUDIO_CONTENT_URL?.trim() ||
  "http://localhost:3001/api/public/content/projects";
const token = process.env.STUDIO_CONTENT_TOKEN?.trim();

if (!token) {
  console.error(
    "STUDIO_CONTENT_TOKEN is required. Set it in web/.env.local (same value as Studio CMS_CONTENT_TOKEN).",
  );
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
