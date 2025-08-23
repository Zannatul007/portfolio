import { FaEnvelope } from "react-icons/fa";
import navIcon1 from "../assets/google_scholar.svg";
import navIcon2 from "../assets/github.svg";
import navIcon3 from "../assets/linkedin.svg";

import "../styles/footer.css";

export const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2 className="footer-title">Let's Talk</h2>

        <p className="footer-text">
          Feel free to ask me any questions you may have. I’ll be happy to
          answer your questions.
        </p>

        {/* Email */}
        <div className="footer-email">
          <FaEnvelope className="footer-icon" />
          <a href="mailto:zannatul.fardaush.03@gmail.com">
            zannatul.fardaush.03@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://scholar.google.com/citations?user=eaxlZQoAAAAJ&hl=en"
            aria-label="Google Scholar"
          >
            <img src={navIcon1} alt="Google Scholar" />
          </a>
          <a href="https://github.com/Zannatul007" aria-label="GitHub">
            <img src={navIcon2} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/zannatul-fardaush-tripty-8481241b2"
            aria-label="LinkedIn"
          >
            <img src={navIcon3} alt="LinkedIn" />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Zannatul Fardaush. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
