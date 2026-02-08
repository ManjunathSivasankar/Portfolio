import RevealSection from "./RevealSection";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-8">
           
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">About Me</p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Passionate about building things that matter.
          </h2>
        </RevealSection>

        <RevealSection delay={200}>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Frontend developer & Entrepreneur. <br />
                  B.E Pre-final year student. 
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
               I enjoy crafting clean, thoughtful digital experiences.
               Currently learning full-stack development.. many challenge at a time. <br />
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I explore data analytics to uncover insights, and I build <span className="text-foreground font-medium">UrbanDos</span>, 
              a streetwear brand shaped by urban culture and bold.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Honest about where I am. <br />
              Hungry for what’s ahead.<br />
              Building everything with intention.</p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
