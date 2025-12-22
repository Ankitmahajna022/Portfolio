import React from "react";
import { GraduationCap, School } from "lucide-react";
import "./Education.css";

const Education = () => {
  const education = [
    {
      icon: <GraduationCap size={24} />,
      degree: "B.Com",
      institution: "Sheth C.D. Barfiwala College of Commerce",
      period: "2023 – 2025",
      description: "Bachelor of Commerce"
    },
    {
      icon: <School size={24} />,
      degree: "HSC",
      institution: "Sunrise Vidyalaya",
      period: "",
      description: "Higher Secondary Education"
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2>
            Education & <span>Background</span>
          </h2>
          <div className="education-line"></div>
        </div>

        <div className="education-list">
          {education.map((edu, index) => (
            <div className="education-card fade-up" key={index}>
              <div className="education-icon">{edu.icon}</div>

              <div className="education-content">
                <div className="education-top">
                  <h3>{edu.degree}</h3>
                  {edu.period && <span className="period">{edu.period}</span>}
                </div>

                <p className="institution">{edu.institution}</p>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-box fade-up">
          <h4>Continuous Learning</h4>
          <p>
            Beyond formal education, I'm continuously learning modern web
            technologies through online courses, documentation, and hands-on
            project building to stay updated with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
