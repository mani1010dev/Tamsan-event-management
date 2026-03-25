import ScrollReveal from "./ScrollReveal";
import { Award, Users, Calendar, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "500+ Events",
    description: "Successfully orchestrated over 500 memorable events across South India.",
  },
  {
    icon: Users,
    title: "Happy Families",
    description: "Trusted by hundreds of families to bring their celebrations to life.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in event planning and creative design.",
  },
  {
    icon: Sparkles,
    title: "Custom Themes",
    description: "Every event is uniquely crafted to reflect your personality and vision.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gold/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            About Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Crafting Dreams Into{" "}
            <span className="text-gold italic">Reality</span>
          </h2>
        </ScrollReveal>

        {/* Two-column layout: Video + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Video */}
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden shadow-2xl">
              <video
                src="/WhatsApp Video 2026-03-25 at 5.56.49 PM.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover aspect-video"
              />
              {/* Gold border accent */}
              <div className="absolute inset-0 border-2 border-gold/20 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                Where Every Detail{" "}
                <span className="text-gold">Tells a Story</span>
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                At <strong className="text-gold font-branding">Tamsan Event Management</strong>, we believe every celebration deserves to be extraordinary. With years of experience in the event industry, our passionate team transforms your vision into unforgettable moments.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                From intimate gatherings to grand celebrations, we handle every detail with precision and creativity  venue selection, decor, entertainment, catering, and flawless coordination so you can simply enjoy the magic of your special day.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Based in Chennai, we bring a blend of tradition and modern elegance to weddings, corporate events, birthday celebrations, and more. Your dream event starts here.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center p-6 border border-border/50 hover:border-gold/30 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 border border-gold/30 text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <h4 className="font-branding text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
