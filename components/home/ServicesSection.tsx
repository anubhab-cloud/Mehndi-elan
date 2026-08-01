"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart, Flower, Layers, Feather, Sparkles,
  Star, Baby, Briefcase, ArrowRight
} from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = ICON_MAP[service.icon] || Star;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative luxury-card p-6 cursor-pointer"
      tabIndex={0}
      aria-label={`${service.title} — ${service.duration}`}
    >
      {service.tag && (
        <span
          className="absolute -top-3 -right-3 text-[10px] font-body font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
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

      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{
          background: "linear-gradient(135deg, rgba(201, 168, 76, 0.12), rgba(201, 168, 76, 0.04))",
          border: "1px solid rgba(201, 168, 76, 0.2)",
        }}
        aria-hidden="true"
      >
        <Icon className="w-6 h-6 text-gold transition-colors group-hover:text-gold-dark" />
      </div>

      <h3 className="font-display font-semibold text-xl text-maroon-dark mb-2 group-hover:text-maroon transition-colors">
        {service.title}
      </h3>

      <span className="inline-block text-[11px] font-body text-gold-dark bg-gold/10 px-2.5 py-0.5 rounded-full mb-3 tracking-wide">
        {service.duration}
      </span>

      <p className="text-sm font-body text-brown/65 leading-relaxed">
        {service.description}
      </p>

      <div className="flex items-center gap-1.5 mt-4 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <span className="text-xs font-body font-medium tracking-wide">Learn more</span>
        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #C9A84C, #E8C86D, #C9A84C)" }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="section-padding"
      id="services"
      aria-labelledby="services-heading"
      style={{ background: "linear-gradient(180deg, #FDF8F2 0%, #FAF6F0 100%)" }}
    >
      <div className="container-luxury">
        <SectionHeader
          id="services-heading"
          subtitle="Our Craft"
          title="Artistry for Every Occasion"
          description="From intimate bridal sessions to grand corporate events, every design is thoughtfully crafted to reflect your unique story and style."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <Link key={service.id} href={`/services#${service.id}`} className="block no-underline">
              <ServiceCard service={service} index={i} />
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary">
            Explore All Services
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
