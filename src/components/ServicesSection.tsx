import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { categories } from "@/lib/eventData";

const ServicesSection = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const selected = categories.find((c) => c.id === selectedId);

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 text-balance leading-[1.15]">
              Our Services
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Select a service to discover what we can create for your special occasion.
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {categories.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <motion.button
                onClick={() => setSelectedId(service.id)}
                className="group relative aspect-[3/4] w-full overflow-hidden cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.15]"
                  loading="lazy"
                />
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out" />
                </div>

                {/* Bottom content with slide-up animation */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium tracking-wide text-white group-hover:text-gold transition-colors duration-300">
                    {service.name}
                  </p>
                  <div className="flex items-center gap-1 mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="text-[11px] text-gold/80 tracking-wider uppercase">View</span>
                    <ArrowRight size={12} className="text-gold/80" />
                  </div>
                </div>

                {/* Gold border glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors duration-500" />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />

            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
              className="relative w-[92vw] md:w-[90vw] h-[88vh] md:h-[90vh] bg-background overflow-hidden z-10"
              style={{ boxShadow: "0 25px 80px -12px rgba(0,0,0,0.5), 0 0 40px -8px rgba(212,175,55,0.15)" }}
            >
              {/* Gold accent line at top */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent origin-center"
              />

              <div className="h-full overflow-y-auto p-6 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="text-gold text-xs tracking-[0.3em] uppercase mb-2 font-medium"
                    >
                      Service
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                      className="font-serif text-2xl md:text-4xl text-foreground"
                    >
                      {selected.name}
                    </motion.h3>
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 60 }}
                      transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                      className="h-[2px] bg-gold/60 mt-3"
                    />
                  </div>
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    onClick={() => setSelectedId(null)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-border hover:border-gold hover:bg-gold/10 transition-all duration-300 shrink-0"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="text-muted-foreground leading-relaxed mb-8 max-w-3xl text-sm md:text-base"
                >
                  {selected.description}
                </motion.p>

                {/* Photo Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {selected.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.85, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        delay: 0.3 + idx * 0.12,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }}
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      className="group cursor-pointer overflow-hidden"
                      onClick={() => setLightboxImage(img)}
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={img}
                          alt={`${selected.name} ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Hover overlay with zoom icon */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                          <motion.div
                            initial={false}
                            className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                          >
                            <ZoomIn size={16} className="text-accent-foreground" />
                          </motion.div>
                        </div>
                        {/* Bottom gold shine */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/0 group-hover:bg-gold/60 transition-colors duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-8 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              src={lightboxImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain"
            />
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="absolute top-6 right-6"
            >
              <X size={28} className="text-primary-foreground" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
