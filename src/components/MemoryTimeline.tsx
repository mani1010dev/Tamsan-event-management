import ScrollReveal from "./ScrollReveal";
import catEngagement from "@/assets/cat-engagement.jpg";
import catReception from "@/assets/cat-reception.jpg";
import catCoupleEntry from "@/assets/cat-couple-entry.jpg";
import catPhotography from "@/assets/cat-photography.jpg";

const timelineSteps = [
  {
    step: "01",
    title: "The Grand Entry",
    description: "A dramatic arrival that sets the tone for the entire celebration.",
    image: catCoupleEntry,
  },
  {
    step: "02",
    title: "Décor & Ambience",
    description: "Every detail curated to create an atmosphere of enchantment.",
    image: catReception,
  },
  {
    step: "03",
    title: "The Celebration",
    description: "Joyful moments shared with loved ones in a stunning setting.",
    image: catEngagement,
  },
  {
    step: "04",
    title: "Captured Forever",
    description: "Professional photography preserving every precious moment.",
    image: catPhotography,
  },
];

const MemoryTimeline = () => {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Journey
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance leading-[1.15]">
              Memory Timeline
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every event tells a story. Here's how we bring yours to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-0">
          {timelineSteps.map((step, i) => (
            <div
              key={step.step}
              className={`md:grid md:grid-cols-2 md:gap-16 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              } ${i > 0 ? "md:mt-[-40px]" : ""}`}
            >
              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1}
                className={`${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-8 md:mb-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-accent-foreground text-xs font-medium tracking-wider px-3 py-1.5 uppercase">
                    Step {step.step}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal
                direction={i % 2 === 0 ? "right" : "left"}
                delay={0.2}
                className={`${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
              >
                <div className="md:py-12">
                  <span className="font-serif text-6xl md:text-8xl text-gold/20 leading-none block mb-2">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
