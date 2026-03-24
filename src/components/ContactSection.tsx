import { useState } from "react";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { categories } from "@/lib/eventData";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi! I'm ${formData.name}. I'm interested in ${formData.eventType}. ${formData.message}`;
    window.open(`https://wa.me/916369474941?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <ScrollReveal direction="left">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-[1.15]">
                Let's Create Something Beautiful
              </h2>
              <div className="section-divider mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="" disabled>Select Event Type</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your dream event..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3.5 bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 text-sm font-medium tracking-wider uppercase bg-gold text-accent-foreground transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Right - Quick Contact */}
          <ScrollReveal direction="right">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Quick Contact
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Prefer a faster response? Reach out directly through any of these channels.
                </p>
              </div>

              <a
                href="tel:+916369474941"
                className="group flex items-center gap-4 p-5 bg-background border border-border hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Call Us</p>
                  <p className="text-foreground font-medium">+91 63694 74941</p>
                </div>
              </a>

              <a
                href="https://wa.me/916369474941"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-background border border-border hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-colors duration-300">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-foreground font-medium">Chat with us instantly</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-5 bg-background border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-foreground font-medium text-sm leading-relaxed">
                    3/53a, Venmani, 2nd St, Nethaji Nagar,<br /> Ramapuram, Tamil Nadu 600089
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>  
      </div>
    </section>
  );
};

export default ContactSection;
