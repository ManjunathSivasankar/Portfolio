import RevealSection from "./RevealSection";
import { GraduationCap } from "lucide-react";


const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Engineering in Computer Science - 7.8 CGPA",
    institution: "Adhiyamaan College of Engineering",
    description: "Focusing on software development, data structures, and web technologies.",
  },
  {
    year: "2020 - 2023",
    title: "Diploma in Computer Science Engineering - 90%",
    institution: "Er. perumal Manimekalai College of Engineering",
    description: "Focusing on software development, data structures, and web technologies.",

  },
  {
    year: "2020",
    title: "Secondary School (X)",
    institution: "New Little Flower Matriculation Higher Secondary School",
    description: "Built a strong foundation in science and mathematics.",
  },
];

export default function AcademicSection() {
  return (
    <section id="academic" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={20} className="text-primary" />
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">Education</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16 text-foreground">
            Academic background.
          </h2>
        </RevealSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="flex gap-6 md:gap-8">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full glass-card flex items-center justify-center border-2 border-primary/20">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="pb-2">
                    <span className="text-xs font-medium text-primary tracking-wider">{edu.year}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{edu.description}</p>
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
