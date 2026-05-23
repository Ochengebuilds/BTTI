import React, { useState } from 'react';
import './RequirementsAccordion.css';

const RequirementsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const steps = [
    { title: "1. Minimum Academic Requirements", content: "For Diploma Programs: KCSE Mean Grade C- (Minus) or a relevant Certificate qualification from an accredited TVET center. For Certificate Programs: KCSE Mean Grade D (Plain) or equivalent entry qualifications." },
    { title: "2. Essential Enrollment Documents", content: "Prospective trainees must submit clear copies of their National ID Card/Birth Certificate, KCSE Result Slip/Certificate, two passport-sized color photos, and a signed letter of reference or conduct." },
    { title: "3. Fees Structure Overview", content: "Tuition structures are broken down into manageable term-based installments. Technical workshop fees, laboratory maintenance insurance, and exam registration variables are cataloged in detail inside our admission package handouts." },
    { title: "4. Portal Submission Steps", content: "Complete the printed or virtual application form, attach the digital processing receipt along with your support credentials, and expect an official confirmation or letter of offer from our admissions desk via email within 3 business days." }
  ];

  return (
    <section className="requirements-section">
      <div className="requirements-container">
        <div className="requirements-header">
          <h2>Application Procedures</h2>
          <p>Everything you need to verify before submitting your registration documents.</p>
        </div>

        <div className="accordion-stack">
          {steps.map((step, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`accordion-row ${isOpen ? 'row-expanded' : ''}`}>
                <button className="accordion-trigger" onClick={() => setOpenIndex(isOpen ? null : idx)}>
                  <span>{step.title}</span>
                  <span className={`accordion-arrow ${isOpen ? 'arrow-rotate' : ''}`}>+</span>
                </button>
                <div className="accordion-content-panel">
                  <p>{step.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RequirementsAccordion;