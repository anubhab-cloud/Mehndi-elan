"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  Calendar, MessageCircle, Layout, Sparkles, Heart
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ElementType> = {
  calendar: Calendar,
  "message-circle": MessageCircle,
  layout: Layout,
  sparkles: Sparkles,
  heart: Heart,
};

export default function ProcessTimeline() {
  return (
    <section
      className="section-padding overflow-hidden"
      id="process"
      aria-labelledby="process-heading"
      style={{
        background: "linear-gradient(160deg, #4A1020 0%, #3D2B1F 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-luxury relative z-10">
        <SectionHeader
          id="process-heading"
          subtitle="The Experience"
          title={
            <>
              Your Journey to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8C86D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Beautiful Mehndi
              </span>
            </>
          }
          theme="dark"
        />

        <div className="relative">
          <div
            className="hidden md:block absolute top-16 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.3), transparent)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Calendar;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(201, 168, 76, 0.2), rgba(201, 168, 76, 0.05))",
                        border: "1px solid rgba(201, 168, 76, 0.35)",
                        boxShadow: "0 0 0 8px rgba(201, 168, 76, 0.05)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-body font-bold"
                      style={{
                        background: "linear-gradient(135deg, #C9A84C, #E8C86D)",
                        color: "#3D2B1F",
                      }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-ivory text-lg mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-body text-ivory/55 leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
