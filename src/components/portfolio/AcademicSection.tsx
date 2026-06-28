import RevealSection from "./RevealSection";
import { GraduationCap } from "lucide-react";


const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Engineering in Computer Science - 7.8 CGPA",
    institution: "Adhiyamaan College of Engineering",
  },
  {
    year: "2020 - 2023",
    title: "Diploma in Computer Science Engineering - 90%",
    institution: "Er. perumal Manimekalai College of Engineering",
  },
  {
    year: "2020",
    title: "Secondary School (X)",
    institution: "New Little Flower Matriculation Higher Secondary School",
  },
];

export default function AcademicSection() {
  return (
    <section id="academic" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={20} className="text-black" />
            <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">Education</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Academic background.
          </h2>
        </RevealSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-black/30 via-gray-600/20 to-gray-300/20" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="flex gap-4 md:gap-6">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 md:w-10 h-8 md:h-10 rounded-full glass-card flex items-center justify-center border-2 border-black/20">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-black to-gray-700" />
                    </div>
                  </div>

                  <div className="pb-2">
                    <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700 tracking-wider">{edu.year}</span>
                    <h3 className="font-display text-base font-semibold text-foreground mt-1">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{edu.institution}</p>
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
