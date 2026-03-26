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
import catSurprise from "@/assets/cat-surprise.jpg";
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
  { id: "wedding", name: "Wedding", image: "/wedding & reception/1000010526.jpg.jpeg", description: "Timeless ceremonies crafted with elegance and love. From intimate garden weddings to grand ballroom celebrations, we bring your dream day to life with meticulous attention to every detail.", icon: "💍", gallery: ["/wedding & reception/1000010526.jpg.jpeg", "/wedding & reception/1000018802.jpg.jpeg", "/wedding & reception/1000041795.jpg.jpeg", "/wedding & reception/1000041799.jpg.jpeg", "/wedding & reception/1000041966.jpg.jpeg", "/wedding & reception/1000042017.jpg.jpeg", "/wedding & reception/1000042020.jpg.jpeg", "/wedding & reception/1000062648.jpg.jpeg", "/wedding & reception/1000062650.jpg.jpeg", "/wedding & reception/1000077433.jpg.jpeg", "/wedding & reception/1000078948.jpg.jpeg", "/wedding & reception/1000079406.jpg.jpeg", "/wedding & reception/1000079719.jpg.jpeg", "/wedding & reception/1000080380.jpg.jpeg", "/wedding & reception/1000160466.jpg.jpeg", "/wedding & reception/1000160472.jpg.jpeg", "/wedding & reception/1000160474.jpg.jpeg", "/wedding & reception/1000160480.jpg.jpeg", "/wedding & reception/1000196775.jpg.jpeg", "/wedding & reception/1000196776.jpg.jpeg", "/wedding & reception/1000196780.jpg.jpeg", "/wedding & reception/1000196782.jpg.jpeg", "/wedding & reception/1000253925.jpg.jpeg"] },
  { id: "birthday", name: "Birthday", image: "/birthday-cake/1000041981.jpg.jpeg", description: "Milestone celebrations made extraordinary. Whether it's a first birthday or a golden jubilee, we design memorable experiences tailored to your vision.", icon: "🎂", gallery: ["/birthday-cake/1000041981.jpg.jpeg", "/birthday-cake/1000042404.jpg.jpeg", "/birthday-cake/1000042529.jpg.jpeg", "/birthday-cake/IMG_20250824_115149.jpg.jpeg", "/birthday-cake/IMG_20250824_115156.jpg.jpeg", "/birthday-cake/IMG_20250824_115204.jpg.jpeg"] },
  { id: "engagement", name: "Engagement", image: catEngagement, description: "Romantic beginnings designed to perfection. We create breathtaking settings for one of life's most cherished moments.", icon: "💐", gallery: [catEngagement, catWedding, catPhotography, catCoupleEntry] },
  { id: "corporate", name: "Corporate Event", image: catCorporate, description: "Professional gatherings with refined execution. From product launches to annual galas, we deliver flawless corporate experiences.", icon: "🏢", gallery: [catCorporate, catCatering, catStalls, catPhotography] },
  { id: "reception", name: "Reception", image: "/wedding & reception/1000062650.jpg.jpeg", description: "Grand receptions that leave lasting impressions. Stunning décor, exquisite dining, and seamless coordination for your special evening.", icon: "🥂", gallery: ["/wedding & reception/1000010526.jpg.jpeg", "/wedding & reception/1000018802.jpg.jpeg", "/wedding & reception/1000041795.jpg.jpeg", "/wedding & reception/1000041799.jpg.jpeg", "/wedding & reception/1000041966.jpg.jpeg", "/wedding & reception/1000042017.jpg.jpeg", "/wedding & reception/1000042020.jpg.jpeg", "/wedding & reception/1000062648.jpg.jpeg", "/wedding & reception/1000062650.jpg.jpeg", "/wedding & reception/1000077433.jpg.jpeg", "/wedding & reception/1000078948.jpg.jpeg", "/wedding & reception/1000079406.jpg.jpeg", "/wedding & reception/1000079719.jpg.jpeg", "/wedding & reception/1000080380.jpg.jpeg", "/wedding & reception/1000160466.jpg.jpeg", "/wedding & reception/1000160472.jpg.jpeg", "/wedding & reception/1000160474.jpg.jpeg", "/wedding & reception/1000160480.jpg.jpeg", "/wedding & reception/1000196775.jpg.jpeg", "/wedding & reception/1000196776.jpg.jpeg", "/wedding & reception/1000196780.jpg.jpeg", "/wedding & reception/1000196782.jpg.jpeg", "/wedding & reception/1000253925.jpg.jpeg"] },
  { id: "photography", name: "Photography", image: catPhotography, description: "Every moment captured with artistry. Our photography services ensure your precious memories are preserved beautifully.", icon: "📸", gallery: [catPhotography, catWedding, catEngagement, catBirthday] },
  { id: "catering", name: "Catering", image: catCatering, description: "Exquisite culinary experiences for every palate. From multi-course fine dining to live food stations, we curate menus that delight.", icon: "🍽️", gallery: [catCatering, catCakes, catReception, catStalls] },
  { id: "cakes", name: "Cakes", image: "/birthday-cake/1000042529.jpg.jpeg", description: "Stunning confections that are works of art. Custom-designed cakes that are as beautiful as they are delicious.", icon: "🎂", gallery: ["/birthday-cake/1000041981.jpg.jpeg", "/birthday-cake/1000042404.jpg.jpeg", "/birthday-cake/1000042529.jpg.jpeg", "/birthday-cake/IMG_20250824_115149.jpg.jpeg", "/birthday-cake/IMG_20250824_115156.jpg.jpeg", "/birthday-cake/IMG_20250824_115204.jpg.jpeg"] },
  { id: "couple-entry", name: "Couple Entry", image: catCoupleEntry, description: "Dramatic entrances that set the stage. We choreograph show-stopping couple entries that your guests will never forget.", icon: "✨", gallery: [catCoupleEntry, catWedding, catReception, catEngagement] },
  { id: "baby-entry", name: "Baby Entry", image: catBabyEntry, description: "Welcoming new life with joy and warmth. Tender, magical entry ceremonies designed to celebrate your little one.", icon: "👶", gallery: [catBabyEntry, catBirthday, catPuberty, catSurprise] },
  { id: "stalls", name: "Stalls", image: catStalls, description: "Curated vendor experiences for your guests. From photo booths to food carts, we set up interactive stalls that add charm to any event.", icon: "🎪", gallery: [catStalls, catGaming, catCatering, catCorporate] },
  { id: "gaming", name: "Gaming & Entertainment", image: catGaming, description: "Interactive fun for all ages. We bring the excitement with gaming zones, live entertainment, and engaging activities.", icon: "🎮", gallery: [catGaming, catStalls, catBirthday, catSurprise] },
  { id: "surprise", name: "Surprise Party", image: catSurprise, description: "Unforgettable surprises, flawlessly orchestrated. We plan every detail so the big reveal goes off without a hitch.", icon: "🎉", gallery: [catSurprise, catBirthday, catGaming, catCakes] },
  { id: "puberty", name: "Puberty Function", image: catPuberty, description: "Celebrating tradition with modern elegance. A beautiful blend of cultural customs and contemporary style for this rite of passage.", icon: "🌸", gallery: [catPuberty, catBabyEntry, catCatering, catPhotography] },
];

// Gallery images - reuse category images as sample gallery
export const galleryImages = categories.map((cat) => ({
  id: cat.id,
  src: cat.image,
  category: cat.id,
  alt: cat.name,
}));
