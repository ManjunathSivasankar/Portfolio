import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Animated gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white animate-gradient" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Profile Image */}
        <div
          className="mb-8 transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.8)",
          }}
        >
          <div className="relative inline-block">
            {/* Glow ring - Black to Grey gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/30 via-gray-600/20 to-black/30 blur-xl animate-pulse" />
            {/* Profile container */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-black/40 via-gray-700/30 to-black/40">
              <div className="w-full h-full rounded-full overflow-hidden glass-card border-2 border-black/10">
                {/* Placeholder avatar - replace src with your image */}
                <img
                  src="https://i.postimg.cc/Sxf3NGNj/Whats-App-Image-2026-02-08-at-19-07-15.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Welcome to my world
          </p>
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 transition-all duration-1000 ease-out delay-200"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="gradient-text">Manjunath</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground font-body mb-10 transition-all duration-1000 ease-out delay-500"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Frontend Developer &bull; Data Analyst &bull; Entrepreneur
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out delay-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-black to-gray-800 text-white font-medium text-sm shadow-lg hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 hover:scale-105"
          >
            <Briefcase size={16} className="group-hover:rotate-12 transition-transform" />
            View Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full glass-card text-foreground font-medium text-sm border-2 border-black/20 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <Mail size={16} className="group-hover:scale-110 transition-transform" />
            Contact Me
          </button>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="mt-16 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          style={{ opacity: loaded ? 1 : 0, transitionDuration: "1s", transitionDelay: "1s" }}
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
