export function ContactLinkRow({ link }) {
  const content = (
    <>
      <div
        className="w-10 h-10 flex-shrink-0 rounded-[8px] flex items-center justify-center text-sm font-semibold"
        style={{
          background: "var(--color-bg-panel-2)",
          color: "var(--color-teal)",
        }}
      >
        {link.icon}
      </div>
      <div>
        <div
          className="text-[11px] uppercase tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-faint)",
          }}
        >
          {link.label}
        </div>
        <div
          className="text-[14px] mt-0.5"
          style={{ color: "var(--color-text)" }}
        >
          {link.value}
        </div>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 p-4 rounded-[10px] border transition-all duration-150 hover:translate-x-1";
  const style = {
    background: "var(--color-bg-panel)",
    borderColor: "var(--color-line)",
  };

  if (!link.href) {
    return (
      <div className={className} style={style}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={link.href}
      className={className}
      style={style}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
