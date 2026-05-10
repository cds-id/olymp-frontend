import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { TrustStrip } from "./TrustStrip";
import { TierLadder } from "./TierLadder";
import { Programs } from "./Programs";
import { FeatureSplit } from "./FeatureSplit";
import { StatsBanner } from "./StatsBanner";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TrustStrip />
        <TierLadder />
        <Programs />
        <FeatureSplit />
        <StatsBanner />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
