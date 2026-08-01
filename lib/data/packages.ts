export interface Package {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  color: "silver" | "gold" | "diamond";
  featured?: boolean;
  features: string[];
  cta: string;
}

export const PACKAGES: Package[] = [
  {
    id: "silver",
    name: "Silver Bloom",
    subtitle: "Elegant & Refined",
    price: "POA",
    priceNote: "Starting from enquiry",
    color: "silver",
    features: [
      "Full both-hand bridal mehndi",
      "Front & back hand coverage",
      "Traditional or Arabic style",
      "Up to 3 hours session",
      "Home or studio visit",
      "Aftercare kit included",
      "Digital design consultation",
    ],
    cta: "Enquire Now",
  },
  {
    id: "gold",
    name: "Gold Radiance",
    subtitle: "Our Signature Experience",
    price: "POA",
    priceNote: "Most popular choice",
    color: "gold",
    featured: true,
    features: [
      "Full bridal mehndi — both hands & feet",
      "Arm coverage up to elbow",
      "Bespoke design consultation",
      "Up to 6 hours session",
      "Home service included",
      "Priority booking",
      "Premium aftercare kit",
      "Touch-up session included",
      "Pre-bridal trial option",
    ],
    cta: "Book This Package",
  },
  {
    id: "diamond",
    name: "Diamond Opulence",
    subtitle: "The Ultimate Luxury",
    price: "POA",
    priceNote: "Bespoke luxury experience",
    color: "diamond",
    features: [
      "Full bridal mehndi — hands, arms & feet",
      "Full arm & leg coverage",
      "Dedicated lead artist + assistant",
      "Unlimited session time",
      "Private venue or home visit",
      "Premium henna cones included",
      "Bespoke design creation",
      "Pre & post wedding sessions",
      "Family mehndi for 4 guests",
      "Professional photography coordination",
      "Emergency touch-up on wedding day",
    ],
    cta: "Book Exclusively",
  },
];
