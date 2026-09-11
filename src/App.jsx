import "./assets/index.css";
import {
  NAV_LINKS,
  STATS,
  TIMELINE,
  PROJECTS,
  SKILL_GROUPS,
  CERTIFICATES,
  CONTACT_LINKS,
} from "../src/constants/index";
import { Navbar } from "../src/components/Navbar";
import { Hero } from "../src/components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
const App = () => {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        minHeight: "100vh",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
      }}
    >
      <Navbar NAV_LINKS={NAV_LINKS} />
      <main>
        <Hero STATS={STATS} />
        <div
          className="border-t"
          style={{ borderColor: "var(--color-line)" }}
        />
        <Experience TIMELINE={TIMELINE} PROJECTS={PROJECTS} />
        <div
          className="border-t"
          style={{ borderColor: "var(--color-line)" }}
        />
        <Skills SKILL_GROUPS={SKILL_GROUPS} />
        <div
          className="border-t"
          style={{ borderColor: "var(--color-line)" }}
        />
        <Certificates CERTIFICATES={CERTIFICATES} />
        <div
          className="border-t"
          style={{ borderColor: "var(--color-line)" }}
        />
        <Contact CONTACT_LINKS={CONTACT_LINKS} />
      </main>
    </div>
  );
};

export default App;
