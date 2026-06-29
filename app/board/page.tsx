"use client";
import { useEffect, useState } from "react";
import type { Board } from "@/lib/schema/board";
import { DecisionCard } from "@/components/decision-card";

export default function BoardPage() {
  const [board, setBoard] = useState<Board | null>(null);
  useEffect(() => {
    fetch("/api/board").then((r) => r.json()).then(setBoard).catch(() => setBoard(null));
  }, []);

  const ranked = [...(board?.entries ?? [])].sort((a, b) => b.fit - a.fit);

  return (
    <main style={{ maxWidth: "56rem", margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: 600, margin: 0 }}>Sift</h1>
          <p style={{ color: "var(--muted-foreground)", marginTop: "0.25rem" }}>
            {board?.role ? board.role : "Spend more time talking to the right candidates."}
          </p>
        </div>
        <a href="/" style={{ color: "var(--primary)", fontSize: "0.875rem", whiteSpace: "nowrap" }}>Talk to Sift →</a>
      </div>

      {board && ranked.length === 0 && (
        <p style={{ fontFamily: "var(--serif)", marginTop: "2rem" }}>
          Drop resumes into <code>yours/inbound/</code>, then say <b>run</b> in the chat.
        </p>
      )}

      <section style={{ marginTop: "2rem" }}>
        {ranked.map((e, i) => (
          <DecisionCard key={e.candidate.id} entry={e} rank={i + 1} />
        ))}
      </section>

      <footer style={{ marginTop: "3rem", fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted-foreground)" }}>
        made by <a href="https://rwhq.io/sift" style={{ color: "var(--primary)" }}>Re:Work</a>. want the human version?
      </footer>
    </main>
  );
}
