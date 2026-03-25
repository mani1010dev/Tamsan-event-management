import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import weddingImg from "@/assets/cat-wedding.jpg";
import corporateImg from "@/assets/cat-corporate.jpg";
import birthdayImg from "@/assets/cat-birthday.jpg";

type Ease = [number, number, number, number];
const ease: Ease = [0.16, 1, 0.3, 1];

/* ── Film-reel image sets (two columns, opposite scroll) ── */
const colA = [weddingImg, corporateImg, birthdayImg, weddingImg, corporateImg, birthdayImg];
const colB = [birthdayImg, weddingImg, corporateImg, birthdayImg, weddingImg, corporateImg];

/* ── Shimmer border wrapper ── */
const ShimmerCard = ({ src, alt, delay }: { src: string; alt: string; delay: number }) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <motion.div
      className="relative w-full aspect-[3/4] mb-4 flex-shrink-0 overflow-hidden"
      initial={{ opacity: 0, scale: 0.7, rotateX: 25 }}
      animate={revealed ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
      transition={{ duration: 1.2, ease }}
    >
      {/* Animated gold shimmer border */}
      <div className="absolute -inset-[2px] z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 border-[2px] border-transparent"
          style={{
            borderImage: "linear-gradient(var(--shimmer-angle, 0deg), hsl(var(--gold)) 0%, hsl(var(--gold-light)) 30%, hsl(var(--gold-dark)) 60%, hsl(var(--gold)) 100%) 1",
            animation: "shimmer-rotate 3s linear infinite",
          }}
        />
      </div>

      {/* Lens blur reveal */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ filter: "blur(18px) saturate(0.3)", scale: 1.15 }}
        animate={revealed ? { filter: "blur(0px) saturate(1)", scale: 1 } : {}}
        transition={{ duration: 1.8, delay: 0.2, ease }}
      />

      {/* Gold light overlay on reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.6 }}
        animate={revealed ? { opacity: 0 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.3) 0%, transparent 70%)" }}
      />
    </motion.div>
  );
};

/* ── Scrolling column ── */
const FilmColumn = ({
  images,
  direction,
  speed,
  delayBase,
}: {
  images: string[];
  direction: "up" | "down";
  speed: number;
  delayBase: number;
}) => {
  return (
    <div className="relative w-full overflow-hidden h-full">
      <motion.div
        className="flex flex-col"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {images.map((src, i) => (
          <ShimmerCard
            key={`${direction}-${i}`}
            src={src}
            alt={`Event moment ${i + 1}`}
            delay={delayBase + i * 0.15}
          />
        ))}
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease }}
        className="absolute top-24 md:top-20 left-0 right-0 h-[1px] bg-gold/25 origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 min-h-screen items-center pt-[140px] md:pt-24 pb-20">
        {/* Left: Text */}
        <div className="flex flex-col justify-center z-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="text-gold text-xs tracking-[0.35em] uppercase mb-10 font-semibold"
          >
            Premium Event Studio
          </motion.p>

          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="font-serif text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] text-foreground leading-[0.95] tracking-[-0.02em]"
            >
              Crafting
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease }}
              className="font-serif text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] text-foreground leading-[0.95] tracking-[-0.02em]"
            >
              Moments.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease }}
              className="font-serif text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] text-gold italic leading-[0.95] tracking-[-0.02em] mt-1"
            >
              Creating Memories.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease }}
            className="text-muted-foreground text-base md:text-lg max-w-[420px] leading-relaxed mb-12"
          >
            Elegant event planning and creative experiences tailored for every occasion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15, ease }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="group relative px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase bg-foreground text-background overflow-hidden transition-all duration-300 active:scale-[0.97] text-center"
            >
              <span className="relative z-10">Explore Events</span>
              <span className="absolute inset-0 bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </a>
            <a
              href="#contact"
              className="px-10 py-4 text-sm font-semibold tracking-[0.2em] uppercase border-2 border-foreground/20 text-foreground transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.97] text-center"
            >
              Book Your Event
            </a>
          </motion.div>
        </div>

        {/* Right: Film Reel with shimmer borders & blur reveal */}
        <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[620px] grid grid-cols-2 gap-3 overflow-hidden mask-film-reel">
          <FilmColumn images={colA} direction="up" speed={25} delayBase={0.4} />
          <FilmColumn images={colB} direction="down" speed={30} delayBase={0.7} />

          {/* Top & bottom fade masks */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

          {/* Gold sparkle particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold/50 z-30"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 22}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
