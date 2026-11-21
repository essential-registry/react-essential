#!/usr/bin/env node
/**
 * Scaffold a feature module.
 *
 *   pnpm gen:feature <name>
 *
 * Creates src/features/<name>/ with a public `index.ts` and a zod `schemas.ts`
 * (the source of the feature's types). Never overwrites existing files.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const name = process.argv[2];
if (!name || !/^[a-z][a-z0-9-]*$/.test(name)) {
  console.error(
    "gen:feature: pass a kebab-case name, e.g. `pnpm gen:feature billing`"
  );
  process.exit(1);
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "src", "features", name);
const pascal = name.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());

const files = {
  "index.ts": `export { type ${pascal}, ${name.replace(/-(\w)/g, (_, c) => c.toUpperCase())}Schema } from "./schemas";\n`,
  "schemas.ts": `import { z } from "zod";\n\nexport const ${name.replace(/-(\w)/g, (_, c) => c.toUpperCase())}Schema = z.object({\n  id: z.string(),\n});\n\nexport type ${pascal} = z.infer<typeof ${name.replace(/-(\w)/g, (_, c) => c.toUpperCase())}Schema>;\n`,
};

mkdirSync(dir, { recursive: true });
for (const [file, content] of Object.entries(files)) {
  const path = join(dir, file);
  if (existsSync(path)) {
    console.log(`skip   ${path} (exists)`);
    continue;
  }
  writeFileSync(path, content);
  console.log(`create ${path}`);
}
