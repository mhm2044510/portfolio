export function Eyebrow({ children }) {
  return (
    <div
      className="flex items-center gap-2 text-xs uppercase tracking-widest"
      style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal)" }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{
          background: "var(--color-teal)",
          boxShadow: "0 0 8px var(--color-teal)",
        }}
      />
      {children}
    </div>
  );
}
