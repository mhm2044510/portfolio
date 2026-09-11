import { Eyebrow } from "./Eyebrow";
import { CircuitArt } from "./CircuitArt";
export function Hero({ STATS = [] }) {
  return (
    <section id="home" className="pt-24 pb-16 relative">
      <div className="max-w-[1120px] mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <Eyebrow>Open to new opportunities</Eyebrow>
            <h1
              className="mt-4 mb-2 leading-[1.08] text-[clamp(36px,5vw,58px)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Mahmoud Nababteh
            </h1>
            <div
              className="gradient-text text-[clamp(18px,2.5vw,26px)] mb-5 font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Mechatronics Engineer &amp; Software Developer
            </div>
            <div
              className="text-[13px] mb-6 tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-text-dim)",
              }}
            >
              Amman, Jordan · +962 781 844 266
            </div>
            <p
              className="max-w-[520px] text-[15px] leading-relaxed mb-8"
              style={{ color: "var(--color-text-dim)" }}
            >
              Mechatronics engineer with hands-on industry experience in
              full-stack web development and industrial automation. I bridge
              circuits and code — from embedded firmware and PLC systems to
              React apps and .NET APIs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-all hover:brightness-110 hover:-translate-y-px"
                style={{
                  fontFamily: "var(--font-mono)",
                  background:
                    "linear-gradient(135deg, var(--color-copper), #b8631f)",
                  color: "rgb(10, 12, 16)",
                }}
              >
                View Experience →
              </a>
              <a
                href="mailto:nababtehmahmoud5@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] border transition-all hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] hover:-translate-y-px"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--color-bg-panel)",
                  borderColor: "var(--color-line)",
                  color: "var(--color-text)",
                }}
              >
                ✉ Email Me
              </a>
              <a
                href="https://linkedin.com/in/mahmoud-nababteh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] border transition-all hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] hover:-translate-y-px"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--color-bg-panel)",
                  borderColor: "var(--color-line)",
                  color: "var(--color-text)",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
          <CircuitArt />
        </div>

        <div
          className="mt-16 grid grid-cols-3 border rounded-[10px] overflow-hidden"
          style={{ borderColor: "var(--color-line)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="px-6 py-5"
              style={{
                background: "var(--color-bg-panel)",
                borderRight:
                  i < STATS.length - 1 ? "1px solid var(--color-line)" : "none",
              }}
            >
              <div
                className="text-[28px] font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-[11px] uppercase tracking-[0.08em] mt-1 leading-snug"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-faint)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
