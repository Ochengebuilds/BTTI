import React from 'react';
import AcademicsHero from '../components/AcademicsHero/AcademicsHero';
import CourseCatalog from '../components/CourseCatalog/CourseCatalog';

const Academics = () => {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <AcademicsHero />
      <CourseCatalog />
    </main>
  );
};

export default Academics;