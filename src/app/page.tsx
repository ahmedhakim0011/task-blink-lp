import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemStrip } from "@/components/ProblemStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { ShieldInAction } from "@/components/ShieldInAction";
import { Features } from "@/components/Features";
import { Privacy } from "@/components/Privacy";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStrip />
        <HowItWorks />
        <ShieldInAction />
        <Features />
        <Privacy />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
