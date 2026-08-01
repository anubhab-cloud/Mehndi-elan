"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { InstagramIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

const INSTAGRAM_POSTS = [
  { id: "ig1", bg: "#C9A84C", emoji: "🌸", caption: "Bridal perfection ✨" },
  { id: "ig2", bg: "#6B1D2A", emoji: "👐", caption: "Arabic elegance 🌿" },
  { id: "ig3", bg: "#3D2B1F", emoji: "💫", caption: "Minimal & modern" },
  { id: "ig4", bg: "#8B2535", emoji: "🎊", caption: "Festival vibes 🪔" },
  { id: "ig5", bg: "#A67C2E", emoji: "💍", caption: "Engagement magic 💛" },
  { id: "ig6", bg: "#4A1020", emoji: "🌺", caption: "Peacock dreams 🦚" },
  { id: "ig7", bg: "#5C3D2E", emoji: "✨", caption: "Royal bridal 👑" },
  { id: "ig8", bg: "#C9A84C", emoji: "🌹", caption: "Garden of grace" },
  { id: "ig9", bg: "#6B1D2A", emoji: "🕌", caption: "Heritage artistry" },
];

export default function InstagramFeed() {
  return (
    <section
      className="section-padding"
      id="instagram"
      aria-labelledby="instagram-heading"
      style={{ background: "linear-gradient(180deg, #FAF6F0 0%, #F5EDE0 100%)" }}
    >
      <div className="container-luxury">
        <SectionHeader
          id="instagram-heading"
          subtitle="@MehndiElan"
          title="Follow Our Journey"
          description="Daily design inspiration, behind-the-scenes moments, and bridal transformations. Join 50,000+ followers celebrating the art of mehndi."
        />

        {/* Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-3xl mx-auto">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer block"
              style={{ background: post.bg }}
              aria-label={`View Instagram post: ${post.caption}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3">
                <span className="text-4xl" role="img" aria-hidden="true">{post.emoji}</span>
                <p className="text-white/0 group-hover:text-white/90 text-[11px] font-body text-center transition-all duration-300 leading-tight">
                  {post.caption}
                </p>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.35)" }}
                aria-hidden="true"
              >
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            aria-label="Follow Mehndi Élan on Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
