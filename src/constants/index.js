const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];
const STATS = [
  { value: "3.50", label: "Excellent GPA — Ranked 1st in Class" },
  { value: "1+", label: "Years  Experience" },
  { value: "4", label: "Professional Certificates" },
];

const TIMELINE = [
  {
    type: "Work",
    color: "copper",
    title: "Web Developer (Intern → Employee)",
    org: "First Information Technology · Amman, Jordan",
    date: "Sep 2025 — Present",
    description:
      "Developing and maintaining responsive web applications using React and modern frontend technologies. Building backend services and RESTful APIs with C# .NET. Creating and optimizing SQL queries and stored procedures, integrating frontend and backend systems end-to-end.",
    tags: ["React", "C# .NET", "SQL", "RESTful APIs", "Full-Stack"],
  },
  {
    type: "Education",
    color: "teal",
    title: "B.Sc. Mechatronics Engineering",
    org: "Hashemite University · Zarqa, Jordan",
    date: "Oct 2020 — Feb 2025",
    description:
      "Graduated with a GPA of 3.50/4.00 — ranked first in class. Senior design project: autonomous robotic solar panel cleaning system, applying automation, robotics, and control system concepts to a real-world engineering problem.",
    tags: [
      "Control Systems",
      "Robotics",
      "Embedded Systems",
      "GPA 3.50 / First in Class",
    ],
  },
  {
    type: "Work",
    color: "copper",
    title: "Internship — Solar Production Line",
    org: "Philadelphia Solar · Amman, Jordan",
    date: "Jul 2024 — Sep 2024",
    description:
      "Hands-on experience with solar module production equipment. Learned to identify and analyze manufacturing defects — broken cells, loose ribbon, soldering issues, matrix shift, and cell misalignment — and their impact on module efficiency and quality.",
    tags: [
      "Manufacturing",
      "Quality Control",
      "Solar PV",
      "Process Engineering",
    ],
  },
];

const PROJECTS = [
  {
    index: "PRJ / 01",
    badge: "Senior Capstone",
    title: "Robotic Solar Panel Cleaning System",
    description:
      "Senior design project — an autonomous robot that cleans solar panels, applying automation, robotics, and control system concepts to maximize panel efficiency. Built end-to-end from mechanical design through embedded firmware.",
    tags: ["Robotics", "Automation", "Control Systems", "Embedded"],
    highlighted: true,
  },
  {
    index: "PRJ / 02",
    title: "Full-Stack Web Application",
    description:
      "Responsive production web application built at First Information Technology — React frontend, C# .NET backend, SQL relational database with optimized stored procedures and RESTful API layer.",
    tags: ["React", "C# .NET", "SQL", "RESTful APIs"],
  },
  {
    index: "PRJ / 03",
    title: "PLC Conveyor Automation",
    description:
      "Ladder-logic controlled industrial conveyor sorting system, designed and simulated in Siemens TIA Portal for an industrial automation coursework project.",
    tags: ["PLC", "TIA Portal", "Ladder Logic", "Automation"],
  },
];

const SKILL_GROUPS = [
  {
    tag: "SW",
    title: "Programming & Software",
    skills: [
      "C# .NET",
      "React",
      "SQL",
      "RESTful APIs",
      "Frontend Integration",
      "Backend Integration",
      "Relational Databases",
      "Stored Procedures",
    ],
  },
  {
    tag: "HW",
    title: "Control & Automation",
    skills: [
      "PLC (TIA Portal)",
      "Industrial Control Systems",
      "Arduino (HW & SW)",
      "Embedded Systems",
    ],
  },
  {
    tag: "ENG",
    title: "Engineering Tools",
    skills: ["MATLAB", "SolidWorks", "AutoCAD", "LabVIEW"],
  },
  {
    tag: "LANG",
    title: "Languages",
    skills: ["Arabic — Native", "English — Very Good"],
  },
];

const CERTIFICATES = [
  {
    icon: "⚡",
    iconColor: "teal",
    title: "Electrical Engineering Training",
    active: true,
    subtitle: "ELV, Lighting & Power Systems",
    meta: "Prime Academy · May 2026 — Present",
  },
  {
    icon: "✓",
    iconColor: "copper",
    title: "Full Stack Web Development Bootcamp",
    subtitle: "React · C# .NET · SQL · APIs",
    meta: "CODEgy for Software and Training · Sep 2025 — Jan 2026",
  },
  {
    icon: "✓",
    iconColor: "copper",
    title: "Digital Fabrication and Design",
    subtitle: "CAD, prototyping, and fabrication workflows",
    meta: "Engineering Geniuses · Jul 2024 — Sep 2024",
  },
  {
    icon: "✓",
    iconColor: "copper",
    title: "Industrial Control",
    subtitle: "PLC programming and industrial automation",
    meta: "Engineering Geniuses · Feb 2024",
  },
];

const CONTACT_LINKS = [
  {
    icon: "✉",
    label: "Email",
    value: "nababtehmahmoud5@gmail.com",
    href: "mailto:nababtehmahmoud5@gmail.com",
  },
  {
    icon: "☎",
    label: "Phone",
    value: "+962 781 844 266",
    href: "tel:+962781844266",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/mahmoudnababteh",
    href: "https://github.com/mhm2044510",
    external: true,
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/mahmoud-nababteh",
    href: "www.linkedin.com/in/mahmoud-nababteh-2785b0214",
    external: true,
  },
  {
    icon: "◎",
    label: "Location",
    value: "Amman, Jordan",
  },
];
export {
  NAV_LINKS,
  STATS,
  TIMELINE,
  PROJECTS,
  SKILL_GROUPS,
  CERTIFICATES,
  CONTACT_LINKS,
};
