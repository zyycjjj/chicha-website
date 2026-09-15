import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, resolve, sep } from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";

import app from "./server/server.js";

const deploymentDirectory = dirname(fileURLToPath(import.meta.url));
const clientDirectory = resolve(deploymentDirectory, "client");
const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 3100);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function staticFileFor(pathname) {
  let decodedPathname;
  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch {
    return undefined;
  }

  const candidate = resolve(clientDirectory, `.${decodedPathname}`);
  return candidate === clientDirectory || candidate.startsWith(`${clientDirectory}${sep}`)
    ? candidate
    : undefined;
}

async function sendStaticFile(response, pathname) {
  const filePath = staticFileFor(pathname);
  if (!filePath) return false;

  try {
    const info = await stat(filePath);
    if (!info.isFile()) return false;

    const extension = extname(filePath).toLowerCase();
    response.writeHead(200, {
      "content-length": info.size,
      "content-type": contentTypes[extension] ?? "application/octet-stream",
      "cache-control":
        pathname === "/sw.js"
          ? "no-cache, no-store, must-revalidate"
          : "public, max-age=31536000, immutable",
    });
    createReadStream(filePath).pipe(response);
    return true;
  } catch {
    return false;
  }
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return chunks.length === 0 ? undefined : Buffer.concat(chunks);
}

const server = createServer(async (request, response) => {
  const protocol = request.headers["x-forwarded-proto"] ?? "http";
  const hostHeader = request.headers.host ?? `${host}:${port}`;
  const url = new URL(request.url ?? "/", `${protocol}://${hostHeader}`);

  if (
    (request.method === "GET" || request.method === "HEAD") &&
    (await sendStaticFile(response, url.pathname))
  ) {
    return;
  }

  try {
    const body =
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await readRequestBody(request);
    const appRequest = new Request(url, {
      body,
      headers: request.headers,
      method: request.method,
    });
    const appResponse = await app.fetch(appRequest, {}, { waitUntil: () => {} });
    const headers = Object.fromEntries(appResponse.headers.entries());
    response.writeHead(appResponse.status, headers);

    if (!appResponse.body || request.method === "HEAD") {
      response.end();
      return;
    }

    Readable.fromWeb(appResponse.body).pipe(response);
  } catch (error) {
    console.error("Website request failed", error);
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end("Website request failed");
  }
});

server.listen(port, host, () => {
  console.log(`ChiCha Website listening on http://${host}:${port}`);
});
