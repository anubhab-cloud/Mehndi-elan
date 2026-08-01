"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ArrowRight } from "lucide-react";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryCategory } from "@/lib/data/gallery";
import { LightboxModal, type LightboxItem } from "@/components/ui/LightboxModal";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FDFBF7] min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24 px-4 md:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #FDFBF7 0%, #F5EDE0 100%)" }}
        aria-labelledby="gallery-page-heading"
      >
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
          Portfolio
        </p>
        <h1
          id="gallery-page-heading"
          className="font-display font-semibold text-[#4A1020] leading-tight mb-4"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
        >
          The Art We Create
        </h1>
        <div
          className="h-px max-w-xs mx-auto mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <p className="text-base font-body text-[#5C4538]/70 max-w-xl mx-auto leading-relaxed">
          A curated selection from 5,000+ designs crafted for our beloved clients. Each piece
          is unique — a reflection of your story, your style, your day.
        </p>
      </section>

      {/* ── Filters ───────────────────────────────────────────────── */}
      <section className="px-4 md:px-8 py-8" aria-label="Gallery filters">
        <div className="container-luxury">
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            role="group"
            aria-label="Filter gallery by category"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                aria-pressed={activeCategory === cat.value}
                className={`px-5 py-2.5 rounded-full text-xs font-body font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-[#4A1020] text-[#E8C86D] shadow-md"
                    : "bg-white border border-[#C9A84C]/25 text-[#5C4538] hover:border-[#C9A84C]/60 hover:text-[#4A1020]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

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
                  className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-md ${
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
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-2"
                    style={{ background: "rgba(42, 10, 16, 0.65)" }}
                    aria-hidden="true"
                  >
                    <ZoomIn className="w-8 h-8 text-[#C9A84C]" />
                    <p className="font-display text-[#FAF6EE] text-sm font-medium">{item.title}</p>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-body uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#3D0E15]/80 text-[#E8C86D] backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-[#5C4538]/50 text-base">No designs in this category yet. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-16">
            <p className="font-body text-[#5C4538]/60 text-sm mb-6">
              Ready to have your own bespoke design created?
            </p>
            <Link href="/booking" className="btn-primary">
              Book Your Session <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}
