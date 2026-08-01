import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { TRUST_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.artist} | Mehndi Élan`,
  description: `Meet ${SITE_CONFIG.artist}, master henna artist behind Mehndi Élan. Intricate, personalised, and elegant bridal henna designs etched in tradition.`,
};

const CREDENTIALS = [
  "12+ years professional henna experience",
  "Over 1,200 bridal sessions across the UK",
  "Specialist in Rajasthani, Arabic & Minimalist henna",
  "100% natural organic henna guaranteed",
  "Fully insured, UK-wide home visit service",
  "Trained in traditional Rajasthani mehndi techniques",
];

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-4 md:px-8"
        style={{ background: "linear-gradient(135deg, #FDFBF7 0%, #F5EDE0 100%)" }}
        aria-labelledby="about-heading"
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl"
                style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                <Image
                  src="/images/artist.png"
                  alt={`${SITE_CONFIG.artist}, master henna artist at Mehndi Élan`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32"
                  style={{ background: "linear-gradient(to top, rgba(74,16,32,0.3), transparent)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-xl hidden lg:block"
                style={{
                  background: "linear-gradient(135deg, #4A1020, #6B1D2A)",
                  border: "1px solid rgba(201,168,76,0.35)",
                }}
              >
                <p className="font-display font-bold text-4xl text-[#C9A84C] leading-none mb-1">12+</p>
                <p className="text-xs font-body text-[#FAF6EE]/70 tracking-wide">Years of Artistry</p>
              </div>

              {/* Decorative ring */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-[#C9A84C]/20 hidden lg:block"
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
                Meet the Artist
              </p>
              <h1
                id="about-heading"
                className="font-display font-semibold text-[#4A1020] leading-tight mb-4"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                {SITE_CONFIG.artist}
              </h1>
              <div
                className="h-px max-w-[80px] mb-8"
                style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                aria-hidden="true"
              />

              <div className="space-y-4 text-base font-body text-[#5C4538] leading-relaxed mb-8">
                <p>
                  Welcome to <strong className="text-[#4A1020]">Mehndi Élan</strong>. I am{" "}
                  <strong className="text-[#4A1020]">{SITE_CONFIG.artist}</strong>, a passionate henna
                  artist with over a decade of experience crafting bespoke bridal and festive henna.
                </p>
                <p>
                  Mehndi is an ancient form of body art that celebrates life&apos;s most precious milestones.
                  My philosophy combines deep Rajasthani tradition with modern Arabic negative-space
                  techniques to create wearable art that is as unique as your own story.
                </p>
                <p>
                  I use 100% natural, chemical-free organic henna to guarantee a rich burgundy stain
                  and a soothing, natural application experience — safe for all skin types.
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-10">
                {CREDENTIALS.map((cred) => (
                  <li key={cred} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-body text-[#3D2B1F]">{cred}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/booking" className="btn-primary">
                  Book Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/gallery" className="btn-secondary">
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ────────────────────────────────────────────── */}
      <section
        className="py-14 px-4 md:px-8"
        aria-label="Key statistics"
        style={{
          background: "linear-gradient(135deg, #4A1020 0%, #3D2B1F 100%)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-display font-bold text-3xl text-[#E8C86D]">{stat.value}</span>
                <span className="text-xs font-body text-[#FAF6EE]/60 tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────────────── */}
      <section className="section-padding px-4 md:px-8" aria-label="Our philosophy">
        <div className="container-luxury max-w-4xl text-center">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Our Philosophy</p>
          <h2
            className="font-display font-semibold text-[#4A1020] mb-6 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Tradition Meets Modern Artistry
          </h2>
          <div
            className="h-px max-w-xs mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "✦",
                title: "Heritage",
                description: "Rooted in centuries-old Rajasthani mehndi tradition, every design carries the weight of cultural artistry passed down through generations.",
              },
              {
                icon: "✦",
                title: "Craftsmanship",
                description: "Each session is a meditation. Hours of meticulous, hand-placed strokes to create designs that are uniquely yours.",
              },
              {
                icon: "✦",
                title: "Natural Purity",
                description: "We use only 100% natural organic henna — no chemicals, no PPD, no black henna. Beauty that is kind to your skin.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="luxury-card p-7 text-center"
              >
                <span className="text-2xl text-[#C9A84C] block mb-3" aria-hidden="true">{item.icon}</span>
                <h3 className="font-display font-semibold text-xl text-[#4A1020] mb-3">{item.title}</h3>
                <p className="text-sm font-body text-[#5C4538]/75 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 md:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #FAF6F0 0%, #F5EDE0 100%)" }}
        aria-label="Call to action"
      >
        <div className="container-luxury max-w-2xl">
          <Heart className="w-8 h-8 text-[#C9A84C] mx-auto mb-4" aria-hidden="true" />
          <h2
            className="font-display font-semibold text-[#4A1020] mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
          >
            Ready to Create Your Masterpiece?
          </h2>
          <p className="font-body text-[#5C4538]/70 text-base mb-8 leading-relaxed">
            Book a consultation and let&apos;s begin crafting mehndi that will be remembered forever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
