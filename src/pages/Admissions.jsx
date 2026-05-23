import React from 'react';
import AdmissionsHero from '../components/AdmissionsHero/AdmissionsHero';
import RequirementsAccordion from '../components/RequirementsAccordion/RequirementsAccordion';

const Admissions = () => {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <AdmissionsHero />
      <RequirementsAccordion />
    </main>
  );
};

export default Admissions;