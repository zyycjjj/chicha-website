import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const outputDirectory = resolve(projectDirectory, "dist");

await mkdir(outputDirectory, { recursive: true });
await cp(resolve(scriptDirectory, "serve.mjs"), resolve(outputDirectory, "serve.mjs"));
