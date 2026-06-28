import { useEffect, useRef, useState } from "react";
import RevealSection from "./RevealSection";
import { Calendar, Trophy, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type EventType = "hackathon" | "workshop" | "certification" | "event" | "symposium";

interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
  type: EventType;
}

const events: EventItem[] = [
  {
    title: "Proud to share a small achievement!",
    date: "October 2025",
    description: "Participated in the symposium at Kuppam Engineering College and it turned out to be an amazing experience.",
    image: "https://i.postimg.cc/KvDypT3T/image.png",
    link: "https://www.linkedin.com/posts/manjunaths1326_proud-to-share-a-small-achievement-last-activity-7371524275939373056-QwW9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "symposium",
  },
  {
    title: "𝐅𝐫𝐨𝐦 𝐂𝐨𝐝𝐞 𝐭𝐨 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 — 𝐓𝐞𝐚𝐦 𝐀𝐬𝐬𝐮𝐯𝐚𝐫 𝐚𝐭 𝐑𝐡𝐲𝐭𝐡𝐦 𝟐𝟓",
    date: "August 2025",
    description: "Assuvar proudly partnered as a Sponsor for Rhythm 25 in Hosur.",
    image: "https://i.postimg.cc/C1sNpwCg/image.png",
    link: "https://www.linkedin.com/posts/assuvar_assuvar-startupjourney-studentfounders-ugcPost-7342930504167395330-qqsv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "event",
  },
  {
    title: "Unforgettable Day at the GDG Solution Challenge Hackathon Bootcamp!",
    date: "March 2025",
    description: "An incredible experience at the GDG Solution Challenge Hackathon Bootcamp hosted at SJB Institute of Technology, Bangalore.",
    image: "https://i.postimg.cc/1t3g4Phy/image.png",
    link: "https://www.linkedin.com/posts/farhan-khan-00817a296_gdg-solutionchallenge-hackathon-ugcPost-7304465221627064320-CJ1X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "hackathon",
  },
  {
    title: "Tech Fest Participation",
    date: "March 2025",
    description: "Presented research at Kongu College of Engineering during the paper presentation event.",
    image: "https://i.postimg.cc/tC3VrBzL/image.png",
    link: "https://www.linkedin.com/posts/manjunaths1326_kongucollegeofengineering-learning-growth-activity-7304396203713081345-p48f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "event",
  },
];

const typeColors: Record<EventType, string> = {
  hackathon: "bg-black/10 text-black border border-black/20",
  workshop: "bg-gray-600/10 text-gray-700 border border-gray-600/20",
  certification: "bg-gray-500/10 text-gray-700 border border-gray-500/20",
  event: "bg-gray-400/10 text-gray-700 border border-gray-400/20",
  symposium: "bg-gray-700/10 text-gray-800 border border-gray-700/20",
};

export default function EventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2.8 : clientWidth / 2.8;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered || isDown) return;
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          containerRef.current.scrollBy({ left: clientWidth / 2.8, behavior: "smooth" });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, isDown]);

  return (
    <section id="events" className="section-padding">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Trophy size={18} className="text-black" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                  Events & Participation
                </p>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Experiences that shaped me.
              </h2>
            </div>
            
            {/* Slider arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full glass-card border border-black/15 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous event"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full glass-card border border-black/15 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next event"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </RevealSection>

        {/* Carousel Wrapper */}
        <RevealSection delay={150}>
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex gap-5 overflow-x-auto pb-4 scroll-smooth cursor-grab select-none no-scrollbar ${
              isDown ? "cursor-grabbing" : ""
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {events.map((event, i) => (
              <div
                key={i}
                className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0"
              >
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group focus:outline-none"
                >
                  <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                    
                    {/* Image Container with compact height */}
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Badge */}
                      <span
                        className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${typeColors[event.type]}`}
                      >
                        {event.type}
                      </span>

                      {/* External Link icon */}
                      <ExternalLink
                        size={14}
                        className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Calendar size={12} className="text-muted-foreground" />
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {event.date}
                        </span>
                      </div>

                      <h3 className="font-display text-sm font-semibold text-foreground mb-1.5 transition-colors group-hover:text-primary line-clamp-1">
                        {event.title}
                      </h3>

                      <p className="text-[12px] text-muted-foreground leading-normal line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                  </div>
                </a>
              </div>
            ))}
          </div>
        </RevealSection>

      </div>
    </section>
  );
}
