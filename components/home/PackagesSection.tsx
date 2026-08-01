"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Gem, Sparkles } from "lucide-react";
import { PACKAGES } from "@/lib/data/packages";
import { SectionHeader } from "@/components/ui/SectionHeader";

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof PACKAGES)[number];
  index: number;
}) {
  const isGold = pkg.color === "gold";
  const isDiamond = pkg.color === "diamond";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${
        isGold ? "shadow-gold-lg" : "shadow-luxury hover:shadow-card-hover"
      }`}
      style={{
        background: isGold
          ? "linear-gradient(155deg, #4A1020 0%, #6B1D2A 60%, #4A1020 100%)"
          : isDiamond
          ? "linear-gradient(155deg, #2A1A10 0%, #3D2B1F 100%)"
          : "linear-gradient(155deg, #FDF8F2 0%, #FAF6F0 100%)",
        border: isGold
          ? "1px solid rgba(201, 168, 76, 0.5)"
          : isDiamond
          ? "1px solid rgba(201, 168, 76, 0.2)"
          : "1px solid rgba(201, 168, 76, 0.15)",
      }}
      aria-label={`${pkg.name} — ${pkg.subtitle}`}
    >
      {isGold && (
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #C9A84C, #E8C86D, #C9A84C)" }}
          aria-hidden="true"
        />
      )}

      {isGold && (
        <div className="absolute top-4 right-4">
          <span
            className="flex items-center gap-1 text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C86D)", color: "#3D2B1F" }}
          >
            <Sparkles className="w-3 h-3" aria-hidden="true" />
            Most Popular
          </span>
        </div>
      )}

      {isDiamond && (
        <div className="absolute top-4 right-4">
          <span
            className="flex items-center gap-1 text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "rgba(201, 168, 76, 0.15)", color: "#C9A84C", border: "1px solid rgba(201, 168, 76, 0.3)" }}
          >
            <Gem className="w-3 h-3" aria-hidden="true" />
            Exclusive
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        <div className="mb-5">
          <p
            className={`text-xs font-body font-medium tracking-[0.25em] uppercase mb-1 ${
              isGold ? "text-gold/70" : isDiamond ? "text-gold/70" : "text-brown/50"
            }`}
          >
            {pkg.subtitle}
          </p>
          <h3
            className={`font-display font-semibold text-2xl ${
              isGold ? "text-ivory" : isDiamond ? "text-gold-light" : "text-maroon-dark"
            }`}
          >
            {pkg.name}
          </h3>
        </div>

        <div className="mb-6">
          <div
            className={`font-display font-bold text-4xl mb-0.5 ${
              isGold ? "text-gold-light" : isDiamond ? "text-gold" : "text-maroon"
            }`}
          >
            {pkg.price}
          </div>
          <p
            className={`text-xs font-body ${
              isGold ? "text-ivory/50" : isDiamond ? "text-ivory/40" : "text-brown/50"
            }`}
          >
            {pkg.priceNote}
          </p>
        </div>

        <div
          className="h-px mb-6"
          style={{
            background: isGold
              ? "rgba(201, 168, 76, 0.25)"
              : isDiamond
              ? "rgba(201, 168, 76, 0.15)"
              : "rgba(201, 168, 76, 0.15)",
          }}
          aria-hidden="true"
        />

        <ul className="flex flex-col gap-3 mb-8 flex-1" aria-label={`${pkg.name} features`}>
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: isGold || isDiamond
                    ? "rgba(201, 168, 76, 0.2)"
                    : "rgba(107, 29, 42, 0.1)",
                }}
                aria-hidden="true"
              >
                <Check
                  className={`w-2.5 h-2.5 ${
                    isGold || isDiamond ? "text-gold" : "text-maroon"
                  }`}
                />
              </div>
              <span
                className={`text-sm font-body leading-snug ${
                  isGold ? "text-ivory/80" : isDiamond ? "text-ivory/70" : "text-brown/70"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href="/booking"
          className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-body font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 ${
            isGold
              ? "bg-gold text-brown hover:bg-gold-light shadow-gold"
              : isDiamond
              ? "bg-ivory/10 text-gold border border-gold/30 hover:bg-ivory/20"
              : "bg-maroon text-gold-light hover:bg-maroon-light shadow-maroon"
          }`}
        >
          {pkg.cta}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function PackagesSection() {
  return (
    <section
      className="section-padding"
      id="packages"
      aria-labelledby="packages-heading"
      style={{ background: "linear-gradient(180deg, #FAF6F0 0%, #F5EDE0 100%)" }}
    >
      <div className="container-luxury">
        <SectionHeader
          id="packages-heading"
          subtitle="Bridal Packages"
          title="Choose Your Experience"
          description="Every package is a promise of excellence. Pricing is bespoke — enquire today for a personalised quote tailored to your vision."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-body text-brown/45 mt-8 max-w-lg mx-auto"
        >
          All packages include home visits, premium henna cones, and aftercare kits.
          Custom packages available for groups and corporate events.{" "}
          <Link href="/contact" className="text-gold hover:underline">
            Contact us
          </Link>{" "}
          to discuss your requirements.
        </motion.p>
      </div>
    </section>
  );
}
