export function CertificateCard({ cert }) {
  const iconBg =
    cert.iconColor === "teal"
      ? "rgba(53, 208, 192, 0.12)"
      : "rgba(217, 130, 43, 0.12)";
  const iconColor =
    cert.iconColor === "teal" ? "var(--color-teal)" : "var(--color-copper)";

  return (
    <div
      className="rounded-[10px] border p-6 flex gap-5 items-start transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "var(--color-bg-panel)",
        borderColor: "var(--color-line)",
      }}
    >
      <div
        className="w-11 h-11 rounded-[8px] flex items-center justify-center flex-shrink-0 text-lg"
        style={{ background: iconBg, color: iconColor }}
      >
        {cert.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className="text-[15px] font-semibold leading-snug"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
            }}
          >
            {cert.title}
          </h3>
          {cert.active && (
            <span
              className="text-[10px] px-2 py-0.5 rounded border flex-shrink-0"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-teal)",
                background: "rgba(53, 208, 192, 0.1)",
                borderColor: "var(--color-teal-dim)",
              }}
            >
              Active
            </span>
          )}
        </div>
        <p
          className="text-[13px] mb-1"
          style={{ color: "var(--color-text-dim)" }}
        >
          {cert.subtitle}
        </p>
        <p
          className="text-[12px]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-faint)",
          }}
        >
          {cert.meta}
        </p>
      </div>
    </div>
  );
}
