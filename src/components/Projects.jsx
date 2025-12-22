import { NavLink } from "react-router-dom";
import "./Project.css";

export default function Projects() {
  return (
    <section className="fade-up">
      <h2>Projects</h2>

      <Project
        title="WhatsApp Chat App"
        link="/whatsapp-chat"
      />

      <Project
        title="Library Management System"
        link="/library-management"
      />

      <Project
        title="Tweet Posting App"
        link="/tweet-posting"
      />

      <Project
        title="Movie Management System"
        link="/movie-management"
      />
    </section>
  );
}

function Project({ title, link }) {
  return (
    <div className="project-card fade-up">
      <h3>{title}</h3>

      <div className="project-actions">
        <NavLink
          to={link}
          className="project-btn"
        >
          View Code
        </NavLink>
      </div>
    </div>
  );
}
