import { HeroModern } from "@/components/HeroModern";
import { Navigation } from "@/components/Navigation";
import { Demo } from "@/components/Demo";
import { Steps } from "@/components/Steps";
import { Features } from "@/components/Features";
import { PrivacySection } from "@/components/PrivacySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroModern />
      <Demo />
      <Steps />
      <Features />
      <PrivacySection />
      <Footer />
    </main>
  );
}
