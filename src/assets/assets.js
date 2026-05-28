// src/assets.js

// 1. Import your physical image files from their folders
import logo from './logo.png'; // Removed the extra 'assets/'
import slide1 from "./DSC_1729.jpg"; 
import slide2 from "./DSC_1617.jpg";
import slide3 from "./DSC_1621.jpg";
import slide4 from "./DSC_1696.jpg";

import collegeLifeImg from './collage life.jpeg';
import alumniHubImg from './success beyond graduation.jpg';
import partnershipImg from './empowerment through education.jpg'; // or whichever image you want here

// 1. IMPORT YOUR BENTO BUNDLE IMAGES (Choose the right matching file names from your directory)
import studentLifeImg from './career.jpg';    // Replace with correct filenames if needed
import ictLabImg from './web projects.jpg';
import workshopImg from './industrial.jpg';
import classroomImg from './DSC_1696.jpg';




// 2. Export them as named variables in a clean configuration object
export const azzets = {
  logo,
  heroSlides: [
    slide1,
    slide2,
    slide3,
    slide4
    
  ],// Match the inner references expected by your code
  discover: {
    collegeLife: collegeLifeImg,
    alumni: alumniHubImg,
    partners: partnershipImg
  },
  // 2. EXPOSE THE FEATURE GRID GRAPHICS
  features: {
    studentLife: studentLifeImg,
    ictLab: ictLabImg,
    workshop: workshopImg,
    classroom: classroomImg
  },
};