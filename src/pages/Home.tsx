import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <ImpactSection />
      <ServicesSection />
      <PrinciplesSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
}
