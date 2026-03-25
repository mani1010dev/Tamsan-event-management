import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-[0_1px_0_hsl(var(--border))]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-[120px] md:h-20">
          <a href="#hero" className="flex items-center gap-4 sm:gap-4 font-serif">
            <img
              src={logo}
              alt="Tamsan Event Management"
              className="h-[76px] md:h-16 w-auto object-contain flex-shrink-0"
              style={{ filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.8))" }}
            />
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 font-serif">
              <span
                className="font-branding text-3xl md:text-3xl font-bold tracking-tight whitespace-nowrap leading-none"
                style={{
                  background: "linear-gradient(135deg, hsl(38 50% 40%), hsl(38 45% 60%), hsl(38 40% 75%), hsl(38 45% 60%), hsl(38 50% 40%))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.5)) drop-shadow(0 0 20px rgba(212, 175, 55, 0.2))",
                }}
              >
                Tamsan
              </span>
              <span className="text-sm md:text-2xl font-bold md:tracking-wide text-gold uppercase tracking-[0.15em] md:normal-case md:tracking-normal mt-1 md:mt-0 whitespace-nowrap font-serif">
                Event Management
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] uppercase text-foreground transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
