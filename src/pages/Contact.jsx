import React from 'react';
import ContactHero from '../components/ContactHero/ContactHero';
import ContactSplit from '../components/ContactSplit/ContactSplit';

const Contact = () => {
  return (
    <main style={{ minHeight: '100vh', background: '#ffffff' }}>
      <ContactHero />
      <ContactSplit />
    </main>
  );
};

export default Contact;