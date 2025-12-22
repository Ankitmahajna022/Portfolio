export default function Skills() {
  const skills = {
    "Programming Languages": ["C", "JavaScript"],
    "Web Technologies": ["HTML5", "CSS3"],
    "Frameworks & Libraries": [
      "Bootstrap",
      "React.js",
      "Node.js",
      "Express.js"
    ],
    "Databases & Backend Services": ["MongoDB", "Firebase"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code"]
  };

  return (
    <section className="fade-up">
      <h2>Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          <h3 style={styles.heading}>{category}</h3>

          <div style={styles.grid}>
            {items.map(skill => (
              <span key={skill} style={styles.badge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  heading: {
    marginBottom: "10px",
    color: "#e5e7eb"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  },
  badge: {
    background: "#1e293b",
    padding: "8px 14px",
    borderRadius: "8px",
    color: "#f8fafc",
    fontSize: "14px"
  }
};
