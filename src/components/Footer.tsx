import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            <h3 className="font-serif text-2xl text-primary-foreground mb-4">
              Tamsan <span className="text-gold">Event Management</span>
            </h3>
            <div className="section-divider mx-auto mb-8 opacity-30" />
            <p className="text-primary-foreground/40 text-xs tracking-wider uppercase">
              © {new Date().getFullYear()} Tamsan event management. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
