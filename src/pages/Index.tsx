import Navbar from "@/components/portfolio/Navbar";
import FloatingShapes from "@/components/portfolio/FloatingShapes";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import WhatIDoSection from "@/components/portfolio/WhatIDoSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AcademicSection from "@/components/portfolio/AcademicSection";
import EventsSection from "@/components/portfolio/EventsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingShapes />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
        <SkillsSection />
        <ProjectsSection />
        <AcademicSection />
        <EventsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
