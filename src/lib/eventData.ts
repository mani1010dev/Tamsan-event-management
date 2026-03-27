import catWedding from "@/assets/cat-wedding.jpg";
import catBirthday from "@/assets/cat-birthday.jpg";
import catEngagement from "@/assets/cat-engagement.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";
import catReception from "@/assets/cat-reception.jpg";
import catPhotography from "@/assets/cat-photography.jpg";
import catCatering from "@/assets/cat-catering.jpg";
import catCakes from "@/assets/cat-cakes.jpg";
import catCoupleEntry from "@/assets/cat-couple-entry.jpg";
import catBabyEntry from "@/assets/cat-baby-entry.jpg";
import catStalls from "@/assets/cat-stalls.jpg";
import catGaming from "@/assets/cat-gaming.jpg";
import catPuberty from "@/assets/cat-puberty.jpg";

export interface EventCategory {
  id: string;
  name: string;
  image: string;
  description: string;
  icon: string;
  gallery: string[];
}

const birthdayImages = [
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.31 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.32 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.33 PM (1).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.33 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.34 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.35 PM (1).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.36 PM (1).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.36 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.37 PM (1).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.37 PM (2).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.37 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.38 PM (1).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.38 PM.jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.39 PM (1).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.39 PM (2).jpeg",
  "/birthday/WhatsApp Image 2026-03-26 at 12.01.40 PM.jpeg"
];

const photographyImages = [
  "/photography/WhatsApp Image 2026-03-26 at 9.20.50 PM.jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.51 PM.jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.52 PM.jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.53 PM (1).jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.53 PM.jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.56 PM (1).jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.56 PM.jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.57 PM.jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.59 PM (1).jpeg",
  "/photography/WhatsApp Image 2026-03-26 at 9.20.59 PM.jpeg"
];

const engagementImages = [
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.46 PM.jpeg",
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.47 PM (1).jpeg",
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.47 PM (2).jpeg",
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.47 PM.jpeg",
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.48 PM.jpeg",
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.49 PM (1).jpeg",
  "/engagement/WhatsApp Image 2026-03-26 at 8.29.49 PM.jpeg"
];

const cateringImages = [
  "/catering/WhatsApp Image 2026-03-26 at 12.01.22 PM.jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.01.23 PM (1).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.01.23 PM.jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.01.25 PM (1).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.01.25 PM.jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.01.27 PM.jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.03.46 PM.jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 12.03.47 PM (3).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 6.21.23 PM (2).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 6.21.24 PM (1).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 6.21.24 PM (2).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 6.21.25 PM (1).jpeg",
  "/catering/WhatsApp Image 2026-03-26 at 6.21.25 PM.jpeg"
];

const corporateImages = [
  "/event/WhatsApp Image 2026-03-26 at 6.21.22 PM (1).jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.21.23 PM.jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.21.24 PM.jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.21.26 PM (1).jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.27.39 PM (1).jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.27.39 PM.jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.27.40 PM (1).jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.27.40 PM (2).jpeg",
  "/event/WhatsApp Image 2026-03-26 at 6.27.40 PM.jpeg"
];

const gamingImages = [
  "/game/7850f3ba-3058-49ec-90d7-c365d881fe00.jfif",
  "/game/WhatsApp Image 2026-03-26 at 8.00.13 PM (1).jpeg",
  "/game/WhatsApp Image 2026-03-26 at 8.00.13 PM.jpeg",
  "/game/WhatsApp Image 2026-03-26 at 8.00.15 PM.jpeg",
  "/game/WhatsApp Image 2026-03-26 at 8.29.33 PM.jpeg",
  "/game/WhatsApp Image 2026-03-26 at 8.29.34 PM (1).jpeg",
  "/game/WhatsApp Image 2026-03-26 at 8.29.34 PM.jpeg",
  "/game/WhatsApp Image 2026-03-26 at 8.29.35 PM.jpeg"
];

const cakeImages = [
  "/cake/1000041981.jpg.jpeg",
  "/cake/1000042404.jpg.jpeg",
  "/cake/1000042529.jpg.jpeg",
  "/cake/ASF_7149.JPG.jpeg",
  "/cake/ASF_7158.JPG.jpeg",
  "/cake/IMG_20250824_115140.jpg.jpeg",
  "/cake/IMG_20250824_115156.jpg.jpeg",
  "/cake/IMG_20250824_115204.jpg.jpeg",
  "/cake/IMG_20251206_133549.jpg.jpeg",
  "/cake/IMG_20251206_133616.jpg.jpeg",
  "/cake/IMG_20251206_133649.jpg.jpeg",
  "/cake/IMG_20251206_133719.jpg.jpeg",
  "/cake/IMG_20251206_133744.jpg.jpeg",
  "/cake/IMG_20260107_000731.jpg.jpeg",
  "/cake/IMG_20260204_193547.jpg.jpeg"
];

const traditionalImages = [
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.13 PM.jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.14 PM (1).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.14 PM (2).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.14 PM.jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.15 PM (1).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.15 PM.jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.16 PM (1).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.16 PM (2).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.16 PM.jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.17 PM (1).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.17 PM (2).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.17 PM.jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.26.18 PM.jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.50.41 PM (1).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.50.41 PM (2).jpeg",
  "/traditional/WhatsApp Image 2026-03-27 at 5.50.41 PM.jpeg"
];

