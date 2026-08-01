import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact | Mehndi Élan",
  description: "Get in touch with Mehndi Élan. Call, WhatsApp, or email us. We offer home visits across London and the UK. Business hours: Mon–Sun.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 px-4 md:px-8 text-center" style={{ background: "linear-gradient(135deg, #FDF8F2 0%, #F5EDE0 100%)" }} aria-labelledby="contact-heading">
        <SectionHeader
          id="contact-heading"
          subtitle="Get in Touch"
          title="We'd Love to Hear From You"
          description="Reach out through any channel — we respond to all enquiries within 24 hours."
        />
      </section>

      <section className="section-padding" aria-label="Contact information">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-semibold text-2xl text-maroon-dark mb-8">Contact Details</h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Phone, label: "Phone / WhatsApp", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}`, ariaLabel: `Call us at ${SITE_CONFIG.phone}` },
                  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, ariaLabel: `Email us at ${SITE_CONFIG.email}` },
                  { icon: MapPin, label: "Service Area", value: "London & UK-Wide Home Visits", href: undefined, ariaLabel: "Service area: London and UK-wide" },
                  { icon: Clock, label: "Business Hours", value: `${SITE_CONFIG.businessHours.weekdays}\n${SITE_CONFIG.businessHours.weekends}`, href: undefined, ariaLabel: "Business hours" },
                ].map(({ icon: Icon, label, value, href, ariaLabel }) => (
                  <div key={label} className="flex items-start gap-4 luxury-card p-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201, 168, 76, 0.12)", border: "1px solid rgba(201, 168, 76, 0.2)" }} aria-hidden="true">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-body font-medium tracking-wide uppercase text-brown/50 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-body text-maroon-dark font-medium hover:text-gold transition-colors" aria-label={ariaLabel}>{value}</a>
                      ) : (
                        <p className="text-sm font-body text-brown/80 whitespace-pre-line" aria-label={ariaLabel}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #4A1020 0%, #6B1D2A 100%)", border: "1px solid rgba(201, 168, 76, 0.2)" }}>
                <p className="text-sm font-body text-ivory/80 mb-4">For the quickest response, message us directly on WhatsApp.</p>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello!%20I'd%20like%20to%20make%20an%20enquiry.`} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2 text-xs" aria-label="Open WhatsApp chat with Mehndi Élan">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Chat Now
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl text-maroon-dark mb-8">Service Areas</h2>
              <div className="rounded-2xl overflow-hidden mb-6" style={{ height: "280px", background: "linear-gradient(135deg, #F5EDE0 0%, #E8D5B7 100%)", border: "1px solid rgba(201, 168, 76, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gold mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-body text-brown/60">London & Surrounding Areas</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:underline mt-1 block">View on Google Maps →</a>
                </div>
              </div>

              <div>
                <p className="text-xs font-body font-medium tracking-[0.2em] uppercase text-brown/50 mb-4">We Serve These Areas</p>
                <div className="grid grid-cols-2 gap-2">
                  {SITE_CONFIG.serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(201, 168, 76, 0.06)", border: "1px solid rgba(201, 168, 76, 0.12)" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm font-body text-brown/70">{area}</span>
                    </div>
                  ))}
                  <div className="col-span-2 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(107, 29, 42, 0.06)", border: "1px solid rgba(107, 29, 42, 0.1)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-maroon flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-body text-brown/70">+ UK-Wide & International (travel charges apply)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
