import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image optimization ─────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    deviceSizes: [375, 640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400, // 24 hours
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // ── Performance headers ────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

  // ── Compiler options ───────────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ── Power pack ─────────────────────────────────────────────────────
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
