import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import RevealSection from "./RevealSection";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ManjunathSivasankar" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/urban.dos/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/manjunaths1326/" },
  { icon: Mail, label: "Email", href: "mailto:manjunaths5262@gmail.com" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:manjunaths5262@gmail.com?subject=${subject}&body=${body}`;

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Let's connect.
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have a project in mind, want to collaborate, or just say hi? I'd love
            to hear from you.
          </p>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <RevealSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-5 py-3.5 rounded-xl glass-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-5 py-3.5 rounded-xl glass-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-5 py-3.5 rounded-xl glass-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />

              <button
                type="submit"
                disabled={!form.name || !form.email || !form.message}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </RevealSection>

          {/* Social Links */}
          <RevealSection delay={200}>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium text-muted-foreground mb-6">
                Or find me on
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </div>

      {/* Footer */}
      <RevealSection delay={300}>
        <footer className="mt-24 pt-8 border-t border-border text-center">
          <p className="font-display text-sm text-muted-foreground">
            Designed & built with intention &bull;{" "}
            <span className="text-foreground font-medium">
              Manjunath S
            </span>
          </p>
        </footer>
      </RevealSection>
    </section>
  );
}
