"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100svh-64px)] flex items-center"
      style={{ background: "linear-gradient(135deg, #FDFBF7 0%, #FAF6EE 60%, #F5EDE0 100%)" }}
    >
      {/* Decorative henna mandala SVG — left */}
      <div
        className="absolute top-[-60px] left-[-80px] w-[480px] h-[480px] pointer-events-none opacity-[0.07] z-0 hidden lg:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='480' height='480' viewBox='0 0 480 480' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='240' cy='240' r='220' stroke='%23C9A84C' stroke-width='1.5'/%3E%3Ccircle cx='240' cy='240' r='170' stroke='%23C9A84C' stroke-width='1' stroke-dasharray='5 5'/%3E%3Ccircle cx='240' cy='240' r='120' stroke='%23C9A84C' stroke-width='1'/%3E%3Ccircle cx='240' cy='240' r='70' stroke='%23C9A84C' stroke-width='1' stroke-dasharray='3 3'/%3E%3Ccircle cx='240' cy='240' r='25' stroke='%23C9A84C' stroke-width='1.5'/%3E%3Cpath d='M240 20 L240 460 M20 240 L460 240 M70 70 L410 410 M410 70 L70 410' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Decorative henna flourish — bottom right */}
      <div
        className="absolute bottom-[-40px] right-[-40px] w-[340px] h-[340px] pointer-events-none opacity-[0.06] z-0 hidden lg:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='300' cy='300' r='200' stroke='%23C05836' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='300' cy='300' r='130' stroke='%23C29B47' stroke-width='1' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <div className="container-luxury relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* ── Left Content ─────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Brand label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-px w-10"
                  style={{ background: "linear-gradient(90deg, transparent, #C9A84C)" }}
                  aria-hidden="true"
                />
                <span className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold">
                  Luxury Bridal Henna · London & UK-Wide
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-[#4A1020] font-semibold leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}>
                Where Every Stroke
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #4A1020 0%, #6B1D2A 50%, #4A1020 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Tells Your Story
                </span>
              </h1>

              {/* Ornamental divider */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#C9A84C] text-sm" aria-hidden="true">✦</span>
                <div className="h-px flex-1 max-w-[120px]"
                  style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
                  aria-hidden="true"
                />
                <span className="text-[#C9A84C] text-sm" aria-hidden="true">✦</span>
              </div>

              {/* Subtitle */}
              <p className="font-body text-[#5C4538] text-base sm:text-lg max-w-lg leading-relaxed mb-10">
                Intricate, personalised bridal henna by <strong className="text-[#4A1020] font-semibold">{SITE_CONFIG.artist}</strong>.
                Bespoke designs crafted with 100% natural, organic henna for your most treasured moments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link href="/gallery" className="btn-primary">
                  Explore Gallery
                </Link>
                <Link href="/booking" className="btn-secondary">
                  Book Your Date
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E8DFC8]">
                {[
                  { value: "1,200+", label: "Happy Brides" },
                  { value: "12+", label: "Years Experience" },
                  { value: "4.9★", label: "Google Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-display font-semibold text-xl text-[#4A1020]">{stat.value}</span>
                    <span className="text-xs font-body text-[#5C4538]/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Hero Image ─────────────────────────────────── */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-[-12px] rounded-[2rem] pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(192,88,54,0.08))" }}
              aria-hidden="true"
            />

            <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] w-full shadow-2xl"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
              <Image
                src="/images/hero-hands.png"
                alt="Intricate bridal mehndi on hands with gold bangles by Mehndi Élan"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Soft left fade for large screens */}
              <div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                  background: "linear-gradient(to right, rgba(253,251,247,0.5) 0%, transparent 30%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-8 -left-6 rounded-2xl px-5 py-4 shadow-xl hidden lg:flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #4A1020, #6B1D2A)",
                border: "1px solid rgba(201,168,76,0.35)",
              }}
            >
              <div className="flex flex-col">
                <span className="font-display font-semibold text-2xl text-[#E8C86D] leading-none">100%</span>
                <span className="text-[10px] font-body text-[#FAF6EE]/70 tracking-wide mt-0.5">Natural Organic</span>
                <span className="text-[10px] font-body text-[#FAF6EE]/70 tracking-wide">Henna Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
