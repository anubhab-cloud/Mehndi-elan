"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, ArrowRight } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/data/gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LightboxModal, type LightboxItem } from "@/components/ui/LightboxModal";

export default function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      className="section-padding"
      id="gallery"
      aria-labelledby="gallery-heading"
      style={{ background: "linear-gradient(180deg, #F5EDE0 0%, #FAF6F0 100%)" }}
    >
      <div className="container-luxury">
        <SectionHeader
          id="gallery-heading"
          subtitle="Our Portfolio"
          title="The Art We Create"
          description="A curated selection from 5,000+ designs crafted for our beloved clients."
        />

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Gallery category filter"
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              aria-pressed={activeCategory === cat.value}
              className={`px-5 py-2 rounded-full text-xs font-body font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-maroon text-gold-light shadow-maroon"
                  : "bg-ivory border border-gold/20 text-brown/70 hover:border-gold/50 hover:text-maroon"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
                  item.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : item.aspectRatio === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
                onClick={() => setLightboxItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setLightboxItem(item)}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.title} — ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-2"
                  style={{ background: "rgba(42, 10, 16, 0.6)" }}
                  aria-hidden="true"
                >
                  <ZoomIn className="w-8 h-8 text-gold" />
                  <p className="font-display text-ivory text-sm font-medium">{item.title}</p>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-body uppercase tracking-widest px-2.5 py-1 rounded-full bg-maroon/80 text-gold-light backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>

      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </section>
  );
}
