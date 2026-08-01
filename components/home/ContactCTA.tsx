"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function ContactCTA() {
  return (
    <section
      className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden"
      aria-label="Contact and booking call to action"
      style={{
        background: "linear-gradient(135deg, #6B1D2A 0%, #4A1020 60%, #3D2B1F 100%)",
      }}
    >
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-gold/8 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.5), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-luxury relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-5"
          >
            Ready to Begin?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-semibold text-ivory leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Let Us Create Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8C86D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Unforgettable
            </span>{" "}
            Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base font-body text-ivory/65 leading-relaxed mb-8 max-w-lg"
          >
            Your wedding day deserves the most beautiful mehndi. Book your consultation today
            and let us begin crafting the design of your dreams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/booking" className="btn-gold group">
              Book Your Appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Mehndi%20Élan!%20I'd%20like%20to%20make%20an%20enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-ivory border-ivory/30 hover:border-ivory/60 hover:bg-ivory/10"
              aria-label="Enquire on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Enquiry
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-gold/15"
          >
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-sm font-body text-ivory/60 hover:text-gold transition-colors group"
              aria-label={`Call ${SITE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm font-body text-ivory/60 hover:text-gold transition-colors"
              aria-label={`Email ${SITE_CONFIG.email}`}
            >
              {SITE_CONFIG.email}
            </a>
            <span className="text-sm font-body text-ivory/60">
              London & UK-Wide
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
