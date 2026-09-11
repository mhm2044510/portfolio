import { Eyebrow } from "./Eyebrow";
import { SectionHeading } from "./SectionHeading";
export function About() {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <Eyebrow>About</Eyebrow>
        <SectionHeading>Where engineering meets code.</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
          <div
            className="rounded-[10px] border p-7"
            style={{
              background: "var(--color-bg-panel)",
              borderColor: "var(--color-line)",
            }}
          >
            <h3
              className="text-base mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-copper)",
              }}
            >
              Professional Summary
            </h3>
            <p
              className="text-[14.5px] leading-relaxed mb-4"
              style={{ color: "var(--color-text-dim)" }}
            >
              Mechatronics engineer with a strong foundation in engineering
              principles and hands-on experience in web application development,
              backend systems, and system integration.
            </p>
            <p
              className="text-[14.5px] leading-relaxed mb-4"
              style={{ color: "var(--color-text-dim)" }}
            >
              Experienced with React frontends and C# .NET backends, relational
              databases, and RESTful API design. Senior design project was an
              autonomous robotic solar panel cleaning system — applying
              robotics, automation, and control systems to a real-world
              engineering challenge.
            </p>
            <p
              className="text-[14.5px] leading-relaxed"
              style={{ color: "var(--color-text-dim)" }}
            >
              Deeply interested in IoT, automation, embedded systems, and
              software-driven solutions that bridge mechanical, electrical, and
              software engineering.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div
              className="rounded-[10px] border p-7"
              style={{
                background: "var(--color-bg-panel)",
                borderColor: "var(--color-line)",
              }}
            >
              <h3
                className="text-base mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-copper)",
                }}
              >
                Education
              </h3>
              <p
                className="font-semibold text-[15px]"
                style={{ color: "var(--color-text)" }}
              >
                B.Sc. Mechatronics Engineering
              </p>
              <p
                className="text-[13px] mt-0.5 mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-faint)",
                }}
              >
                Hashemite University · Oct 2020 – Feb 2025 · Zarqa, Jordan
              </p>
              <div className="flex gap-3 flex-wrap">
                <span
                  className="text-[12px] px-3 py-1.5 rounded-[6px] border font-semibold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-teal)",
                    background: "rgba(53, 208, 192, 0.1)",
                    borderColor: "var(--color-teal-dim)",
                  }}
                >
                  GPA 3.50 / 4.00
                </span>
                <span
                  className="text-[12px] px-3 py-1.5 rounded-[6px] border font-semibold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-copper)",
                    background: "rgba(217, 130, 43, 0.1)",
                    borderColor: "var(--color-copper-dim)",
                  }}
                >
                  Ranked 1st in Class
                </span>
              </div>
            </div>

            <div
              className="rounded-[10px] border p-7"
              style={{
                background: "var(--color-bg-panel)",
                borderColor: "var(--color-line)",
              }}
            >
              <h3
                className="text-base mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-copper)",
                }}
              >
                Languages
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { lang: "Arabic", level: "Native", width: "100%" },
                  { lang: "English", level: "Very Good", width: "80%" },
                ].map((item) => (
                  <div key={item.lang}>
                    <div className="flex justify-between mb-1.5">
                      <span
                        className="text-[14px]"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.lang}
                      </span>
                      <span
                        className="text-[12px]"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--color-text-faint)",
                        }}
                      >
                        {item.level}
                      </span>
                    </div>
                    <div
                      className="h-[3px] rounded-full"
                      style={{ background: "var(--color-line)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: item.width,
                          background:
                            "linear-gradient(90deg, var(--color-copper), var(--color-teal))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
