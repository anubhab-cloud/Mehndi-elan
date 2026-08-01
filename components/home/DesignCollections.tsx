"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const COLLECTIONS = [
  {
    id: 1,
    number: "1",
    title: "BRIDAL MAJESTY",
    description: "Intricate traditional patterns for your special day",
    image: "/images/card-1.png",
    link: "/gallery?category=bridal",
  },
  {
    id: 2,
    number: "2",
    title: "ARABIC & MINIMALIST",
    description: "Delicate modern accents and quick patterns",
    image: "/images/card-2.png",
    link: "/gallery?category=arabic",
  },
  {
    id: 3,
    number: "3",
    title: "FESTIVE Mandalas",
    description: "Traditional designs for Diwali, Eid, and celebrations",
    image: "/images/card-3.png",
    link: "/gallery?category=festival",
  },
];

export default function DesignCollections() {
  return (
    <section className="relative bg-[#FAF6EE] py-16 md:py-24 overflow-hidden">
      {/* Henna watermark pattern (bottom right) */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='250' cy='250' r='180' stroke='%23C05836' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='250' cy='250' r='120' stroke='%23C29B47' stroke-width='1' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#C29B47] text-sm">❖</span>
            <h2 className="font-serif text-[#4A121A] text-2xl md:text-3xl font-semibold tracking-[0.15em] uppercase">
              DESIGN COLLECTIONS
            </h2>
            <span className="text-[#C29B47] text-sm">❖</span>
          </div>
        </div>

        {/* ── 3 Cards Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COLLECTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link href={item.link} className="block group">
                <div className="collection-card overflow-hidden rounded-2xl bg-[#3D0E15] flex flex-col">
                  {/* Image container with number badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Top Left Gold Number Badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-sm bg-[#C29B47] flex items-center justify-center text-[#3D2B1F] font-serif font-bold text-sm shadow-md">
                      {item.number}
                    </div>
                  </div>

                  {/* Dark Maroon Footer Box */}
                  <div className="bg-[#3D0E15] p-5 text-center flex-1 flex flex-col justify-center border-t border-[#4A121A]">
                    <h3 className="font-serif text-[#FAF6EE] text-base md:text-lg font-semibold tracking-wider uppercase mb-1.5 group-hover:text-[#E8C86D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#E8D5B7]/80 text-xs font-sans font-normal leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
