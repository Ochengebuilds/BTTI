import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly force the window to snap seamlessly back to coordinate 0,0
    window.scrollTo(0, 0);
  }, [pathname]); // This triggers immediately every single time the URL route changes

  return null; // This component is purely functional and doesn't render any visible UI element
};

export default ScrollToTop;