import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>
            About <span>Me</span>
          </h2>
          <div className="about-line"></div>
        </div>

        <div className="about-text fade-up">
          <p>
            I'm Ankit Mahajan, a passionate Web Developer from Surat, Gujarat, with
            strong hands-on experience in building modern, responsive, and
            scalable web applications. I specialize in front-end development
            using React.js and have solid backend experience with Node.js,
            Express.js, and databases like MongoDB and Firebase.
          </p>

          <p>
            I enjoy transforming ideas into clean, user-friendly interfaces and
            reliable backend systems. Through projects such as chat applications,
            management systems, and RESTful APIs, I have developed a strong
            understanding of full-stack development, state management, API
            integration, and database design.
          </p>

          <p>
            I am always eager to learn new technologies, improve performance, and
            write clean, maintainable code. My goal is to grow as a professional
            developer and contribute to impactful real-world projects while
            continuously upgrading my technical skills.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card fade-up">
            <h3>2+</h3>
            <p>Years Learning & Building</p>
          </div>

          <div className="stat-card fade-up">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card fade-up">
            <h3>Full</h3>
            <p>Stack Expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
