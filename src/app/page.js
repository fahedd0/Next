import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import RoadmapSection from '../components/RoadmapSection';
import TrustedClientsSection from '../components/TrustedClientsSection';
import GlobalPresenceSection from '../components/GlobalPresenceSection';
import CTASection from '../components/CTASection';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <RoadmapSection />
        <TrustedClientsSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
    </div>
  );
};


export default Home;