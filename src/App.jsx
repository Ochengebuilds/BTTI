import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions'; // 1. Add this import
// import ICTCourse from './pages/ICTCourse'; // Import the new layout view
import CourseTemplate from './pages/CourseTemplate';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} /> {/* 2. Inject Route */}
        <Route path="/courses/:id" element={<CourseTemplate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;