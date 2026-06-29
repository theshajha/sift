import { cpSync, existsSync } from "node:fs";
import { Preferences } from "./schema/preferences";

export function buildPreferences(a: { mode: "draft" | "send"; research: boolean; gmail: boolean }): Preferences {
  return Preferences.parse({
    send: a.mode === "send",
    research: a.research,
    adapters: a.gmail ? ["file", "gmail"] : ["file"],
  });
}

export function scaffoldYours(srcDir: string, destDir: string): boolean {
  if (existsSync(destDir)) return false;
  cpSync(srcDir, destDir, { recursive: true });
  return true;
}
