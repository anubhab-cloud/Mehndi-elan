// Mehndi Élan — Home Page
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import DesignCollections from "@/components/home/DesignCollections";
import ServicesSection from "@/components/home/ServicesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import PackagesSection from "@/components/home/PackagesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FAQSection from "@/components/home/FAQSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <DesignCollections />
      <ServicesSection />
      <GalleryPreview />
      <PackagesSection />
      <TestimonialsSection />
      <ProcessTimeline />
      <FAQSection />
      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
