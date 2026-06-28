import RevealSection from "./RevealSection";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-8">
           
            <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">About Me</p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Passionate about building things that matter.
          </h2>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              I'm a final-year Computer Science Engineering student passionate about building scalable web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Currently working as a Full Stack Developer Intern at Till Cloud, where I contribute to a cloud-based restaurant POS system.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              Outside development, I founded <span className="text-foreground font-semibold">UrbanDos</span>, a streetwear brand focused on premium oversized apparel.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              I enjoy solving real-world problems through clean, scalable software and continuously improving my engineering skills.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
