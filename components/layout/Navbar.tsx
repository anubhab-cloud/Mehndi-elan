"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "GALLERY", href: "/gallery" },
  { label: "SERVICES", href: "/services" },
  { label: "PACKAGES", href: "/packages" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
  { label: "BOOKING", href: "/booking" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const leftNav = NAV_ITEMS.slice(0, 3);
  const rightNav = NAV_ITEMS.slice(3);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8] shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* ── Left Nav Links ───────────────────────── */}
        <div className="hidden md:flex items-center gap-7 text-xs font-serif font-medium tracking-[0.2em] uppercase">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors relative py-1 ${
                isActive(item.href)
                  ? "text-[#4A121A] font-bold"
                  : "text-[#5C4538] hover:text-[#4A121A]"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C05836] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* ── Center Logo ──────────────────────────── */}
        <Link href="/" className="flex flex-col items-center group">
          <Image
            src="/images/logo.png"
            alt="Mehndi Élan Logo"
            width={48}
            height={40}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* ── Right Nav Links ──────────────────────── */}
        <div className="hidden md:flex items-center gap-7 text-xs font-serif font-medium tracking-[0.2em] uppercase">
          {rightNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors relative py-1 ${
                isActive(item.href)
                  ? "text-[#4A121A] font-bold"
                  : "text-[#5C4538] hover:text-[#4A121A]"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C05836] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* ── Mobile Menu Button ───────────────────── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#4A121A] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-6 py-6 flex flex-col gap-4 text-xs font-serif font-medium tracking-[0.2em] uppercase">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 border-b border-[#E8DFC8]/50 last:border-0 ${
                isActive(item.href) ? "text-[#4A121A] font-bold" : "text-[#5C4538]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
