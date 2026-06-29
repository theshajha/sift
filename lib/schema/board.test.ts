import { describe, it, expect } from "vitest";
import { Board, BoardEntry } from "./board";
import { Preferences, DEFAULT_PREFERENCES } from "./preferences";

describe("board schema", () => {
  it("defaults context and preparedBy to empty and status to pending", () => {
    const entry = BoardEntry.parse({
      candidate: {
        id: "abc", name: "Ada", contact: "ada@x.com", roleAppliedFor: "Eng",
        message: "hi", source: "file", receivedAt: "2026-06-29T00:00:00Z",
      },
      bucket: "maybe",
      reason: "Strong but light on backend.",
    });
    expect(entry.context).toEqual([]);
    expect(entry.preparedBy).toEqual([]);
    expect(entry.status).toBe("pending");
  });

  it("rejects an unknown bucket", () => {
    expect(() => Board.parse({ role: "Eng", generatedAt: "x", entries: [{ bucket: "nope" }] }))
      .toThrow();
  });
});

describe("preferences schema", () => {
  it("draft-only and file adapter by default", () => {
    const p = Preferences.parse({});
    expect(p.send).toBe(false);
    expect(p.adapters).toEqual(["file"]);
    expect(DEFAULT_PREFERENCES.research).toBe(true);
  });

  it("populates the full ink palette by default (not an empty object)", () => {
    expect(Preferences.parse({}).inks.screener).toBe("hsl(240 28% 50%)");
    expect(DEFAULT_PREFERENCES.inks.responder).toBe("hsl(315 30% 50%)");
  });
});
