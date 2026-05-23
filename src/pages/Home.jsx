import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import FeatureGrid from '../components/FeatureGrid/FeatureGrid';
import Announcements from '../components/Announcements/Announcements';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Announcements />
      </main>
      <Footer />
    </div>
  );
};

export default Home;