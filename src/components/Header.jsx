export default function Header() {
  return (
    <header className="fade-up" style={styles.header}>
      <h1>Ankit Mahajan</h1>
      <p>Web Developer</p>
      <div className="contact">
        📧 ankitmahajan2257@gmail.com <br />
        📞 +91 99781 42257 <br />
        📍 Surat, Gujarat, India <br />
        🐙 Ankitmahajna022
      </div>
      <div>
        <a href="mailto:ankitmahajan2257@gmail.com">Email</a>
        <a href="https://github.com/Ankitmahajna022" target="_blank">GitHub</a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#020617"
  }
};
