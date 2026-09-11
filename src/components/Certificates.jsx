import { Eyebrow } from "./Eyebrow";
import { SectionHeading } from "./SectionHeading";
import { CertificateCard } from "./CertificateCard";
export function Certificates({ CERTIFICATES = [] }) {
  return (
    <section id="certificates" className="py-16 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <Eyebrow>Certificates</Eyebrow>
        <SectionHeading>Continuous learning.</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CERTIFICATES.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
