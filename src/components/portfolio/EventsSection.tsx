import RevealSection from "./RevealSection";
import { Calendar, Trophy, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    description:
      "Last week, I had the opportunity to participate in the symposium at Kuppam Engineering College and it turned out to be an amazing experience.",
    image: "https://i.postimg.cc/KvDypT3T/image.png",
    link: "https://www.linkedin.com/posts/manjunaths1326_proud-to-share-a-small-achievement-last-activity-7371524275939373056-QwW9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "symposium",
  },
  {
    title:
      "𝐅𝐫𝐨𝐦 𝐂𝐨𝐝𝐞 𝐭𝐨 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲 — 𝐓𝐞𝐚𝐦 𝐀𝐬𝐬𝐮𝐯𝐚𝐫 𝐚𝐭 𝐑𝐡𝐲𝐭𝐡𝐦 𝟐𝟓",
    date: "August 2025",
    description:
      "This weekend, we didn’t just write code — we wrote a chapter of our journey. Assuvar proudly partnered as a Sponsor for Rhythm 25 in Hosur.",
    image: "https://i.postimg.cc/C1sNpwCg/image.png",
    link: "https://www.linkedin.com/posts/assuvar_assuvar-startupjourney-studentfounders-ugcPost-7342930504167395330-qqsv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "event",
  },
  {
    title: "Unforgettable Day at the GDG Solution Challenge Hackathon Bootcamp!",
    date: "March 2025",
    description:
      "An incredible experience at the GDG Solution Challenge Hackathon Bootcamp hosted at SJB Institute of Technology, Bangalore.",
    image: "https://i.postimg.cc/1t3g4Phy/image.png",
    link: "https://www.linkedin.com/posts/farhan-khan-00817a296_gdg-solutionchallenge-hackathon-ugcPost-7304465221627064320-CJ1X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2DmhQB2U5SgC9FRcQ7Owb6088fRaVvChU",
    type: "hackathon",
  },
  {
    title: "Tech Fest Participation",
    date: "March 2025",
    description:
      "Had the opportunity to present my research at Kongu College of Engineering during the paper presentation event.",
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
  return (
    <section id="events" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RevealSection>
          <div className="flex items-center gap-3 mb-4">
            <Trophy size={20} className="text-black" />
            <p className="text-sm font-medium tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Events & Participation
            </p>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Experiences that shaped me.
          </h2>

          <p className="text-muted-foreground max-w-2xl mb-12">
            From hackathons to cultural events, these moments reflect learning,
            collaboration, and growth.
          </p>
        </RevealSection>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <RevealSection key={i} delay={i * 120}>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group focus:outline-none"
              >
                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </AspectRatio>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badge */}
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium capitalize ${typeColors[event.type]}`}
                    >
                      {event.type}
                    </span>

                    {/* External link icon */}
                    <ExternalLink
                      size={18}
                      className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 transition-colors group-hover:text-primary">
                      {event.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </a>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
