export function SectionHeading({ children }) {
  return (
    <h2
      className="mt-3 mb-10 text-[clamp(28px,4vw,40px)]"
      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
    >
      {children}
    </h2>
  );
}
