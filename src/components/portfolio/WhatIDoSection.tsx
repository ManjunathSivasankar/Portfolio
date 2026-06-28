import { Code, BarChart3, Shirt } from "lucide-react";
import RevealSection from "./RevealSection";
import { sub } from "date-fns";

const profiles = [
  {
    icon: Code,
    title: "Full Stack Developer",
    bgGradient: "from-black/5 to-gray-700/5",
    borderColor: "border-black/10",
    iconBg: "bg-black/10",
    description:
      "Building responsive, scalable web applications using modern frontend and backend technologies.",
    tags: ["React", "Next.js", "Express.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    icon: Shirt,
    title: "Founder — UrbanDos",
    borderColor: "border-gray-500/10",
    iconBg: "bg-gray-500/10",
    bgGradient: "from-gray-500/5 to-black/5",
    description:
      "Building and managing a streetwear clothing brand while handling branding, product strategy, and e-commerce operations.",
    tags: ["Brand Strategy", "Streetwear", "Creative Direction", "E-Commerce"],
  },
];

export default function WhatIDoSection() {
  return (
    <section id="what-i-do" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 mb-4">What I Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Two passions. One vision.
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6 justify-center">
          {profiles.map((p, i) => (
            <RevealSection key={p.title} delay={i * 150}>
              <div
                className={`glass-card rounded-2xl p-6 h-full ${p.borderColor} border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${p.iconBg} group-hover:bg-black/15 transition-colors`}>
                  <p.icon size={20} className="text-black" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{p.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] rounded-full bg-gray-100 text-foreground font-medium border border-black/5"
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
