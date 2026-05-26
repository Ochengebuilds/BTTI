import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import CourseHero from '../components/Courses/CourseHero';
import ClassroomGallery from '../components/Courses/ClassroomGallery';
import CourseCurriculum from '../components/Courses/CourseCurriculum';
import Footer from '../components/Footer/Footer'; // Smoothly mounts your standard footer line

const ICTCourse = () => {
  // Automatically snaps scroll tracking back to top when landing on this layout path
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="fade-in-canvas" style={{ width: '100%', overflow: 'hidden', background: '#ffffff' }}>
        <CourseHero />
        <ClassroomGallery />
        <CourseCurriculum />
      </main>
    </>
  );
};

export default ICTCourse;