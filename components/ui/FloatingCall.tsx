"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// ─── Floating Call Button ──────────────────────────────────────────────────
// Positioned above the WhatsApp button
export default function FloatingCall() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-3 no-print"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white text-brown text-xs font-body font-medium px-3 py-2 rounded-xl shadow-luxury whitespace-nowrap"
                style={{ border: "1px solid rgba(201, 168, 76, 0.2)" }}
              >
                Call us now 📞
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={`tel:${SITE_CONFIG.phone}`}
            aria-label={`Call Mehndi Élan at ${SITE_CONFIG.phone}`}
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6B1D2A 0%, #4A1020 100%)",
              boxShadow: "0 4px 20px rgba(107, 29, 42, 0.4)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
          >
            <Phone className="w-5 h-5 text-gold-light" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
