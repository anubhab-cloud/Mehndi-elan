"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeader } from "@/components/ui/SectionHeader";

// ─── Testimonials Section ──────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goNext, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  const current = TESTIMONIALS[active];

  return (
    <section
      className="section-padding overflow-hidden relative"
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{ background: "linear-gradient(180deg, #F5EDE0 0%, #FAF6F0 100%)" }}
    >
      {/* Decorative background quote watermark */}
      <div
        className="absolute top-12 left-12 font-display text-[200px] leading-none text-gold/5 pointer-events-none select-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="container-luxury relative z-10">
        <SectionHeader
          id="testimonials-heading"
          subtitle="Client Love"
          title="Words From Our Brides"
        />

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="rounded-2xl p-8 md:p-12 relative luxury-card"
              role="blockquote"
              aria-live="polite"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-5 fill-current" aria-hidden="true" />
              <StarRating rating={current.rating} />

              <p className="font-display text-xl md:text-2xl text-maroon-dark font-medium italic leading-relaxed mt-4 mb-6">
                "{current.quote}"
              </p>

              <span
                className="inline-block text-[10px] font-body font-medium tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-5 text-gold-dark"
                style={{ background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.2)" }}
              >
                {current.serviceType}
              </span>

              <div className="flex items-center gap-4 pt-4 border-t border-gold/15">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-semibold text-lg text-ivory flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #6B1D2A, #4A1020)" }}
                  aria-hidden="true"
                >
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-maroon-dark text-sm">{current.name}</p>
                  <p className="text-xs font-body text-brown/55">
                    {current.role} · {current.location} · {current.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/25 text-maroon hover:bg-gold/10 hover:border-gold/50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-gold/25 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/25 text-maroon hover:bg-gold/10 hover:border-gold/50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-12 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-body font-semibold text-brown/80">Google Reviews</span>
          </div>
          <StarRating rating={5} />
          <span className="text-sm font-body text-brown/60 font-medium">
            <strong className="text-maroon-dark">4.9</strong>/5 · 240+ verified reviews
          </span>
        </motion.div>
      </div>
    </section>
  );
}
