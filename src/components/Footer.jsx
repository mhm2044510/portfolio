export function Footer() {
  return (
    <footer
      className="border-t mt-10 py-8"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="max-w-[1120px] mx-auto px-7 flex flex-wrap items-center justify-between gap-3 relative z-10">
        <p
          className="text-[12.5px]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-faint)",
          }}
        >
          © 2026 Mahmoud Nababteh · Amman, Jordan
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/mahmoudnababteh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12.5px] transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-dim)",
            }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mahmoud-nababteh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12.5px] transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-dim)",
            }}
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="text-[12.5px] transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-dim)",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
