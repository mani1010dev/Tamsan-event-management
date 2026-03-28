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

        {/* Two-column layout: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image + closing paragraphs */}
          <ScrollReveal direction="left">
            <div className="space-y-6 lg:space-y-8">
              <div className="relative overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square max-w-sm mx-auto">
                <img
                  src="/about.jpeg"
                  alt="About Tamsan Event Management"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                  loading="lazy"
                />
                {/* Gold border accent */}
                <div className="absolute inset-0 border-2 border-gold/20 pointer-events-none" />
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Founded in 2019 by Sandhiya, <strong className="text-gold font-branding">Tamsan Event Management</strong> has grown into a trusted name in the event industry, known for delivering exceptional experiences with a strong focus on quality, creativity, and client satisfaction. Our journey is built on a foundation of trust, dedication, and a passion for turning visions into reality.
                </p>

                <div className="pt-4 border-t border-gold/20">
                  <p className="text-gold font-serif text-lg md:text-xl italic">
                    At Tamsan Event Management, we don’t just plan events — we create memories that last a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
                Where Every Detail <span className="text-gold">Tells a Story</span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                At the heart of every unforgettable celebration is a team that understands emotions, details, and perfection — and that’s exactly what we stand for.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                What truly sets us apart is our commitment to excellence and our keen attention to detail. We don’t just organize events — we craft meaningful experiences that reflect your story and leave lasting impressions.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
                The trust and loyalty of our clients are the greatest milestones in our journey, inspiring us to deliver even better with every event we create.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                We specialize in end-to-end event planning, offering A to Z services tailored to meet every client’s unique needs. From traditional celebrations and elegant weddings to surprise events, birthdays, corporate gatherings, and baby showers — we handle every detail with precision and care. To ensure a seamless experience, we also provide premium catering services and professional photography, bringing everything you need under one roof.
              </p>
              <div className="relative overflow-hidden shadow-2xl aspect-video max-w-2xl mx-auto lg:mx-0">
                <video
                  src="/WhatsApp Video 2026-03-25 at 5.56.49 PM.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
                {/* Gold border accent */}
                <div className="absolute inset-0 border-2 border-gold/20 pointer-events-none" />
              </div>
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
