export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export type GalleryCategory =
  | "all"
  | "bridal"
  | "arabic"
  | "indo-arabic"
  | "minimal"
  | "festival";

export const GALLERY_CATEGORIES: { value: GalleryCategory; label: string }[] =
  [
    { value: "all", label: "All Designs" },
    { value: "bridal", label: "Bridal" },
    { value: "arabic", label: "Arabic" },
    { value: "indo-arabic", label: "Indo-Arabic" },
    { value: "minimal", label: "Minimal" },
    { value: "festival", label: "Festival" },
  ];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery-bridal.png",
    alt: "Full Bridal Mehndi — Intricate Rajasthani patterns on both hands with gold bangles",
    category: "bridal",
    title: "Royal Bridal",
    aspectRatio: "portrait",
  },
  {
    id: "g2",
    src: "/images/gallery-arabic.png",
    alt: "Arabic Mehndi — Flowing floral patterns on forearm with elegant vine motifs",
    category: "arabic",
    title: "Arabic Florals",
    aspectRatio: "landscape",
  },
  {
    id: "g3",
    src: "/images/gallery-minimal.png",
    alt: "Minimal Mehndi — Delicate geometric patterns on hand",
    category: "minimal",
    title: "Modern Minimal",
    aspectRatio: "square",
  },
  {
    id: "g4",
    src: "/images/gallery-indo-arabic.png",
    alt: "Indo-Arabic Fusion Mehndi — Traditional peacock motifs with Arabic fills",
    category: "indo-arabic",
    title: "Indo-Arabic Fusion",
    aspectRatio: "portrait",
  },
  {
    id: "g5",
    src: "/images/gallery-festival.png",
    alt: "Festival Mehndi — Mandala centerpiece with floral borders for Diwali",
    category: "festival",
    title: "Festive Mandala",
    aspectRatio: "square",
  },
  {
    id: "g6",
    src: "/images/hero.png",
    alt: "Luxury Bridal Mehndi — Close-up of intricate bridal henna on hands with gold jewellery",
    category: "bridal",
    title: "Bridal Elegance",
    aspectRatio: "landscape",
  },
];
