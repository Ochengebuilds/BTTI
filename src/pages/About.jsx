import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutHero from '../components/About/AboutHero';
import AboutStats from '../components/About/AboutStats';
import AboutOverview from '../components/About/AboutOverview';
import AboutCommitment from '../components/About/AboutCommitment';
import CoreValues from '../components/About/CoreValues';
import Footer from '../components/Footer/Footer'; // If you have a Footer component ready

const About = () => {
  return (
    <>
      <main style={{ width: '100%', overflow: 'hidden', background: '#ffffff' }}>
        {/* Systematic Component Stack Sequence */}
        <AboutHero />
        <AboutStats />
        <AboutOverview />
        <AboutCommitment />
        <CoreValues />
      </main>
    </>
  );
};

export default About;