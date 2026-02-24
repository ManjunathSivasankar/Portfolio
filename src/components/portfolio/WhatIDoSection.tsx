import { Code, BarChart3, Shirt } from "lucide-react";
import RevealSection from "./RevealSection";
import { sub } from "date-fns";

const profiles = [
  {
    icon: Code,
    title: "Frontend Developer",
    subtitle: "intermediate",
    bgGradient: "from-black/5 to-gray-700/5",
    borderColor: "border-black/10",
    iconBg: "bg-black/10",
    description:
      "Building responsive, accessible interfaces with modern tools. Currently learning backend technologies on the path to becoming a full-stack developer.",
    tags: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Git"],
  },
  {
    icon: BarChart3,
    title: "Data Analyst",
    subtitle: "beginner",
    bgGradient: "from-gray-600/5 to-black/5",
    borderColor: "border-gray-600/10",
    iconBg: "bg-gray-600/10",
    description:
      "Turning raw data into meaningful insights. Comfortable with analytical thinking, dashboards, and data-driven decision making.",
    tags: ["Python", "SQL", "Excel", "Power BI", "Data Visualization"],
  },
  {
    icon: Shirt,
    title: "Founder - UrbanDos",
    borderColor: "border-gray-500/10",
    iconBg: "bg-gray-500/10",
    bgGradient: "from-gray-500/5 to-black/5",
    description:
      "Created a streetwear brand focused on oversized, bold fashion. Blending creative vision with entrepreneurial hustle.",
    tags: ["Brand Strategy", "Streetwear", "Creative Direction", "E-Commerce"],
  },
];

export default function WhatIDoSection() {
  return (
    <section id="what-i-do" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 mb-4">What I Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Three passions. One vision.
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <RevealSection key={p.title} delay={i * 150}>
              <div
                className={`glass-card rounded-2xl p-8 h-full ${p.borderColor} border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${p.iconBg} group-hover:bg-black/15 transition-colors`}>
                  <p.icon size={22} className="text-black" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-1">{p.title}</h3>
                {p.subtitle && (
                  <p className="text-xs font-medium text-muted-foreground mb-4">{p.subtitle}</p>
                )}
                {!p.subtitle && <div className="mb-4" />}

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 text-foreground font-medium border border-black/5"
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
