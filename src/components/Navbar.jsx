import React, { useState } from "react";

export function Navbar({ NAV_LINKS = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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
          onClick={closeMenu}
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

        {/* Desktop nav */}
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

        {/* Burger button (mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 bg-transparent border-none cursor-pointer relative z-20"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300 ease-in-out"
            style={{
              background: "var(--color-text)",
              transform: isOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300 ease-in-out"
            style={{
              background: "var(--color-text)",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-all duration-300 ease-in-out"
            style={{
              background: "var(--color-text)",
              transform: isOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t"
        style={{
          maxHeight: isOpen ? "400px" : "0px",
          opacity: isOpen ? 1 : 0,
          borderColor: isOpen ? "var(--color-line)" : "transparent",
          background: "var(--color-bg)",
        }}
      >
        <ul
          className="flex flex-col gap-1 list-none m-0 px-5 py-4 text-[14px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`nav-link px-3.5 py-2.5 rounded-[6px] transition-all duration-150 block ${
                  link.href === "#contact" ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
