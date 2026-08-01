"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export interface LightboxItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category?: string;
}

interface LightboxModalProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Gallery Image: ${item.title}`}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative max-w-5xl w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-luxury bg-[#1A0A0A]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={1400}
            height={900}
            className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            priority
          />
          {/* Caption */}
          <div
            className="absolute bottom-0 left-0 right-0 p-5"
            style={{
              background: "linear-gradient(to top, rgba(42,10,16,0.9), transparent)",
            }}
          >
            <p className="font-display font-semibold text-ivory text-xl">{item.title}</p>
            {item.category && (
              <p className="text-xs font-body text-gold-light/70 capitalize mt-0.5">
                {item.category}
              </p>
            )}
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brown/70 flex items-center justify-center text-ivory hover:bg-maroon transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
