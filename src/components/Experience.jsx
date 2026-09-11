import { TimelineItem } from "./TimelineItem";
import { SectionHeading } from "./SectionHeading";
import { Eyebrow } from "./Eyebrow";
import { ProjectCard } from "./ProjectCard";
export function Experience({ TIMELINE = [], PROJECTS = [] }) {
  return (
    <section id="experience" className="py-16 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <Eyebrow>Experience &amp; Education</Eyebrow>
        <SectionHeading>Background &amp; timeline.</SectionHeading>

        <div className="relative">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px hidden md:block"
            style={{ background: "var(--color-line)" }}
          />
          <div className="flex flex-col gap-6">
            {TIMELINE.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div
            className="text-[11px] uppercase tracking-widest mb-5"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-faint)",
            }}
          >
            Selected Projects
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
