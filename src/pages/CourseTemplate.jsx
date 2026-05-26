import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import CourseHero from '../components/Courses/CourseHero';
import ClassroomGallery from '../components/Courses/ClassroomGallery';
import CourseCurriculum from '../components/Courses/CourseCurriculum';
import Footer from '../components/Footer/Footer';
import { departmentsData } from '../data/departmentsData';

const CourseTemplate = () => {
  const { id } = useParams(); // Grabs the route identifier from the URL
  const courseData = departmentsData[id]; // Looks up matching data in our repo

  // Scroll back to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Safety fallback: Redirect home if the path doesn't match an actual course ID
  if (!courseData) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="fade-in-canvas" style={{ width: '100%', overflow: 'hidden', background: '#ffffff' }}>
        <CourseHero data={courseData} />
        <ClassroomGallery data={courseData} />
        <CourseCurriculum data={courseData} />
      </main>
      <Footer />
    </>
  );
};

export default CourseTemplate;