// This file runs ONLY on the server (never sent to client bundle)
import type { PageContextServer } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(_pageContext: PageContextServer) {
  return {
    renderedAt: new Date().toISOString(),
    runtime: "Node.js (server)",
    nodeVersion: process.version,
  };
}
