export function Tag({ children }) {
  return (
    <span
      className="text-[11px] px-2.5 py-1 rounded-[5px] border"
      style={{
        fontFamily: "var(--font-mono)",
        color: "var(--color-teal)",
        background: "rgba(53, 208, 192, 0.08)",
        borderColor: "var(--color-teal-dim)",
      }}
    >
      {children}
    </span>
  );
}
