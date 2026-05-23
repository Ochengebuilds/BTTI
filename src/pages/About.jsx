import React from 'react';
import AboutHero from '../components/AboutHero/AboutHero';
import StatsGrid from '../components/StatsGrid/StatsGrid';
import LeadershipSection from '../components/LeadershipSection/LeadershipSection';

const About = () => {
  return (
    <main style={{ minHeight: '100vh', background: '#ffffff' }}>
      <AboutHero />
      <StatsGrid />
      <LeadershipSection />
    </main>
  );
};

export default About;