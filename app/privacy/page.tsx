import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mehndi Élan",
  description: "Mehndi Élan Privacy Policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 px-4 md:px-8" style={{ background: "linear-gradient(135deg, #FDF8F2 0%, #F5EDE0 100%)" }} aria-labelledby="privacy-heading">
        <div className="container-luxury max-w-3xl">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-4">Legal</p>
          <h1 id="privacy-heading" className="section-title mb-4">Privacy Policy</h1>
          <div className="h-px max-w-[80px] mb-8" style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }} aria-hidden="true" />
          <p className="text-sm font-body text-brown/60 mb-12">Last updated: January 2025</p>

          <div className="prose prose-sm max-w-none space-y-8">
            {[
              {
                title: "1. Who We Are",
                content: "Mehndi Élan is a luxury bridal mehndi and henna art business operated by Priya Sharma, based in London, United Kingdom. We take your privacy seriously and are committed to protecting your personal information.",
              },
              {
                title: "2. Information We Collect",
                content: "We collect information you provide when you make a booking enquiry, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, event date, and location. We do not collect sensitive personal information without your explicit consent.",
              },
              {
                title: "3. How We Use Your Information",
                content: "We use your information solely to: respond to your enquiries, confirm and manage your bookings, send appointment reminders and aftercare information, and (with your consent) share occasional news and offers. We do not sell, rent, or share your personal data with third parties for marketing purposes.",
              },
              {
                title: "4. Data Storage & Security",
                content: "Your data is stored securely and access is restricted to authorised personnel only. We use industry-standard encryption and security measures to protect your information from unauthorised access.",
              },
              {
                title: "5. Your Rights",
                content: "Under GDPR, you have the right to access, correct, or delete your personal data at any time. You may also withdraw consent for marketing communications. To exercise any of these rights, please contact us at hello@mehndi-elan.com.",
              },
              {
                title: "6. Cookies",
                content: "Our website uses essential cookies to function properly and analytical cookies to understand how visitors use our site. You may disable non-essential cookies through your browser settings.",
              },
              {
                title: "7. Contact",
                content: "For any privacy-related questions or requests, please contact our Data Protection point of contact at: hello@mehndi-elan.com",
              },
            ].map((section) => (
              <div key={section.title} className="luxury-card p-6">
                <h2 className="font-display font-semibold text-lg text-maroon-dark mb-3">{section.title}</h2>
                <p className="text-sm font-body text-brown/70 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary">Contact Us About Privacy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
