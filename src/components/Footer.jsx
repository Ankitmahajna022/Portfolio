// components/Footer.jsx
import React from "react";
import { Mail, Github, FileText, Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-info">
            <h3>Ankit Mahajan</h3>
            <p>Full Stack Web Developer</p>
          </div>

          <div className="footer-icons">
            <a href="mailto:ankitmahajan2257@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>

            <a
              href="https://github.com/Ankitmahajna022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://pdflink.to/ankimahajanresume/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            Built with{" "}
            <Heart size={16} className="heart" /> by Ankit Mahajan
          </p>
          <p className="copyright">
            © {currentYear} Ankit Mahajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
