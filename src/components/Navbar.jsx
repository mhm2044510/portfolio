export function Navbar({ NAV_LINKS = [] }) {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(10, 12, 16, 0.88)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--color-line)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-7 flex items-center justify-between h-[68px] relative z-10">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[17px] font-bold"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full animate-pulse-dot"
            style={{
              background: "var(--color-copper)",
              boxShadow: "0 0 10px var(--color-copper)",
            }}
          />
          Mahmoud Nababteh
        </a>
        <ul
          className="hidden md:flex gap-1 list-none m-0 p-0 text-[13px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link px-3.5 py-2 rounded-[6px] transition-all duration-150 block ${
                  link.href === "#contact" ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5"
            style={{ background: "var(--color-text)" }}
          />
          <span
            className="block w-5 h-0.5"
            style={{ background: "var(--color-text)" }}
          />
          <span
            className="block w-5 h-0.5"
            style={{ background: "var(--color-text)" }}
          />
        </button>
      </div>
    </nav>
  );
}
