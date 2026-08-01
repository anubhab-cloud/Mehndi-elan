"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: string;
  id?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  id,
  centered = true,
  theme = "light",
  className = "mb-14",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display font-semibold ${
          isDark ? "text-ivory" : "text-maroon-dark"
        } leading-tight mb-4`}
        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className={`h-px max-w-xs ${centered ? "mx-auto" : ""} mb-5`}
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.5), transparent)"
            : "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
        aria-hidden="true"
      />

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-base font-body ${
            isDark ? "text-ivory/65" : "text-brown/60"
          } max-w-2xl ${centered ? "mx-auto" : ""} leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
