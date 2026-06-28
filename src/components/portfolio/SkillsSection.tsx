import RevealSection from "./RevealSection";
import { Code, Server, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Express.js", "Node.js", "REST APIs", "PostgreSQL", "Prisma", "Authentication", "RBAC"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "VPS Deployment"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 mb-4">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Tools of the trade.
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <RevealSection key={cat.title} delay={ci * 100}>
              <div className="mb-4 flex items-center gap-3">
                <cat.icon size={18} className="text-black" />
                <h3 className="font-display text-base font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <RevealSection key={skill} delay={ci * 100 + si * 50}>
                    <span className="px-3 py-1.5 text-xs rounded-lg glass-card border border-black/10 text-foreground font-medium hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default inline-block hover:bg-gray-100">
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
