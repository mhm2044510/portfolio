import { Eyebrow } from "./Eyebrow";
import { SectionHeading } from "./SectionHeading";
import { SkillGroupCard } from "../components/SkillGroupCard";
export function Skills({ SKILL_GROUPS = [] }) {
  return (
    <section id="skills" className="py-16 relative z-10">
      <div className="max-w-[1120px] mx-auto px-7">
        <Eyebrow>Skills</Eyebrow>
        <SectionHeading>Tools of the trade.</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_GROUPS.map((group) => (
            <SkillGroupCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
