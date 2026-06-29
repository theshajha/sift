import { z } from "zod";

export const InboundCandidate = z.object({
  id: z.string(),
  name: z.string(),
  contact: z.string().default(""),
  roleAppliedFor: z.string().default(""),
  message: z.string().default(""),
  resumeText: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  links: z.array(z.string().url()).default([]),
  source: z.string(),
  receivedAt: z.string().default(""),
});
export type InboundCandidate = z.infer<typeof InboundCandidate>;
