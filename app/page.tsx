import CTASection from "@/app/components/CTASection";
import DomainsSection from "@/app/components/DomainsSection";
import EventsSection from "@/app/components/EventsSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import HiringSection from "@/app/components/HiringSection";
import JourneySection from "@/app/components/JourneySection";
import Navbar from "@/app/components/Navbar";
import PlacementSection from "@/app/components/PlacementSection";
import ProjectsSection from "@/app/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DomainsSection />
        <JourneySection />
        <PlacementSection />
        <ProjectsSection />
        <HiringSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
