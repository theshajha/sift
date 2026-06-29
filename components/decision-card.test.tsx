import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DecisionCard } from "./decision-card";

const entry = {
  candidate: { id: "ada", name: "Ada Lovelace", contact: "", roleAppliedFor: "", message: "", links: [], source: "resume:ada.md", receivedAt: "" },
  fit: 87,
  bucket: "maybe" as const,
  reason: "Rebuilt a payments pipeline on a small team.",
  context: [],
  preparedBy: ["screener"] as const,
  status: "pending" as const,
};

describe("DecisionCard", () => {
  it("shows the rank, the candidate name, the fit score, and the one-line reason", () => {
    render(<DecisionCard entry={entry as any} rank={1} />);
    expect(screen.getByText("1.")).toBeInTheDocument();
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
    expect(screen.getByText("87 fit")).toBeInTheDocument();
    expect(screen.getByText(/payments pipeline/)).toBeInTheDocument();
  });
});
