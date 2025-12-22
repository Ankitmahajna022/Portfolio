import React from "react";
import { Code, Globe, Database, Wrench } from "lucide-react";
import "./Skils.css"

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["C", "JavaScript"],
      color: "blue",
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3"],
      color: "purple",
    },
    {
      icon: <Code size={24} />,
      title: "Frameworks & Libraries",
      skills: ["Bootstrap", "React.js", "Node.js", "Express.js"],
      color: "green",
    },
    {
      icon: <Database size={24} />,
      title: "Databases & Backend",
      skills: ["MongoDB", "Firebase"],
      color: "orange",
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code"],
      color: "yellow",
    },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <h2>
            Technical <span>Skills</span>
          </h2>
          <div className="skills-line"></div>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card fade-up" key={index}>
              <div className={`skill-icon ${category.color}`}>
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
