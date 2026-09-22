import { Hero } from "../components/sections/Hero";
import { StartHere } from "../components/sections/StartHere";
import { RecentItems } from "../components/sections/RecentItems";
import { HowItWorks } from "../components/sections/HowItWorks";
import { CTASection } from "../components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StartHere />
      <RecentItems />
      <HowItWorks />
      <CTASection />
    </main>
  );
}