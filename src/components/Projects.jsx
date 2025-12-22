

export default function Projects() {
  const projectList = [
    {
      title: "WhatsApp Chat App",
      link: "https://github.com/Ankitmahajna022/React-All-Projects/tree/main/whatApp-Chat"
    },
    {
      title: "Library Management System",
      link: "https://github.com/HETVI1405/library-management-system/tree/main/library_management"
    },
    {
      title: "Tweet Posting App",
      link: "https://github.com/Ankitmahajna022/Node-js-project/tree/main/Tweet_Posting_App"
    },
    {
      title: "Movie Management System",
      link: "https://github.com/Ankitmahajna022/Node-js-project/tree/main/Movie_Management_System"
    }
  ];

  return (
    <section className="fade-up">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <Project key={index} title={project.title} link={project.link} />
        ))}
      </div>
    </section>
  );
}

function Project({ title, link }) {
  return (
    <div className="project-card fade-up">
      <h3>{title}</h3>
      <div className="project-actions">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
