import { z } from "zod";
import { InboundCandidate } from "./inbound";

export const Bucket = z.enum(["worth_your_time", "maybe", "pass"]);
export type Bucket = z.infer<typeof Bucket>;

export const AgentId = z.enum(["screener", "researcher", "responder"]);
export type AgentId = z.infer<typeof AgentId>;

export const Draft = z.object({
  subject: z.string(),
  body: z.string(),
  tone: z.enum(["yes", "maybe", "no"]),
});
export type Draft = z.infer<typeof Draft>;

export const BoardEntry = z.object({
  candidate: InboundCandidate,
  fit: z.number().min(0).max(100).default(0),
  bucket: Bucket.default("maybe"),
  reason: z.string(),
  context: z.array(z.string()).default([]),
  draft: Draft.optional(),
  preparedBy: z.array(AgentId).default([]),
  status: z.enum(["pending", "approved", "skipped", "drafted", "sent"]).default("pending"),
});
export type BoardEntry = z.infer<typeof BoardEntry>;

export const Board = z.object({
  role: z.string(),
  generatedAt: z.string(),
  entries: z.array(BoardEntry).default([]),
});
export type Board = z.infer<typeof Board>;
