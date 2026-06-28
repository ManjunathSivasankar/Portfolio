import RevealSection from "./RevealSection";
import { Code, Shirt } from "lucide-react";

const highlights = [
  "Full-Stack Developer",
  "Founder – UrbanDos",
  "Final Year CSE",
  "React",
  "Next.js",
  "Express.js",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: About Me */}
          <div className="lg:col-span-6 text-left">
            <RevealSection>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                  About Me
                </p>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground leading-snug">
                Passionate about building things that matter.
              </h2>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm a final-year Computer Science Engineering student and Full-Stack Developer passionate about building scalable web applications.
                </p>
                <p>
                  Currently working as a Full-Stack Developer Intern at Till Cloud, contributing to a cloud-based restaurant POS system.
                </p>
                <p>
                  Outside development, I'm the founder of <span className="text-foreground font-semibold">UrbanDos</span>, where I combine technology, branding, and business to build a modern streetwear brand.
                </p>
              </div>
            </RevealSection>

            {/* Highlights Section */}
            <RevealSection delay={200}>
              <div className="mt-8 flex flex-wrap gap-2">
                {highlights.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-black/5 to-gray-700/5 border border-black/10 text-foreground font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Right Column: What I Do (Service Cards) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Card 1: Full-Stack Development */}
            <RevealSection delay={150}>
              <div className="glass-card rounded-2xl p-6 border-2 border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-black/10 text-black group-hover:bg-black/15 transition-colors">
                    <Code size={20} />
                  </div>
                  <div className="space-y-3 flex-grow text-left">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Full-Stack Development
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Building responsive and scalable web applications using modern frontend and backend technologies.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["React", "Next.js", "Express.js", "TypeScript", "PostgreSQL", "Tailwind CSS"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] rounded bg-black/[0.02] border border-black/5 text-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Card 2: Founder – UrbanDos */}
            <RevealSection delay={250}>
              <div className="glass-card rounded-2xl p-6 border-2 border-black/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-500/10 text-gray-700 group-hover:bg-gray-500/15 transition-colors">
                    <Shirt size={20} />
                  </div>
                  <div className="space-y-2 flex-grow text-left">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Founder – UrbanDos
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      Building and growing a premium streetwear brand while managing branding, product strategy, and e-commerce operations.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>

          </div>

        </div>
      </div>
    </section>
  );
}
