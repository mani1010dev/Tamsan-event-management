import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { categories } from "@/lib/eventData";

/* ── 3D Tilt Card Component ── */
const TiltCard = ({ 
  children, 
  onClick, 
  className = "" 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative cursor-pointer transition-transform duration-200 ease-out ${className}`}
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const selected = categories.find((c) => c.id === selectedId);

  // Define Bento grid spans for 14 items
  const getBentoSpans = (index: number) => {
    const spans = [
      { col: "sm:col-span-2", row: "sm:row-span-2" }, // 0: Wedding & Reception
      { col: "sm:col-span-1", row: "sm:row-span-1" }, // 1: Birthday
      { col: "sm:col-span-1", row: "sm:row-span-1" }, // 2: Engagement 
      { col: "sm:col-span-2", row: "sm:row-span-1" }, // 3: Corporate 
      { col: "sm:col-span-2", row: "sm:row-span-2" }, // 4: Photography 
      { col: "sm:col-span-2", row: "sm:row-span-1" }, // 5: Catering & Stalls
      { col: "sm:col-span-2", row: "sm:row-span-1" }, // 6: Cakes 
      { col: "sm:col-span-2", row: "sm:row-span-2" }, // 7: Couple & Baby Entry
      { col: "sm:col-span-2", row: "sm:row-span-1" }, // 8: Gaming
      { col: "sm:col-span-2", row: "sm:row-span-1" }, // 9: Puberty
    ];
    return spans[index] || { col: "sm:col-span-1", row: "sm:row-span-1" };
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Elite Experiences
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance leading-[1.15]">
              Our Premium Services
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Experience events redefined through our signature Bento collection.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Service Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-4 md:gap-5">
          {categories.slice(0, 14).map((service, i) => {
            const { col, row } = getBentoSpans(i);
            return (
              <ScrollReveal key={service.id} delay={i * 0.05} className={`${col} ${row}`}>
                <TiltCard onClick={() => setSelectedId(service.id)} className="h-full">
                  <div className="group relative w-full h-full overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      style={{ objectPosition: "50% 25%" }}
                      loading="lazy"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1500ms] ease-in-out" />
                    </div>

                    {/* Brand Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs text-gold font-medium tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {service.id.charAt(0).toUpperCase() + service.id.slice(1)}
                      </p>
                      <h4 className="text-base md:text-lg font-serif text-white leading-tight">
                        {service.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-2 md:mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        <span className="text-[10px] text-white/70 tracking-widest uppercase">Explore</span>
                        <ArrowRight size={14} className="text-gold" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-3 right-3 w-[1px] h-3 bg-gold/50" />
                      <div className="absolute top-3 right-3 w-3 h-[1px] bg-gold/50" />
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Popup Modal (90%) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedId(null)}
            />

            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative w-full max-w-[95vw] md:max-w-[90vw] h-[90vh] bg-background overflow-hidden z-10 border border-gold/20"
              style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}
            >
              <div className="flex flex-col h-full w-full">
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedId(null)}
                  whileHover={{ rotate: 90 }}
                  className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center border border-border hover:border-gold hover:bg-gold/10 transition-all z-50 bg-background/50 backdrop-blur-sm shadow-sm"
                >
                  <X size={20} />
                </motion.button>

                {/* Stationary Header */}
                <div className="shrink-0 px-6 pt-8 pb-6 md:px-16 md:pt-14 md:pb-8 border-b border-border/50 bg-background/95 backdrop-blur-md z-40 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    className="h-[1px] bg-gold/40 mb-6"
                  />
                  <div className="max-w-4xl pr-12 md:pr-0">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3 font-semibold"
                    >
                      Refined Quality
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="font-serif text-3xl md:text-5xl lg:text-5xl text-foreground mb-4 leading-tight"
                    >
                      {selected.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-muted-foreground text-sm md:text-base leading-relaxed"
                    >
                      {selected.description}
                    </motion.p>
                  </div>
                </div>

                {/* Scrolling Gallery */}
                <div className="flex-1 overflow-y-auto px-6 py-8 md:px-16 md:py-10">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {selected.gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + idx * 0.05, type: "spring" }}
                        whileHover={{ y: -5 }}
                        className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-muted/20 border border-border"
                        onClick={() => setLightboxImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${selected.name} ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          style={{ objectPosition: "50% 25%" }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative side text */}
              <div className="absolute bottom-10 right-10 pointer-events-none hidden lg:block">
                <span className="text-[120px] font-serif text-foreground/5 leading-none select-none uppercase tracking-tighter">
                  {selected.id}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox (Remains the same but with spring) */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain"
            />
            <button className="absolute top-6 right-6">
              <X size={32} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
