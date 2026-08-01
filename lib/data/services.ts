export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  tag?: string;
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "bridal-mehndi",
    title: "Bridal Mehndi",
    description:
      "The ultimate luxury experience. Intricate full-hand and feet designs with traditional Rajasthani patterns, personalized with your story, hidden names, and meaningful motifs.",
    duration: "4–8 hours",
    icon: "heart",
    tag: "Most Popular",
    popular: true,
  },
  {
    id: "arabic-mehndi",
    title: "Arabic Mehndi",
    description:
      "Bold, flowing floral patterns with striking negative space. The modern classic that complements every occasion from weddings to corporate events.",
    duration: "1–3 hours",
    icon: "flower",
  },
  {
    id: "indo-arabic",
    title: "Indo-Arabic Fusion",
    description:
      "A seamless marriage of Indian intricacy and Arabic elegance. Perfect for brides who want the best of both worlds — detailed yet airy.",
    duration: "2–5 hours",
    icon: "layers",
    tag: "Trending",
  },
  {
    id: "minimal-mehndi",
    title: "Minimal Mehndi",
    description:
      "Less is more. Delicate geometric patterns, fine-line florals and contemporary motifs for the modern minimalist bride or event guest.",
    duration: "30–90 min",
    icon: "feather",
  },
  {
    id: "festival-mehndi",
    title: "Festival Mehndi",
    description:
      "Celebratory designs for Eid, Diwali, Teej, Raksha Bandhan and every joyful occasion. Beautiful, bold, and festive.",
    duration: "1–2 hours",
    icon: "sparkles",
  },
  {
    id: "engagement-mehndi",
    title: "Engagement Mehndi",
    description:
      "Ring-focused designs that accentuate your new jewellery. Elegant wrist patterns and backhands that photograph beautifully.",
    duration: "1–3 hours",
    icon: "ring",
  },
  {
    id: "baby-shower",
    title: "Baby Shower Mehndi",
    description:
      "Tender, joyful designs featuring baby feet, elephants, lotus blooms, and gentle motifs to celebrate new life and new beginnings.",
    duration: "1–2 hours",
    icon: "baby",
  },
  {
    id: "corporate-events",
    title: "Corporate & Events",
    description:
      "Luxury mehndi experiences for corporate parties, product launches, cultural events, and private gatherings. Fully customisable for your brand.",
    duration: "Flexible",
    icon: "briefcase",
  },
];
