import { ContactLinkRow } from "./ContactLinkRow";
import { Eyebrow } from "./Eyebrow";
import { ContactForm } from "./ContactForm";
export function Contact({ CONTACT_LINKS = [] }) {
  return (
    <section id="contact" className="py-16 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <Eyebrow>Contact</Eyebrow>
        <h2
          className="mt-3 mb-2 text-[clamp(28px,4vw,40px)]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Let's connect.
        </h2>
        <p
          className="mb-10 text-[15px]"
          style={{ color: "var(--color-text-dim)" }}
        >
          Open to full-time roles, internships, and collaboration on embedded or
          software projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link) => (
              <ContactLinkRow key={link.label} link={link} />
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
