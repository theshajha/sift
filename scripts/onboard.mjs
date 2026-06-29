import { createInterface } from "node:readline/promises";
import { writeFileSync, existsSync, cpSync } from "node:fs";
import { join } from "node:path";

function scaffoldYours(srcDir, destDir) {
  if (existsSync(destDir)) return false;
  cpSync(srcDir, destDir, { recursive: true });
  return true;
}

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = async (q, d) => (await rl.question(`${q}${d ? ` (${d})` : ""}: `)) || d;

(async () => {
  console.log("\nSift onboarding. This writes to yours/ only; pull updates anytime without conflicts.\n");
  const created = scaffoldYours(join(process.cwd(), "yours.example"), join(process.cwd(), "yours"));
  console.log(
    created
      ? "Created yours/ from the templates, with a set of sample resumes so you can try it right away."
      : "yours/ already exists, leaving it alone.",
  );

  const role = await ask("In a sentence or two, who are you looking for? (blank keeps the sample role)", "");
  if (role.trim()) {
    writeFileSync(join(process.cwd(), "yours", "role.md"), `# Who I'm looking for\n\n${role.trim()}\n`);
    console.log("Saved to yours/role.md.");
  }

  if (!existsSync(".env.local")) writeFileSync(".env.local", "AI_GATEWAY_API_KEY=\n");

  console.log("\nDone. The sample resumes are already in yours/inbound/. Run: npx eve dev, then type: run");
  console.log("When you are ready, clear yours/inbound/ and drop in your own resumes (PDF or text).\n");
  await rl.close();
})();
