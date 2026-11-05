import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsBanner from "@/components/MetricsBanner";
import BentoGrid from "@/components/BentoGrid";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import EcosystemSection from "@/components/EcosystemSection";
import RoiCalculator from "@/components/RoiCalculator";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-[#f5f5f7] selection:bg-blue-500/30 selection:text-white">
      {/* Apple-style sticky frosted navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section with Interactive 3D/Titanium iPhone Mockup & Live Dynamic Island */}
        <Hero />

        {/* Spec Benchmarks & Key Metrics */}
        <MetricsBanner />

        {/* Apple Keynote Style Bento Grid */}
        <BentoGrid />

        {/* Interactive Feature Deep Dive & Scanner Sandbox */}
        <FeatureDeepDive />

        {/* Unified Apple Ecosystem (iPhone, Mac, iPad, Watch, Vision Pro) */}
        <EcosystemSection />

        {/* Interactive ROI & Labor Savings Calculator */}
        <RoiCalculator />

        {/* Transparent Apple-style Pricing Tiers */}
        <PricingSection />

        {/* Customer Stories & Enterprise Wall of Love */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Grand Keynote Finale CTA */}
        <CtaSection />
      </main>

      {/* Apple-style Minimalist Footer */}
      <Footer />
    </div>
  );
}
