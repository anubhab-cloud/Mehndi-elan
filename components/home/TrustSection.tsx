"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Heart, Award, Palette, Star, Home } from "lucide-react";
import { TRUST_STATS } from "@/lib/constants";

// ─── Animated Counter Hook ─────────────────────────────────────────────────
function useCounter(target: string, isVisible: boolean) {
  const [count, setCount] = useState(0);
  // Only animate simple integers like "1000+", "5000+", "10+"
  const isIntegerTarget = /^\d+\+?$/.test(target.trim());
  const numericTarget = isIntegerTarget ? parseInt(target.replace(/\D/g, ""), 10) : 0;

  useEffect(() => {
    if (!isVisible || !isIntegerTarget || isNaN(numericTarget) || numericTarget === 0) return;
    let start = 0;
    const duration = 1600;
    const step = Math.max(1, Math.floor(numericTarget / 50));
    const interval = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / (numericTarget / step));
    return () => clearInterval(interval);
  }, [isVisible, numericTarget, isIntegerTarget]);

  return { count, isIntegerTarget };
}

// ─── Individual Stat Card ──────────────────────────────────────────────────
function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof TRUST_STATS)[number];
  index: number;
  isVisible: boolean;
}) {
  const IconMap: Record<string, React.ElementType> = {
    heart: Heart,
    award: Award,
    palette: Palette,
    star: Star,
    home: Home,
  };
  const Icon = IconMap[stat.icon] || Star;
  const { count, isIntegerTarget } = useCounter(stat.value, isVisible);
  const prefix = stat.value.match(/^[^\d]*/)?.[0] || "";
  const suffix = stat.value.match(/[^\d]*$/)?.[0] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg, rgba(201, 168, 76, 0.15), rgba(201, 168, 76, 0.05))",
          border: "1px solid rgba(201, 168, 76, 0.25)",
        }}
        aria-hidden="true"
      >
        <Icon className="w-5 h-5 text-gold" />
      </div>

      {/* Value */}
      <div className="font-display font-semibold text-3xl md:text-4xl text-maroon-dark leading-none mb-1">
        {isIntegerTarget ? (
          <span aria-label={stat.value}>
            {prefix}{count.toLocaleString()}{suffix}
          </span>
        ) : (
          <span>{stat.value}</span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm font-body text-brown/60 font-medium">{stat.label}</p>
    </motion.div>
  );
}

// ─── Trust Section ─────────────────────────────────────────────────────────
export default function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-16 overflow-hidden"
      aria-label="Trust statistics"
      style={{
        background: "linear-gradient(135deg, #FAF6F0 0%, #F5EDE0 100%)",
        borderTop: "1px solid rgba(201, 168, 76, 0.2)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-luxury px-4 md:px-8 relative z-10">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="flex justify-center gap-1 mb-6"
          aria-label="5 star rating"
        >
          {[1, 2, 3, 4, 5].map((s) => (
            <svg
              key={s}
              className="w-5 h-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {TRUST_STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 h-px mx-auto max-w-xs"
          style={{
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
