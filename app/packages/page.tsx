import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Gem, Sparkles } from "lucide-react";
import { PACKAGES } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Bridal Mehndi Packages | Silver, Gold & Diamond",
  description:
    "Choose from our Silver Bloom, Gold Radiance, or Diamond Opulence bridal mehndi packages. Each includes home visits, premium henna, and aftercare kits. Bespoke pricing — enquire today.",
};

export default function PackagesPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 md:py-20 px-4 md:px-8 text-center" style={{ background: "linear-gradient(135deg, #4A1020 0%, #3D2B1F 100%)" }} aria-labelledby="packages-page-heading">
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-4">Bridal Collection</p>
        <h1 id="packages-page-heading" className="font-display font-semibold text-ivory leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Your Perfect Package Awaits
        </h1>
        <div className="h-px max-w-xs mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, rgba(201, 168, 76, 0.5), transparent)" }} aria-hidden="true" />
        <p className="text-base font-body text-ivory/65 max-w-2xl mx-auto">
          Whether you seek timeless elegance or the ultimate luxury, we have a package crafted for your dream day.
        </p>
      </section>

      {/* Packages */}
      <section className="section-padding" aria-label="Package options">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PACKAGES.map((pkg) => {
              const isGold = pkg.color === "gold";
              const isDiamond = pkg.color === "diamond";
              return (
                <article
                  key={pkg.id}
                  className="rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: isGold ? "linear-gradient(155deg, #4A1020 0%, #6B1D2A 60%, #4A1020 100%)" : isDiamond ? "linear-gradient(155deg, #2A1A10 0%, #3D2B1F 100%)" : "linear-gradient(155deg, #FDF8F2 0%, #FAF6F0 100%)",
                    border: isGold ? "1px solid rgba(201, 168, 76, 0.5)" : isDiamond ? "1px solid rgba(201, 168, 76, 0.2)" : "1px solid rgba(201, 168, 76, 0.15)",
                    boxShadow: isGold ? "0 8px 40px rgba(201, 168, 76, 0.3)" : "0 4px 24px rgba(58, 20, 10, 0.08)",
                  }}
                  aria-label={`${pkg.name} package`}
                >
                  {isGold && <div className="h-1" style={{ background: "linear-gradient(90deg, #C9A84C, #E8C86D, #C9A84C)" }} aria-hidden="true" />}
                  <div className="p-8 flex flex-col flex-1">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className={`text-xs font-body font-medium tracking-[0.25em] uppercase mb-1 ${isGold || isDiamond ? "text-gold/70" : "text-brown/50"}`}>{pkg.subtitle}</p>
                        <h2 className={`font-display font-semibold text-2xl ${isGold ? "text-ivory" : isDiamond ? "text-gold-light" : "text-maroon-dark"}`}>{pkg.name}</h2>
                      </div>
                      {isGold && <span className="flex items-center gap-1 text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #C9A84C, #E8C86D)", color: "#3D2B1F" }}><Sparkles className="w-3 h-3" />Popular</span>}
                      {isDiamond && <span className="flex items-center gap-1 text-[10px] font-body font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "rgba(201, 168, 76, 0.15)", color: "#C9A84C", border: "1px solid rgba(201, 168, 76, 0.3)" }}><Gem className="w-3 h-3" />Elite</span>}
                    </div>
                    <div className={`font-display font-bold text-4xl mb-1 ${isGold ? "text-gold-light" : isDiamond ? "text-gold" : "text-maroon"}`}>{pkg.price}</div>
                    <p className={`text-xs font-body mb-6 ${isGold ? "text-ivory/50" : isDiamond ? "text-ivory/40" : "text-brown/50"}`}>{pkg.priceNote}</p>
                    <div className="h-px mb-6" style={{ background: isGold ? "rgba(201, 168, 76, 0.25)" : isDiamond ? "rgba(201, 168, 76, 0.15)" : "rgba(201, 168, 76, 0.15)" }} aria-hidden="true" />
                    <ul className="flex flex-col gap-3 mb-8 flex-1" aria-label={`${pkg.name} includes`}>
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: isGold || isDiamond ? "rgba(201, 168, 76, 0.2)" : "rgba(107, 29, 42, 0.1)" }} aria-hidden="true">
                            <Check className={`w-2.5 h-2.5 ${isGold || isDiamond ? "text-gold" : "text-maroon"}`} />
                          </div>
                          <span className={`text-sm font-body leading-snug ${isGold ? "text-ivory/80" : isDiamond ? "text-ivory/70" : "text-brown/70"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/booking" className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-body font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 ${isGold ? "bg-gold text-brown hover:bg-gold-light shadow-gold" : isDiamond ? "bg-ivory/10 text-gold border border-gold/30 hover:bg-ivory/20" : "bg-maroon text-gold-light hover:bg-maroon-light shadow-maroon"}`}>
                      {pkg.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Comparison note */}
          <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: "rgba(201, 168, 76, 0.05)", border: "1px solid rgba(201, 168, 76, 0.15)" }}>
            <h3 className="font-display font-semibold text-xl text-maroon-dark mb-3">Not Sure Which Package Is Right for You?</h3>
            <p className="text-sm font-body text-brown/65 mb-5 max-w-lg mx-auto">Book a free 15-minute consultation and we'll help you choose the perfect option for your vision, timeline, and budget.</p>
            <Link href="/contact" className="btn-primary">Speak to Our Team <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
