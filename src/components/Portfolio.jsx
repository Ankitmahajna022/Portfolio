// components/Portfolio.jsx
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';


const Portfolio = () => {
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={(el) => (sections.current[0] = el)}>
        <Header />
      </div>
      <div ref={(el) => (sections.current[1] = el)} className="opacity-0">
        <About />
      </div>
      <div ref={(el) => (sections.current[2] = el)} className="opacity-0">
        <Skills />
      </div>
      <div ref={(el) => (sections.current[3] = el)} className="opacity-0">
        <Projects />
      </div>
      <div ref={(el) => (sections.current[4] = el)} className="opacity-0">
        <Education />
      </div>
      <div ref={(el) => (sections.current[5] = el)} className="opacity-0">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;