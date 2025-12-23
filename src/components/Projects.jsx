import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import "./Projecta.css"

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Chat App",
      description: "A real-time chat application inspired by WhatsApp, featuring modern UI and real-time messaging capabilities.",
      github: "https://github.com/Ankitmahajna022/React-All-Projects/tree/main/whatApp-Chat",
      tech: ["React", "Firebase", "Tailwind CSS"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Library Management System",
      description: "A comprehensive system for managing library operations including book tracking and member management.",
      github: "https://github.com/HETVI1405/library-management-system/tree/main/library_management",
      tech: ["Node.js", "Express", "MongoDB"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Tweet Posting App",
      description: "A Twitter-like application for posting and managing tweets with user authentication and feed.",
      github: "https://github.com/Ankitmahajna022/Node-js-project/tree/main/Tweet_Posting_App",
      tech: ["Node.js", "Express", "MongoDB"],
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "Movie Management System",
      description: "A system for managing movie databases with features for adding, updating, and searching movies.",
      github: "https://github.com/Ankitmahajna022/Node-js-project/tree/main/Movie_Management_System",
      tech: ["Node.js", "Express", "MongoDB"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Product Filter API",
      description: "A REST API that demonstrates advanced product filtering using multiple query parameters such as name, brand, category, price range, rating, sorting, and pagination. Supports combined filters in a single endpoint and returns structured responses including totalProducts, totalPages, and currentPage.",
      github: "https://github.com/Ankitmahajna022/Node-js-project/tree/main/Filter_API_Practical_Task",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      color: "from-green-500 to-emerald-600"
    }


  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className="projects-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-up">
              <div className="project-top">
                <div>
                  <div className={`project-bar ${project.color}`}></div>
                  <h3>{project.title}</h3>
                </div>

                <a href={project.github} target="_blank" className="icon-btn">
                  <Github size={20} />
                </a>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a href={project.github} target="_blank" className="project-btn">
                <Github size={16} />
                View Code
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;