"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { type FAQItem as FAQItemType } from "@/lib/data/faq";

interface FAQAccordionItemProps {
  item: FAQItemType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: FAQAccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="border-b border-gold/15 last:border-0"
    >
      <dt>
        <button
          onClick={onToggle}
          className={`w-full flex items-start justify-between gap-4 py-5 text-left transition-colors duration-200 ${
            isOpen ? "text-maroon" : "text-brown hover:text-maroon"
          }`}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
          id={`faq-btn-${item.id}`}
        >
          <div className="flex items-start gap-3">
            <span
              className="text-[9px] font-body font-bold tracking-widest uppercase px-2 py-0.5 rounded mt-0.5 flex-shrink-0"
              style={{
                background: "rgba(201, 168, 76, 0.1)",
                color: "#A67C2E",
                border: "1px solid rgba(201, 168, 76, 0.2)",
              }}
            >
              {item.category}
            </span>
            <span className="font-display font-medium text-lg leading-snug">{item.question}</span>
          </div>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5 ${
              isOpen
                ? "bg-maroon text-gold-light rotate-45"
                : "bg-gold/10 text-maroon hover:bg-gold/20"
            }`}
            aria-hidden="true"
          >
            <Plus className="w-4 h-4" />
          </div>
        </button>
      </dt>
      <dd id={`faq-answer-${item.id}`} role="region" aria-labelledby={`faq-btn-${item.id}`}>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="pb-5 pl-16 pr-4">
                <p className="text-sm font-body text-brown/65 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </dd>
    </motion.div>
  );
}
