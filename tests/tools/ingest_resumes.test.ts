import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { ingestResumes } from "@/agent/tools/ingest_resumes";

let dir: string;
beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), "sift-"));
  process.env.SIFT_YOURS_DIR = dir;
  mkdirSync(join(dir, "inbound"), { recursive: true });
  writeFileSync(join(dir, "inbound", "ada-lovelace.md"), "# Ada Lovelace\nBackend engineer. Rebuilt the payments pipeline. https://github.com/ada");
  writeFileSync(join(dir, "inbound", "notes.csv"), "name,role\nignore,me"); // not a resume extension
});
afterEach(() => rmSync(dir, { recursive: true, force: true }));

describe("ingest_resumes", () => {
  it("reads markdown/text resumes, extracts links, ignores non-resume files", async () => {
    const { candidates } = await ingestResumes({});
    expect(candidates).toHaveLength(1);
    expect(candidates[0].resumeText).toContain("payments pipeline");
    expect(candidates[0].links).toContain("https://github.com/ada");
    expect(candidates[0].source).toBe("resume:ada-lovelace.md");
  });
});
