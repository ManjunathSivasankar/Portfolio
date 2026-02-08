import RevealSection from "./RevealSection";
import { Code, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Git"],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Python", "SQL", "Excel", "Power BI", "Data Visualization", "Pandas", "Statistical Analysis"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["VS Code", "GitHub", "Figma", "npm"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Tools of the trade.
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <RevealSection key={cat.title} delay={ci * 100}>
              <div className="mb-6 flex items-center gap-3">
                <cat.icon size={18} className="text-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <RevealSection key={skill} delay={ci * 100 + si * 50}>
                    <span className="px-4 py-2 text-sm rounded-xl glass-card text-foreground font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default inline-block">
                      {skill}
                    </span>
                  </RevealSection>
                ))}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
