import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Leaf } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import {
  Heart, Flower, Layers, Feather, Sparkles,
  Star, Baby, Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Henna Services | Mehndi Élan",
  description:
    "Bridal mehndi, Arabic henna, indo-arabic fusion, minimal mehndi, festival henna, and more. Bespoke services by Priya Sharma. London & UK-wide.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  heart: Heart,
  flower: Flower,
  layers: Layers,
  feather: Feather,
  sparkles: Sparkles,
  ring: Star,
  baby: Baby,
  briefcase: Briefcase,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24 px-4 md:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #FDFBF7 0%, #F5EDE0 100%)" }}
        aria-labelledby="services-page-heading"
      >
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
          Our Craft
        </p>
        <h1
          id="services-page-heading"
          className="font-display font-semibold text-[#4A1020] leading-tight mb-4"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
        >
          Artistry for Every Occasion
        </h1>
        <div
          className="h-px max-w-xs mx-auto mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <p className="text-base font-body text-[#5C4538]/70 max-w-xl mx-auto leading-relaxed">
          From intimate bridal sessions to grand celebrations, every design is thoughtfully crafted
          with 100% natural, organic henna.
        </p>

        {/* Natural henna badge */}
        <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs font-body font-medium text-[#4A1020]"
          style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <Leaf className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
          100% Natural & Organic Henna · Safe for All Skin Types
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────── */}
      <section className="section-padding px-4 md:px-8" aria-label="All services">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 max-w-5xl mx-auto">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Star;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="luxury-card p-7 flex gap-5 items-start group hover:-translate-y-1 transition-transform duration-300"
                  aria-label={`${service.title} — ${service.duration}`}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h2 className="font-display font-semibold text-xl text-[#4A1020] leading-tight group-hover:text-[#6B1D2A] transition-colors">
                        {service.title}
                      </h2>
                      {service.tag && (
                        <span
                          className="text-[10px] font-body font-bold tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: service.popular
                              ? "linear-gradient(135deg, #C9A84C, #E8C86D)"
                              : "linear-gradient(135deg, #6B1D2A, #8B2535)",
                            color: service.popular ? "#3D2B1F" : "#FAF6F0",
                          }}
                        >
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 mb-3">
                      <Clock className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
                      <span className="text-xs font-body font-medium text-[#C9A84C]">
                        {service.duration}
                      </span>
                    </div>

                    <p className="text-sm font-body text-[#5C4538]/70 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <Link
                      href="/booking"
                      className="inline-flex items-center gap-1.5 text-xs font-body font-semibold tracking-wider uppercase text-[#4A1020] hover:text-[#C9A84C] transition-colors group/link"
                    >
                      Book this service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #4A1020 0%, #6B1D2A 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Not Sure What to Choose?
            </p>
            <h2
              className="font-display font-semibold text-[#FAF6EE] mb-3 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Book a Free Consultation
            </h2>
            <p className="text-sm font-body text-[#FAF6EE]/60 mb-6 max-w-lg mx-auto leading-relaxed">
              Tell us about your event and we&apos;ll recommend the perfect service tailored to your
              style, timeline, and vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="btn-gold">
                Book Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/packages" className="btn-secondary text-[#FAF6EE]/80 border-[#FAF6EE]/25 hover:bg-[#FAF6EE]/10 hover:border-[#FAF6EE]/40">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
