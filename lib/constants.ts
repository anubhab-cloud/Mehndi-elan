// ─── Site Configuration ────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "Mehndi Élan",
  tagline: "Artistry Etched in Tradition",
  artist: "Priya Sharma",
  phone: "+91 6009954997",
  whatsapp: "916009954997",
  email: "hello@mehndi-elan.com",
  address: "London & Surrounding Areas, UK",
  instagram: "https://instagram.com/mehndielan",
  facebook: "https://facebook.com/mehndielan",
  businessHours: {
    weekdays: "Monday – Friday: 9:00am – 6:00pm",
    weekends: "Saturday – Sunday: 10:00am – 4:00pm",
  },
  serviceAreas: [
    "London",
    "Birmingham",
    "Manchester",
    "Leicester",
    "Luton",
    "Slough",
    "Bradford",
    "Coventry",
  ],
};

// ─── Navigation Links ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Booking", href: "/booking" },
];

// ─── Trust Stats ───────────────────────────────────────────────────────────
export const TRUST_STATS = [
  { value: "1200+", label: "Happy Brides", icon: "heart" },
  { value: "12+", label: "Years Experience", icon: "award" },
  { value: "5000+", label: "Designs Created", icon: "palette" },
  { value: "4.9★", label: "Average Rating", icon: "star" },
  { value: "UK-Wide", label: "Home Service", icon: "home" },
];

// ─── Process Steps ─────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Book Online",
    description: "Fill in our simple booking form or reach out on WhatsApp. We'll confirm your date within 24 hours.",
    icon: "calendar",
  },
  {
    step: "02",
    title: "Consultation",
    description: "We discuss your vision, preferences, outfit colours, and the level of intricacy you desire.",
    icon: "message-circle",
  },
  {
    step: "03",
    title: "Design Curation",
    description: "Our artist curates a bespoke design mood board tailored exclusively to your bridal aesthetic.",
    icon: "layout",
  },
  {
    step: "04",
    title: "Appointment Day",
    description: "We arrive at your home or venue, fully equipped, to create your dream mehndi in total comfort.",
    icon: "sparkles",
  },
  {
    step: "05",
    title: "Breathtaking Result",
    description: "Watch as your skin is transformed with a masterpiece that will leave everyone speechless.",
    icon: "heart",
  },
];
