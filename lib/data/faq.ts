export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does bridal mehndi take?",
    answer:
      "A full bridal package typically takes between 4 to 8 hours, depending on the design complexity and coverage requested. Our Gold Radiance package covers both hands and feet and usually takes around 6 hours. We always advise booking mehndi 1–2 days before your wedding for the richest colour.",
    category: "Session",
  },
  {
    id: "faq-2",
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 3–6 months in advance for bridal sessions, especially during peak wedding season (April–October). For festivals and events, 4–6 weeks notice is ideal. We do occasionally accommodate last-minute bookings — please WhatsApp us directly to check availability.",
    category: "Booking",
  },
  {
    id: "faq-3",
    question: "Do you offer home visits?",
    answer:
      "Yes — all our packages include a home visit or venue visit within a reasonable distance of London. A travel surcharge may apply for locations further afield. We bring all our own equipment so you can relax in complete comfort on your special day.",
    category: "Service",
  },
  {
    id: "faq-4",
    question: "How dark will the mehndi stain?",
    answer:
      "We use premium, natural organic henna cones which produce a deep burgundy-to-near-black stain. Colour depth depends on your skin's natural chemistry, body temperature, and aftercare. Following our aftercare instructions carefully will ensure you achieve the richest, most vibrant stain possible.",
    category: "Henna",
  },
  {
    id: "faq-5",
    question: "What is included in the aftercare kit?",
    answer:
      "Our aftercare kit includes lemon-sugar sealant spray, organic balm to lock in colour, printed aftercare instructions, and a dedicated WhatsApp helpline for any questions during the drying period. Proper aftercare dramatically improves colour depth and longevity.",
    category: "Aftercare",
  },
  {
    id: "faq-6",
    question: "Can I see a design before my appointment?",
    answer:
      "Absolutely. Every booking includes a pre-appointment consultation where we discuss your vision and create a mood board of curated designs. For our Gold and Diamond packages, we also offer a pre-bridal trial session so you can experience the design and colour before your big day.",
    category: "Design",
  },
  {
    id: "faq-7",
    question: "Do you cater for non-bridal events?",
    answer:
      "Yes! We love all occasions. From Eid and Diwali gatherings to baby showers, hen parties, corporate events, and private celebrations — we bring the magic of mehndi to every event. We also offer group rates for parties of 5 or more guests.",
    category: "Events",
  },
  {
    id: "faq-8",
    question: "Is your henna safe for all skin types?",
    answer:
      "We use 100% natural, organic henna with no added chemicals, PPD, or artificial dyes. Our formulations are safe for all skin types including sensitive skin. We always recommend a patch test 48 hours before your session if you have known skin sensitivities. We never use black henna.",
    category: "Safety",
  },
];
