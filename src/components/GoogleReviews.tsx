import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Review {
  name: string;
  badge?: string;
  timeAgo: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Porkodi S",
    timeAgo: "6 months ago",
    rating: 5,
    text: "The decor was absolutely stunning, creating a magical atmosphere. The presentation was truly beautiful, making the event feel very special. I was so impressed with the decor at the party. Everything was beautifully arranged... I loved it...thankyou so much sandhiya mam for this wonderful work.. ❤️",
  },
  {
    name: "Kishore",
    timeAgo: "a year ago",
    rating: 5,
    text: "Tamsan's customer-focused service made planning our event effortless. They understood our vision and executed it flawlessly, creating an unforgettable experience.",
  },
  {
    name: "Madhu mitha",
    timeAgo: "a year ago",
    rating: 5,
    text: "Firstly a heartfelt thanks for the entire team @ Tamsan Event Management especially for the event organisation & the photography. The event was really budget friendly provided with certain complimentary. The output they executed was beyond expectations!",
  },
  {
    name: "Kannan Thanikasalam",
    badge: "Local Guide",
    timeAgo: "a year ago",
    rating: 5,
    text: "Tamsan's team was incredibly responsive and accommodating throughout the entire event planning process. They listened to our needs and delivered beyond our expectations.",
  },
  {
    name: "Dinesh",
    timeAgo: "a year ago",
    rating: 5,
    text: "I highly recommend Tamsan for their innovative approach and creative ideas. They made our event unique and memorable, leaving a lasting impression on all attendees.",
  },
  {
    name: "Paul Marshal .F",
    timeAgo: "a year ago",
    rating: 5,
    text: "Innovative and creative! They brought fresh ideas to the table, ensuring our event stood out from the rest. Highly recommend their creative approach!",
  },
  {
    name: "RAMANA B",
    timeAgo: "a year ago",
    rating: 5,
    text: "Efficient problem-solving! They anticipated challenges and resolved them swiftly, ensuring a seamless event experience for everyone involved.",
  },
  {
    name: "MANI MUTHAIAH",
    timeAgo: "2 years ago",
    rating: 5,
    text: "Perfect decorations, We want one special event decorations. Thank You.... 🥰",
  },
  {
    name: "Divya L",
    timeAgo: "2 years ago",
    rating: 5,
    text: "We conducted a small birthday party in our terrace. It was well planned and executed elegantly. Best part was the quality of food and catering. Each and everyone of my friends highly appreciated. Definitely I will recommend to my friends. Hats off Team!",
  },
  {
    name: "Thor 007",
    badge: "Local Guide",
    timeAgo: "3 years ago",
    rating: 5,
    text: "Perfect selection if you are looking for classy decorations for your event. From enquiry to finish everything was done seamlessly. Suggestions are as per customers requirement. My guests were excited. Highly recommended!",
  },
  {
    name: "Udhaya Nagaraj",
    timeAgo: "2 years ago",
    rating: 5,
    text: "I recently had the pleasure of hiring Tamsan Event Management Company to organize an event for our community and I must say, their performance exceeded all expectations. From the initial planning stages to the execution of the event, everything was flawless.",
  },
  {
    name: "Nithish Bro",
    timeAgo: "a year ago",
    rating: 5,
    text: "Amazing work by the Tamsan team! Everything was perfectly organized and the execution was flawless. Highly recommended for any event!",
  },
  {
    name: "Navin Kumar",
    timeAgo: "3 years ago",
    rating: 5,
    text: "Highly Responsive and everything was just perfect!! The output was very nice and the best thing is that it was budget friendly. Would highly recommend Tamsan events to my friends.",
  },
  {
    name: "Sri Hari",
    timeAgo: "3 years ago",
    rating: 5,
    text: "Tamil and team helped to frame a perfect plan for our requirement. Amazing execution, great energy by his team. They made our company anniversary a memorable event. Highly recommended.",
  },
  {
    name: "Dinesh M",
    timeAgo: "2 years ago",
    rating: 5,
    text: "It's a nice team to work our event function. I am highly recommended for all.",
  },
  {
    name: "Thalapathy Vijay",
    timeAgo: "3 years ago",
    rating: 5,
    text: "Really great work and good team it was so amazing 🔥✨💫",
  },
  {
    name: "Karthikeyan Karthikeyan",
    badge: "Local Guide",
    timeAgo: "a year ago",
    rating: 5,
    text: "Great event management service! Very professional and well organized team.",
  },
];

const CARDS_PER_VIEW = { mobile: 1, tablet: 2, desktop: 3 };

const GoogleReviews = () => {
  const [page, setPage] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_VIEW.desktop);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage((p) => (p + 1) % totalPages);
      setIsTransitioning(false);
    }, 250);
  }, [totalPages]);

  const prev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage((p) => (p - 1 + totalPages) % totalPages);
      setIsTransitioning(false);
    }, 250);
  }, [totalPages]);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, next]);

  const getInitial = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const avatarColors = [
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-violet-500 to-purple-600",
    "from-rose-500 to-pink-600",
    "from-cyan-500 to-blue-600",
    "from-lime-500 to-green-600",
  ];



  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 leading-[1.15]">
              What Our Clients Say
            </h2>
            <div className="section-divider mx-auto mb-6" />

            {/* Google Rating Summary */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-secondary border border-border rounded-full">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-foreground font-semibold text-sm">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-muted-foreground text-xs ml-1">
                  ({reviews.length} reviews)
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Review Cards */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <div className="overflow-hidden">
            <div
              className={`flex transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isTransitioning ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'
                }`}
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {/* Render in groups of 3 */}
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div
                  key={pageIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1"
                >
                  {reviews
                    .slice(
                      pageIdx * CARDS_PER_VIEW.desktop,
                      pageIdx * CARDS_PER_VIEW.desktop + CARDS_PER_VIEW.desktop
                    )
                    .map((review, idx) => {
                      const globalIdx = pageIdx * CARDS_PER_VIEW.desktop + idx;
                      return (
                        <ScrollReveal key={globalIdx} delay={idx * 0.1}>
                          <div className="group h-full p-6 bg-secondary border border-border rounded-sm hover:border-gold/30 transition-all duration-500 flex flex-col relative overflow-hidden">
                            {/* Decorative quote */}
                            <Quote
                              size={60}
                              className="absolute -top-2 -right-2 text-gold/[0.04] rotate-12 pointer-events-none"
                            />

                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                              <div
                                className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[globalIdx % avatarColors.length]
                                  } flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md`}
                              >
                                {getInitial(review.name)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-foreground font-semibold text-sm truncate">
                                  {review.name}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  {review.badge && (
                                    <span className="text-[10px] bg-gold/10 text-gold px-1.5 py-0.5 rounded-sm font-medium">
                                      {review.badge}
                                    </span>
                                  )}
                                  <span className="text-muted-foreground text-xs">
                                    {review.timeAgo}
                                  </span>
                                </div>
                              </div>
                              {/* Google icon */}
                              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 opacity-60" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                              </svg>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className="fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>

                            {/* Review text */}
                            <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-4">
                              {review.text}
                            </p>
                          </div>
                        </ScrollReveal>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-border text-foreground hover:border-gold hover:text-gold transition-colors duration-300 rounded-sm"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === page
                    ? "bg-gold w-6"
                    : "bg-border hover:bg-muted-foreground"
                    }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-border text-foreground hover:border-gold hover:text-gold transition-colors duration-300 rounded-sm"
              aria-label="Next reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
