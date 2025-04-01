
import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import { useLocation } from 'react-router-dom';
import EducationExperience from '../components/Education/EducationExperience';
import RiskSection from '../components/RiskFree/RiskSection';

const Home = () => {
  const location = useLocation();

  React.useEffect(() => {
    const scrollToSection = () => {
      const sectionId = location.pathname.substring(1);
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <>
      <Hero />
      <About id="aboutMe" />
      <EducationExperience id="education" />
      <RiskSection />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
};

export default Home;