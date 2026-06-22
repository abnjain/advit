import CTASection from "@/app/components/CTASection";
import DomainsSection from "@/app/components/DomainsSection";
import EventsSection from "@/app/components/EventsSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import HiringSection from "@/app/components/HiringSection";
import JourneySection from "@/app/components/JourneySection";
import LifeAtAdvitHubSection from "@/app/components/LifeAtAdvitHubSection";
import Navbar from "@/app/components/Navbar";
// import PlacementSection from "@/app/components/PlacementSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import BrochureSection from "@/app/components/BrochureSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DomainsSection />
        <JourneySection />
        <BrochureSection />
        <LifeAtAdvitHubSection />
        {/* <PlacementSection /> */}
        <ProjectsSection />
        <HiringSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
