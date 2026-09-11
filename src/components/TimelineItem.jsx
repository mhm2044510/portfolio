import { Tag } from "./Tag";
export function TimelineItem({ item }) {
  const accent =
    item.color === "copper" ? "rgb(217, 130, 43)" : "rgb(53, 208, 192)";
  const accentBg =
    item.color === "copper"
      ? "rgba(217, 130, 43, 0.094)"
      : "rgba(53, 208, 192, 0.094)";
  const accentBorder =
    item.color === "copper"
      ? "rgba(217, 130, 43, 0.267)"
      : "rgba(53, 208, 192, 0.267)";
  const shadow =
    item.color === "copper"
      ? "rgba(217, 130, 43, 0.333) 0px 0px 10px"
      : "rgba(53, 208, 192, 0.333) 0px 0px 10px";

  return (
    <div className="relative md:pl-14 group">
      <div
        className="absolute left-0 top-4 w-[30px] h-[30px] rounded-full border-2 hidden md:flex items-center justify-center"
        style={{
          background: "var(--color-bg)",
          borderColor: accent,
          boxShadow: shadow,
        }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
      </div>
      <div
        className="rounded-[10px] border p-6 transition-all duration-200"
        style={{
          background: "var(--color-bg-panel)",
          borderColor: "var(--color-line)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <span
              className="inline-block text-[11px] px-2 py-0.5 rounded mb-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: accent,
                background: accentBg,
                border: `1px solid ${accentBorder}`,
              }}
            >
              {item.type}
            </span>
            <h3
              className="text-[18px] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
              }}
            >
              {item.title}
            </h3>
            <p
              className="text-[13px] mt-0.5"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-text-faint)",
              }}
            >
              {item.org}
            </p>
          </div>
          <span
            className="text-[12px] flex-shrink-0 px-2.5 py-1 rounded border"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-faint)",
              borderColor: "var(--color-line)",
              background: "var(--color-bg-panel-2)",
            }}
          >
            {item.date}
          </span>
        </div>
        <p
          className="text-[14px] leading-relaxed mb-4"
          style={{ color: "var(--color-text-dim)" }}
        >
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
