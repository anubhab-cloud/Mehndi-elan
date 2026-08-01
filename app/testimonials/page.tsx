import type { Metadata } from "next";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials | 1000+ Happy Brides",
  description: "Read what our brides, families, and event organisers say about Mehndi Élan. 1,000+ five-star reviews from clients across London and the UK.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 px-4 md:px-8 text-center" style={{ background: "linear-gradient(135deg, #FAF6F0 0%, #F5EDE0 100%)" }} aria-labelledby="testimonials-page-heading">
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-4">Client Stories</p>
        <h1 id="testimonials-page-heading" className="section-title mb-4">What Our Brides Say</h1>
        <div className="h-px max-w-xs mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} aria-hidden="true" />
        <p className="text-base font-body text-brown/60 max-w-xl mx-auto">Every review is a story of a special moment shared. These are the words that mean the world to us.</p>
      </section>

      {/* Carousel */}
      <TestimonialsSection />

      {/* All reviews grid */}
      <section className="section-padding" aria-label="All client testimonials">
        <div className="container-luxury">
          <h2 className="section-title text-center mb-12">All Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.id} className="luxury-card p-6 flex flex-col gap-3" aria-label={`Review from ${t.name}`}>
                <div className="flex gap-0.5" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < t.rating ? "text-gold" : "text-gold/25"}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display text-base italic text-brown/80 leading-relaxed flex-1">"{t.quote.substring(0, 180)}..."</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gold/15">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-ivory flex-shrink-0" style={{ background: "linear-gradient(135deg, #6B1D2A, #4A1020)" }} aria-hidden="true">{t.name.charAt(0)}</div>
                  <div>
                    <p className="text-sm font-body font-semibold text-maroon-dark">{t.name}</p>
                    <p className="text-xs font-body text-brown/50">{t.role} · {t.location} · {t.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/booking" className="btn-primary">Book Your Appointment <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
