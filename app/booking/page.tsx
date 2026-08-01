"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle, Calendar, User, Phone, Mail,
  MessageSquare, MapPin, Clock, ArrowRight
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

const SERVICES_OPTIONS = [
  "Bridal Mehndi (Full Package)",
  "Arabic Mehndi",
  "Indo-Arabic Fusion",
  "Minimal Mehndi",
  "Festival Mehndi",
  "Engagement Mehndi",
  "Baby Shower Mehndi",
  "Corporate & Events",
  "Not sure — need advice",
];

const PACKAGES_OPTIONS = [
  "Silver Bloom",
  "Gold Radiance (Most Popular)",
  "Diamond Opulence (Luxury)",
  "Custom / To Be Discussed",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) errs.name = "Full name is required.";
    if (!data.get("email")?.toString().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "A valid email address is required.";
    if (!data.get("phone")?.toString().trim()) errs.phone = "Phone number is required.";
    if (!data.get("date")) errs.date = "Event date is required.";
    if (!data.get("service")) errs.service = "Please select a service.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(e.currentTarget);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24 px-4 md:px-8 text-center"
        style={{ background: "linear-gradient(135deg, #FDFBF7 0%, #F5EDE0 100%)" }}
        aria-labelledby="booking-heading"
      >
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
          Reserve Your Date
        </p>
        <h1
          id="booking-heading"
          className="font-display font-semibold text-[#4A1020] leading-tight mb-4"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
        >
          Book an Appointment
        </h1>
        <div
          className="h-px max-w-xs mx-auto mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <p className="text-base font-body text-[#5C4538]/70 max-w-xl mx-auto leading-relaxed">
          Fill out the enquiry form below and {SITE_CONFIG.artist} will personally respond within 24 hours.
          Or reach out directly on WhatsApp for a faster reply.
        </p>

        {/* WhatsApp shortcut */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Mehndi%20Élan!%20I'd%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-body font-medium text-white transition-all duration-300 hover:scale-105"
          style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.3)" }}
          aria-label="Chat on WhatsApp for instant reply"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Chat on WhatsApp for Instant Reply
        </a>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <section className="section-padding px-4 md:px-8" aria-label="Booking form">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Form ─────────────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{ background: "#FFFFFF", border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 4px 30px rgba(58,20,10,0.08)" }}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "linear-gradient(135deg, #4A1020, #6B1D2A)", border: "2px solid rgba(201,168,76,0.4)" }}
                    >
                      <CheckCircle className="w-10 h-10 text-[#C9A84C]" aria-hidden="true" />
                    </div>
                    <h2 className="font-display font-semibold text-2xl text-[#4A1020] mb-3">
                      Booking Request Received!
                    </h2>
                    <p className="text-sm font-body text-[#5C4538]/70 leading-relaxed mb-2 max-w-md mx-auto">
                      Thank you. <strong>{SITE_CONFIG.artist}</strong> will personally respond to your
                      request within 24 hours.
                    </p>
                    <p className="text-xs font-body text-[#5C4538]/50 mb-8">
                      For urgent enquiries, WhatsApp us directly at{" "}
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#C9A84C] hover:underline">{SITE_CONFIG.phone}</a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <h2 className="font-display font-semibold text-xl text-[#4A1020] mb-6">
                      Enquiry Details
                    </h2>

                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`w-full pl-10 pr-4 py-3.5 rounded-xl border bg-white text-sm font-body text-[#3D2B1F] placeholder:text-[#5C4538]/35 focus:outline-none transition-colors ${
                            errors.name
                              ? "border-red-400 focus:border-red-500"
                              : "border-[#E8DFC8] focus:border-[#C9A84C]"
                          }`}
                        />
                      </div>
                      {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1.5 font-body">{errors.name}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`w-full pl-10 pr-4 py-3.5 rounded-xl border bg-white text-sm font-body text-[#3D2B1F] placeholder:text-[#5C4538]/35 focus:outline-none transition-colors ${
                              errors.email
                                ? "border-red-400 focus:border-red-500"
                                : "border-[#E8DFC8] focus:border-[#C9A84C]"
                            }`}
                          />
                        </div>
                        {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1.5 font-body">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+44 7700 000000"
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={`w-full pl-10 pr-4 py-3.5 rounded-xl border bg-white text-sm font-body text-[#3D2B1F] placeholder:text-[#5C4538]/35 focus:outline-none transition-colors ${
                              errors.phone
                                ? "border-red-400 focus:border-red-500"
                                : "border-[#E8DFC8] focus:border-[#C9A84C]"
                            }`}
                          />
                        </div>
                        {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1.5 font-body">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="date" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                          Event Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
                          <input
                            id="date"
                            name="date"
                            type="date"
                            required
                            aria-describedby={errors.date ? "date-error" : undefined}
                            className={`w-full pl-10 pr-4 py-3.5 rounded-xl border bg-white text-sm font-body text-[#3D2B1F] focus:outline-none transition-colors ${
                              errors.date
                                ? "border-red-400 focus:border-red-500"
                                : "border-[#E8DFC8] focus:border-[#C9A84C]"
                            }`}
                          />
                        </div>
                        {errors.date && <p id="date-error" className="text-red-500 text-xs mt-1.5 font-body">{errors.date}</p>}
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                          Event Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
                          <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="City / Venue"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E8DFC8] bg-white text-sm font-body text-[#3D2B1F] placeholder:text-[#5C4538]/35 focus:outline-none focus:border-[#C9A84C] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service & Package */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="service" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                          Service Required *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          aria-describedby={errors.service ? "service-error" : undefined}
                          className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm font-body text-[#3D2B1F] focus:outline-none transition-colors cursor-pointer ${
                            errors.service
                              ? "border-red-400 focus:border-red-500"
                              : "border-[#E8DFC8] focus:border-[#C9A84C]"
                          }`}
                        >
                          <option value="">Select a service…</option>
                          {SERVICES_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.service && <p id="service-error" className="text-red-500 text-xs mt-1.5 font-body">{errors.service}</p>}
                      </div>
                      <div>
                        <label htmlFor="package" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                          Preferred Package
                        </label>
                        <select
                          id="package"
                          name="package"
                          className="w-full px-4 py-3.5 rounded-xl border border-[#E8DFC8] bg-white text-sm font-body text-[#3D2B1F] focus:outline-none focus:border-[#C9A84C] transition-colors cursor-pointer"
                        >
                          <option value="">Select a package…</option>
                          {PACKAGES_OPTIONS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-body font-semibold tracking-wider text-[#4A1020] uppercase mb-2">
                        Special Requests / Design Ideas
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C9A84C]/60 pointer-events-none" aria-hidden="true" />
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your event, design inspiration, number of guests, or any other details…"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8DFC8] bg-white text-sm font-body text-[#3D2B1F] placeholder:text-[#5C4538]/35 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Submitting…
                        </span>
                      ) : (
                        <>
                          Confirm Booking Request
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs font-body text-center text-[#5C4538]/45 leading-relaxed">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Policy</Link>.
                      We respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── Sidebar ───────────────────────────────────────────── */}
            <div className="flex flex-col gap-5">
              {/* Contact info card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, #4A1020, #6B1D2A)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <h3 className="font-display font-semibold text-[#FAF6EE] text-lg mb-5">
                  Prefer to Talk?
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Mehndi%20Élan!%20I'd%20like%20to%20book.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    aria-label="Chat on WhatsApp"
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.25)" }}>
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-[#FAF6EE]/50 uppercase tracking-wide">WhatsApp</p>
                      <p className="text-sm font-body text-[#FAF6EE]/90 group-hover:text-[#E8C86D] transition-colors">
                        Instant reply
                      </p>
                    </div>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Call ${SITE_CONFIG.phone}`}
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <Phone className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-[#FAF6EE]/50 uppercase tracking-wide">Call</p>
                      <p className="text-sm font-body text-[#FAF6EE]/90 group-hover:text-[#E8C86D] transition-colors">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Email ${SITE_CONFIG.email}`}
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <Mail className="w-4 h-4 text-[#C9A84C]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-[#FAF6EE]/50 uppercase tracking-wide">Email</p>
                      <p className="text-sm font-body text-[#FAF6EE]/90 group-hover:text-[#E8C86D] transition-colors break-all">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 4px 20px rgba(58,20,10,0.06)" }}
              >
                <Clock className="w-5 h-5 text-[#C9A84C] mb-3" aria-hidden="true" />
                <h3 className="font-display font-semibold text-[#4A1020] text-base mb-3">Business Hours</h3>
                <div className="flex flex-col gap-1.5 text-sm font-body text-[#5C4538]/70">
                  <p>{SITE_CONFIG.businessHours.weekdays}</p>
                  <p>{SITE_CONFIG.businessHours.weekends}</p>
                </div>
              </div>

              {/* Why book card */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#FDFBF7", border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <h3 className="font-display font-semibold text-[#4A1020] text-base mb-4">Why Book With Us?</h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "24-hr response guaranteed",
                    "Free design consultation",
                    "UK-wide home visits",
                    "100% natural organic henna",
                    "1,200+ happy brides",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" aria-hidden="true" />
                      <span className="text-xs font-body text-[#5C4538]/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