const coupleBabyEntryImages = [
  "/entry/WhatsApp Image 2026-03-26 at 9.20.52 PM.jpeg",
  "/entry/WhatsApp Image 2026-03-26 at 9.20.53 PM (1).jpeg",
  "/entry/WhatsApp Image 2026-03-26 at 9.20.57 PM.jpeg",
  "/entry/WhatsApp Image 2026-03-27 at 5.52.05 PM.jpeg",
  "/entry/WhatsApp Image 2026-03-27 at 5.52.06 PM.jpeg",
  "/entry/WhatsApp Image 2026-03-27 at 5.52.08 PM (1).jpeg",
  "/entry/WhatsApp Image 2026-03-27 at 5.52.08 PM.jpeg",
  "/entry/WhatsApp Image 2026-03-27 at 5.52.09 PM (1).jpeg",
  "/entry/WhatsApp Image 2026-03-27 at 5.52.09 PM.jpeg"
];

export const categories: EventCategory[] = [
  { id: "wedding-reception", name: "Wedding & Reception", image: "/wedding & reception/1000010526.jpg.jpeg", description: "Timeless ceremonies crafted with elegance and love. Grand receptions that leave lasting impressions. We bring your dream day to life with meticulous attention to every detail, stunning décor, and seamless coordination.", icon: "💍", gallery: ["/wedding & reception/1000010526.jpg.jpeg", "/wedding & reception/1000018802.jpg.jpeg", "/wedding & reception/1000041795.jpg.jpeg", "/wedding & reception/1000041799.jpg.jpeg", "/wedding & reception/1000041966.jpg.jpeg", "/wedding & reception/1000042017.jpg.jpeg", "/wedding & reception/1000042020.jpg.jpeg", "/wedding & reception/1000062648.jpg.jpeg", "/wedding & reception/1000062650.jpg.jpeg", "/wedding & reception/1000077433.jpg.jpeg", "/wedding & reception/1000078948.jpg.jpeg", "/wedding & reception/1000079406.jpg.jpeg", "/wedding & reception/1000079719.jpg.jpeg", "/wedding & reception/1000080380.jpg.jpeg", "/wedding & reception/1000160466.jpg.jpeg", "/wedding & reception/1000160472.jpg.jpeg", "/wedding & reception/1000160474.jpg.jpeg", "/wedding & reception/1000160480.jpg.jpeg", "/wedding & reception/1000196775.jpg.jpeg", "/wedding & reception/1000196776.jpg.jpeg", "/wedding & reception/1000196780.jpg.jpeg", "/wedding & reception/1000196782.jpg.jpeg", "/wedding & reception/1000253925.jpg.jpeg"] },
  { id: "birthday", name: "Birthday", image: birthdayImages[0], description: "Milestone celebrations made extraordinary. Whether it's a first birthday or a golden jubilee, we design memorable experiences tailored to your vision.", icon: "🎂", gallery: birthdayImages },
  { id: "engagement", name: "Engagement", image: engagementImages[0], description: "Romantic beginnings designed to perfection. We create breathtaking settings for one of life's most cherished moments.", icon: "💐", gallery: engagementImages },
  { id: "corporate", name: "Corporate Event", image: corporateImages[0], description: "Professional gatherings with refined execution. From product launches to annual galas, we deliver flawless corporate experiences.", icon: "🏢", gallery: corporateImages },
  { id: "photography", name: "Photography", image: photographyImages[0], description: "Every moment captured with artistry. Our photography services ensure your precious memories are preserved beautifully.", icon: "📸", gallery: photographyImages },
  { id: "catering-stalls", name: "Catering & Stalls", image: cateringImages[0], description: "Exquisite culinary experiences and curated vendor setups for your guests. From multi-course fine dining to interactive stalls, photo booths, and food carts, we curate experiences that delight.", icon: "🍽️", gallery: cateringImages },
  { id: "cakes", name: "Cakes", image: cakeImages[0], description: "Stunning confections that are works of art. Custom-designed cakes that are as beautiful as they are delicious.", icon: "🎂", gallery: cakeImages },
  { id: "couple-baby-entry", name: "Couple & Baby Entry", image: coupleBabyEntryImages[0], description: "Dramatic entrances and magical welcomes. We choreograph show-stopping couple entries and tender baby entry ceremonies that your guests will never forget.", icon: "✨", gallery: coupleBabyEntryImages },
  { id: "gaming", name: "Gaming & Entertainment", image: gamingImages[0], description: "Interactive fun for all ages. We bring the excitement with gaming zones, live entertainment, and engaging activities.", icon: "🎮", gallery: gamingImages },
  { id: "traditional", name: "Traditional Events", image: traditionalImages[0], description: "Celebrating tradition with modern elegance. A beautiful blend of cultural customs and contemporary style for your traditional ceremonies and rites of passage.", icon: "🌸", gallery: traditionalImages },
];

// Gallery images - reuse category images as sample gallery
export const galleryImages = categories.map((cat) => ({
  id: cat.id,
  src: cat.image,
  category: cat.id,
  alt: cat.name,
}));
