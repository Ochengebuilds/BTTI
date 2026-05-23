import React from 'react';
import Hero from '../components/Hero/Hero';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import Announcements from '../components/Announcements/Announcements';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <Announcements />
    </main>
  );
};

export default Home;