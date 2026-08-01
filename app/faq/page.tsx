"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/data/faq";
import { FAQAccordionItem } from "@/components/ui/FAQAccordionItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="pt-24">
      <section
        className="py-16 md:py-20 px-4 md:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #FAF6F0 0%, #F5EDE0 100%)" }}
        aria-labelledby="faq-page-heading"
      >
        <SectionHeader
          id="faq-page-heading"
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before your appointment. Can't find your answer? Contact us directly."
        />
      </section>

      <section className="section-padding" aria-label="FAQ accordion">
        <div className="container-luxury max-w-3xl">
          <dl className="luxury-card p-6 md:p-10">
            {FAQ_ITEMS.map((item, i) => (
              <FAQAccordionItem
                key={item.id}
                item={item}
                index={i}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </dl>

          <div className="text-center mt-10">
            <p className="text-sm font-body text-brown/60 mb-4">Still have a question?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/booking" className="btn-secondary">Book Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
