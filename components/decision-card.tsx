import type { BoardEntry } from "@/lib/schema/board";

export function DecisionCard({ entry, rank }: { entry: BoardEntry; rank?: number }) {
  return (
    <article style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem", marginBottom: "0.75rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
        <strong style={{ fontFamily: "var(--font-sans)" }}>
          {rank ? (
            <span style={{ color: "var(--muted-foreground)", marginRight: "0.5rem", fontVariantNumeric: "tabular-nums" }}>{`${rank}.`}</span>
          ) : null}
          {entry.candidate.name}
        </strong>
        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--primary)", whiteSpace: "nowrap" }}>
          {`${entry.fit} fit`}
        </span>
      </header>
      <p style={{ fontFamily: "var(--serif)", marginTop: "0.25rem" }}>{entry.reason}</p>
      {entry.context.length > 0 && (
        <ul style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", listStyle: "none", padding: 0, margin: "0.5rem 0 0" }}>
          {entry.context.map((c, i) => (
            <li key={i} style={{ fontSize: "0.75rem", border: "1px solid var(--border)", borderRadius: "9999px", padding: "0.1rem 0.6rem" }}>{c}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
