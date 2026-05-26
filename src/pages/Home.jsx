import React from 'react';
import Hero from '../components/Hero/Hero';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import Announcements from '../components/Announcements/Announcements';
import SocialFeeds from '../components/SocialFeeds/SocialFeeds';
import StatsBanner from '../components/StatsBanner/StatsBanner';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsBanner />
      <FeatureGrid />
      <Announcements />
      <SocialFeeds />
      <Testimonials />
    </main>
  );
};

export default Home;