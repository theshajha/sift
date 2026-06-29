import { defineTool } from "eve/tools";
import { z } from "zod";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { extractText, getDocumentProxy } from "unpdf";
import { yoursDir } from "@/lib/yours";
import { InboundCandidate } from "@/lib/schema/inbound";

const URL_RE = /\bhttps?:\/\/[^\s"')]+/g;
const RESUME_EXT = /\.(pdf|txt|md|markdown)$/i;

async function readResume(path: string): Promise<string> {
  if (/\.pdf$/i.test(path)) {
    const buf = readFileSync(path);
    const pdf = await getDocumentProxy(new Uint8Array(buf));
    const { text } = await extractText(pdf, { mergePages: true });
    return Array.isArray(text) ? text.join("\n") : text;
  }
  return readFileSync(path, "utf8");
}

export async function ingestResumes(_input: Record<string, never>): Promise<{ candidates: InboundCandidate[] }> {
  const inboundDir = join(yoursDir(), "inbound");
  if (!existsSync(inboundDir)) return { candidates: [] };
  const candidates: InboundCandidate[] = [];
  for (const file of readdirSync(inboundDir).sort()) {
    if (!RESUME_EXT.test(file)) continue;
    let text = "";
    try {
      text = await readResume(join(inboundDir, file));
    } catch {
      continue; // a single unreadable file must not stop the run
    }
    const links = Array.from(new Set(text.match(URL_RE) ?? []));
    candidates.push(InboundCandidate.parse({
      id: createHash("sha1").update(file).digest("hex").slice(0, 12),
      name: file.replace(RESUME_EXT, "").replace(/[-_]/g, " "), // placeholder; the agent reads the real name from the text
      resumeText: text.slice(0, 12000),
      links,
      source: `resume:${file}`,
    }));
  }
  return { candidates };
}

export default defineTool({
  description: "Read every resume in yours/inbound/ (PDF, text, or markdown) and return each candidate's resume text. Rank these against the role from read_yours. The name field is a placeholder from the filename, so read the real name out of the resume text.",
  inputSchema: z.object({}),
  execute: ingestResumes,
});
