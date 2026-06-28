import { ExternalLink, Github } from "lucide-react";
import RevealSection from "./RevealSection";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A visually immersive personal portfolio with glassmorphism aesthetics and scroll-driven animations.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ManjunathSivasankar",
    live: "https://manjunath1326.netlify.app/",
  },
  {
    title: "UrbanDos Store",
    description:
      "E-commerce platform for a streetwear brand featuring bold designs and a seamless shopping experience.",
    tags: ["React", "MongoDB", "E-Commerce"],
    github: "https://github.com/ManjunathSivasankar",
    live: "https://urbandos.store/",
  },
];

export default function ProjectsSection() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 mb-4">
            Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Things I've built.
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealSection key={project.title} delay={i * 120}>
              <div className="glass-card rounded-2xl p-6 h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <button
                        onClick={() => openInNewTab(project.github)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </button>
                    )}

                    {project.live && (
                      <button
                        onClick={() => openInNewTab(project.live)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live Project"
                      >
                        <ExternalLink size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-black/5 to-gray-700/5 border border-black/10 text-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
