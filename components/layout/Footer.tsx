import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/Icons";

const FOOTER_LINKS = {
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  services: [
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Booking", href: "/booking" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3D0E15] text-[#FAF6EE]">
      {/* Top divider with gold gradient */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #C9A84C 40%, #E8C86D 50%, #C9A84C 60%, transparent 100%)" }}
        aria-hidden="true"
      />

      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* ── Brand Column ────────────────────────── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <Image
                src="/images/logo.png"
                alt="Mehndi Élan Logo"
                width={44}
                height={36}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-wider text-[#FAF6EE] leading-tight">
                  Mehndi Élan
                </p>
                <p className="text-[10px] font-body tracking-[0.2em] uppercase text-[#E8D5B7]/50">
                  Artistry Etched in Tradition
                </p>
              </div>
            </Link>
            <p className="text-sm font-body text-[#E8D5B7]/60 leading-relaxed mb-6 max-w-xs">
              Luxury bridal mehndi and contemporary henna art by {SITE_CONFIG.artist}. Crafted with love, precision, and 100% natural henna.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mehndi Élan on Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <InstagramIcon className="w-4 h-4 text-[#C9A84C]" />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mehndi Élan on Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <FacebookIcon className="w-4 h-4 text-[#C9A84C]" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Mehndi%20Élan!%20I'd%20like%20to%20make%20an%20enquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Mehndi Élan on WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.2)" }}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
            </div>
          </div>

          {/* ── Quick Links ─────────────────────────── */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-[#E8D5B7]/65 hover:text-[#E8C86D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40 group-hover:bg-[#E8C86D] transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ────────────────────────────── */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-[#E8D5B7]/65 hover:text-[#E8C86D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40 group-hover:bg-[#E8C86D] transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-[#E8D5B7]/65 hover:text-[#E8C86D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C]/40 group-hover:bg-[#E8C86D] transition-colors" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ─────────────────────────────── */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Call ${SITE_CONFIG.phone}`}
                >
                  <Phone className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-body text-[#E8D5B7]/65 group-hover:text-[#E8C86D] transition-colors">
                    {SITE_CONFIG.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Email ${SITE_CONFIG.email}`}
                >
                  <Mail className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-body text-[#E8D5B7]/65 group-hover:text-[#E8C86D] transition-colors break-all">
                    {SITE_CONFIG.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-body text-[#E8D5B7]/65">
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm font-body text-[#E8D5B7]/65 leading-relaxed">
                  <p>{SITE_CONFIG.businessHours.weekdays}</p>
                  <p>{SITE_CONFIG.businessHours.weekends}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
        >
          <p className="text-xs font-body text-[#E8D5B7]/40 text-center sm:text-left">
            © {currentYear} Mehndi Élan — {SITE_CONFIG.artist}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-3 h-3 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-body text-[#E8D5B7]/40 ml-1">4.9/5 · 240+ reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
