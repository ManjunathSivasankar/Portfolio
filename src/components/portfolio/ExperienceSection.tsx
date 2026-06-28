import RevealSection from "./RevealSection";
import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  website: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    role: "Front-End Developer Intern → Full-Stack Developer Intern",
    company: "Till Cloud Pty Ltd",
    location: "Remote, Australia",
    period: "Mar 2026 – Present",
    website: "https://tillcloud.com.au",
    highlights: [
      "Transitioned from Front-End Developer Intern to Full-Stack Developer Intern.",
      "Developing a cloud-based restaurant POS system using React, Next.js, Express.js, PostgreSQL, and Tailwind CSS.",
      "Successfully completed **Phase 1**, deployed it on a **VPS**, and currently developing **Phase 2**."
    ],
    skills: ["React", "Next.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "RBAC"]
  },
  {
    role: "Freelance – Web Developer",
    company: "Assuvar",
    location: "Tamil Nadu, India",
    period: "Jun 2025 – Nov 2025",
    website: "https://assuvar.com",
    highlights: [
      "Implemented client-side routing using React Router.",
      "Improved navigation flow and reduced page transition complexity in single-page applications."
    ],
    skills: ["React", "React Router", "Single Page Applications", "UI/UX Routing"]
  },
  {
    role: "Intern – Web Developer",
    company: "Friendzion Technologies",
    location: "Tamil Nadu, India",
    period: "Dec 2023 – Jan 2024",
    website: "https://www.friendzion.com",
    highlights: [
      "Developed 5+ responsive web pages using HTML, CSS, and JavaScript.",
      "Assisted in building reusable front-end components, reducing repeated UI development effort."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Reusable Components"]
  }
];

export default function ExperienceSection() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={20} className="text-black" />
            <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">Experience</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Work history.
          </h2>
        </RevealSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-black/30 via-gray-600/20 to-gray-300/20" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="flex gap-4 md:gap-6">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full glass-card flex items-center justify-center border-2 border-black/20">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-black to-gray-700" />
                    </div>
                  </div>

                  <div className="pb-2 flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 tracking-wider">
                        {exp.period}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <button
                          onClick={() => openInNewTab(exp.website)}
                          className="inline-flex items-center gap-1 text-black/70 hover:text-black hover:underline transition-all"
                        >
                          <Globe size={12} />
                          Website
                        </button>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-foreground mt-0.5">
                      {exp.company}
                    </p>

                    <ul className="space-y-2 mt-3 text-sm text-muted-foreground leading-relaxed">
                      {exp.highlights.map((highlight, idx) => {
                        const renderHighlight = (text: string) => {
                          const parts = text.split(/(\*\*.*?\*\*)/g);
                          return parts.map((part, index) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                              return (
                                <strong key={index} className="font-semibold text-foreground">
                                  {part.slice(2, -2)}
                                </strong>
                              );
                            }
                            return part;
                          });
                        };

                        return (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/40 flex-shrink-0" />
                            <span>{renderHighlight(highlight)}</span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-black/5 to-gray-700/5 border border-black/10 text-foreground font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
