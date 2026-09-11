export function SkillGroupCard({ group }) {
  return (
    <div
      className="relative rounded-[10px] p-6 border"
      style={{
        background: "var(--color-bg-panel)",
        borderColor: "var(--color-line)",
      }}
    >
      <span
        className="absolute top-3.5 right-4 text-[11px]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-text-faint)",
        }}
      >
        {group.tag}
      </span>
      <h3
        className="flex items-center gap-2.5 text-base mb-4"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text)",
        }}
      >
        <span
          className="inline-block w-2.5 h-2.5 rounded-[2px] flex-shrink-0"
          style={{
            background: "var(--color-copper)",
            boxShadow: "rgba(217, 130, 43, 0.6) 0px 0px 8px",
          }}
        />
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-[12.5px] px-3 py-1.5 rounded-[6px] border"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-dim)",
              background: "var(--color-bg-panel-2)",
              borderColor: "var(--color-line)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
