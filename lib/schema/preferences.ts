import { z } from "zod";

// Full default palette. A nested `.default({})` would NOT apply inner field
// defaults in zod@4 (it stores the literal {}), so the parent default must be
// fully specified for `inks.screener` etc. to exist when inks is omitted.
const DEFAULT_INKS = {
  screener: "hsl(240 28% 50%)",
  researcher: "hsl(92 26% 34%)",
  responder: "hsl(315 30% 50%)",
};

export const Preferences = z.object({
  send: z.boolean().default(false),
  research: z.boolean().default(true),
  adapters: z.array(z.enum(["file", "gmail"])).default(["file"]),
  gmailLabel: z.string().default("INBOX"),
  inks: z.object({
    screener: z.string(),
    researcher: z.string(),
    responder: z.string(),
  }).default(DEFAULT_INKS),
});
export type Preferences = z.infer<typeof Preferences>;

export const DEFAULT_PREFERENCES: Preferences = Preferences.parse({});
