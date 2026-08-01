"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { FAQAccordionItem } from "@/components/ui/FAQAccordionItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const displayItems = FAQ_ITEMS.slice(0, 6);

  return (
    <section
      className="section-padding"
      id="faq"
      aria-labelledby="faq-heading"
      style={{ background: "linear-gradient(180deg, #FAF6F0 0%, #FDF8F2 100%)" }}
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              id="faq-heading"
              subtitle="Common Questions"
              title="Everything You Need to Know"
              description="We want your experience to be as seamless and joyful as the designs we create. Here are answers to our most frequently asked questions."
              centered={false}
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-xl p-5 flex flex-col gap-3 luxury-card"
            >
              <p className="text-sm font-body text-brown/70 leading-relaxed">
                Still have questions? Our team is happy to help.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="btn-primary py-2.5 px-5 text-xs">
                  Get in Touch
                </Link>
                <Link href="/faq" className="btn-secondary py-2.5 px-5 text-xs">
                  All FAQs
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div>
            <dl>
              {displayItems.map((item, i) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  index={i}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
