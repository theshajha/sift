import { z } from "zod";

export const InboundCandidate = z.object({
  id: z.string(),
  name: z.string(),
  contact: z.string(),
  roleAppliedFor: z.string(),
  message: z.string(),
  resumeText: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  links: z.array(z.string().url()).default([]),
  source: z.string(),
  receivedAt: z.string(),
});
export type InboundCandidate = z.infer<typeof InboundCandidate>;
