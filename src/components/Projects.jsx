export default function Projects() {
  return (
    <section className="fade-up">
      <h2>Projects</h2>

      <Project
        title="WhatsApp Chat App"
        desc="A real-time chat application inspired by WhatsApp Web with responsive UI."
        tech={["React", "CSS", "Firebase"]}
        link="https://github.com/Ankitmahajna022/React-All-Projects/tree/main/whatApp-Chat"
        delay="0s"
      />

      <Project
        title="Library Management System"
        desc="System to manage books, users, issue & return operations efficiently."
        tech={["Node.js", "Express", "MongoDB"]}
        link="https://github.com/HETVI1405/library-management-system/tree/main/library_management"
        delay="0.15s"
      />

      <Project
        title="Tweet Posting App"
        desc="REST API based app for posting, updating and deleting tweets."
        tech={["Node.js", "Express", "MongoDB"]}
        link="https://github.com/Ankitmahajna022/Node-js-project/tree/main/Tweet_Posting_App"
        delay="0.3s"
      />

      <Project
        title="Movie Management System"
        desc="Backend system with CRUD operations to manage movie records."
        tech={["Node.js", "Express", "MongoDB"]}
        link="https://github.com/Ankitmahajna022/Node-js-project/tree/main/Movie_Management_System"
        delay="0.45s"
      />
    </section>
  );
}

function Project({ title, desc, tech, link, delay }) {
  return (
    <div
      className="project-card fade-up"
      style={{ animationDelay: delay }}
    >
      <h3>{title}</h3>
      <p className="project-desc">{desc}</p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        View Code →
      </a>
    </div>
  );
}
