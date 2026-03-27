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

export const categories: EventCategory[] = [
  { id: "wedding-reception", name: "Wedding & Reception", image: "/wedding & reception/1000010526.jpg.jpeg", description: "Timeless ceremonies crafted with elegance and love. Grand receptions that leave lasting impressions. We bring your dream day to life with meticulous attention to every detail, stunning décor, and seamless coordination.", icon: "💍", gallery: ["/wedding & reception/1000010526.jpg.jpeg", "/wedding & reception/1000018802.jpg.jpeg", "/wedding & reception/1000041795.jpg.jpeg", "/wedding & reception/1000041799.jpg.jpeg", "/wedding & reception/1000041966.jpg.jpeg", "/wedding & reception/1000042017.jpg.jpeg", "/wedding & reception/1000042020.jpg.jpeg", "/wedding & reception/1000062648.jpg.jpeg", "/wedding & reception/1000062650.jpg.jpeg", "/wedding & reception/1000077433.jpg.jpeg", "/wedding & reception/1000078948.jpg.jpeg", "/wedding & reception/1000079406.jpg.jpeg", "/wedding & reception/1000079719.jpg.jpeg", "/wedding & reception/1000080380.jpg.jpeg", "/wedding & reception/1000160466.jpg.jpeg", "/wedding & reception/1000160472.jpg.jpeg", "/wedding & reception/1000160474.jpg.jpeg", "/wedding & reception/1000160480.jpg.jpeg", "/wedding & reception/1000196775.jpg.jpeg", "/wedding & reception/1000196776.jpg.jpeg", "/wedding & reception/1000196780.jpg.jpeg", "/wedding & reception/1000196782.jpg.jpeg", "/wedding & reception/1000253925.jpg.jpeg"] },
  { id: "birthday", name: "Birthday", image: "/birthday-cake/1000041981.jpg.jpeg", description: "Milestone celebrations made extraordinary. Whether it's a first birthday or a golden jubilee, we design memorable experiences tailored to your vision.", icon: "🎂", gallery: ["/birthday-cake/1000041981.jpg.jpeg", "/birthday-cake/1000042404.jpg.jpeg", "/birthday-cake/1000042529.jpg.jpeg", "/birthday-cake/IMG_20250824_115149.jpg.jpeg", "/birthday-cake/IMG_20250824_115156.jpg.jpeg", "/birthday-cake/IMG_20250824_115204.jpg.jpeg"] },
  { id: "engagement", name: "Engagement", image: catEngagement, description: "Romantic beginnings designed to perfection. We create breathtaking settings for one of life's most cherished moments.", icon: "💐", gallery: [catEngagement, catWedding, catPhotography, catCoupleEntry] },
  { id: "corporate", name: "Corporate Event", image: catCorporate, description: "Professional gatherings with refined execution. From product launches to annual galas, we deliver flawless corporate experiences.", icon: "🏢", gallery: [catCorporate, catCatering, catStalls, catPhotography] },

  { id: "photography", name: "Photography", image: catPhotography, description: "Every moment captured with artistry. Our photography services ensure your precious memories are preserved beautifully.", icon: "📸", gallery: [catPhotography, catWedding, catEngagement, catBirthday] },
  { id: "catering-stalls", name: "Catering & Stalls", image: catCatering, description: "Exquisite culinary experiences and curated vendor setups for your guests. From multi-course fine dining to interactive stalls, photo booths, and food carts, we curate experiences that delight.", icon: "🍽️", gallery: [catCatering, catStalls, catCakes, catReception, catCorporate, catGaming] },
  { id: "cakes", name: "Cakes", image: "/birthday-cake/1000042529.jpg.jpeg", description: "Stunning confections that are works of art. Custom-designed cakes that are as beautiful as they are delicious.", icon: "🎂", gallery: ["/birthday-cake/1000041981.jpg.jpeg", "/birthday-cake/1000042404.jpg.jpeg", "/birthday-cake/1000042529.jpg.jpeg", "/birthday-cake/IMG_20250824_115149.jpg.jpeg", "/birthday-cake/IMG_20250824_115156.jpg.jpeg", "/birthday-cake/IMG_20250824_115204.jpg.jpeg"] },
  { id: "couple-baby-entry", name: "Couple & Baby Entry", image: catCoupleEntry, description: "Dramatic entrances and magical welcomes. We choreograph show-stopping couple entries and tender baby entry ceremonies that your guests will never forget.", icon: "✨", gallery: [catCoupleEntry, catBabyEntry, catWedding, catBirthday, catReception, catEngagement, catPuberty] },
  { id: "gaming", name: "Gaming & Entertainment", image: catGaming, description: "Interactive fun for all ages. We bring the excitement with gaming zones, live entertainment, and engaging activities.", icon: "🎮", gallery: [catGaming, catStalls, catBirthday] },
  { id: "traditional", name: "Traditional Events", image: catPuberty, description: "Celebrating tradition with modern elegance. A beautiful blend of cultural customs and contemporary style for your traditional ceremonies and rites of passage.", icon: "🌸", gallery: [catPuberty, catBabyEntry, catCatering, catPhotography] },
];

// Gallery images - reuse category images as sample gallery
export const galleryImages = categories.map((cat) => ({
  id: cat.id,
  src: cat.image,
  category: cat.id,
  alt: cat.name,
}));
