export function ProjectCard({ project = [] }) {
  return (
    <div
      className="rounded-[10px] border p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "var(--color-bg-panel)",
        borderColor: project.highlighted
          ? "var(--color-copper-dim)"
          : "var(--color-line)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[11px]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-copper)",
          }}
        >
          {project.index}
        </span>
        {project.badge && (
          <span
            className="text-[10px] px-2 py-0.5 rounded border"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-copper)",
              background: "rgba(217, 130, 43, 0.1)",
              borderColor: "var(--color-copper-dim)",
            }}
          >
            {project.badge}
          </span>
        )}
      </div>
      <h3
        className="text-[15px] mb-2 flex-grow"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text)",
        }}
      >
        {project.title}
      </h3>
      <p
        className="text-[13px] mb-4"
        style={{ color: "var(--color-text-dim)" }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-[4px] border"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-teal)",
              background: "rgba(53, 208, 192, 0.08)",
              borderColor: "var(--color-teal-dim)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
