import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { HiCheckCircle } from "react-icons/hi";
import "../styles/education.css";
import { Contact } from "./Contact";

export const Skill = () => {
  return (
    <div>
      <h1 className="education-title">Skills</h1>
      <Row className="m-4">
        <Col xs={12} md={6}>
          <ul
            className="skill-list"
            style={{ listStyleType: "none", padding: 0 }}
          >
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Languages (Spoken):</span> Bangla
              (Native), English (Fluent), Hindi & Urdu (Intermediate)
            </li>
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Programming Languages:</span>{" "}
              <strong class="text-primary">Python</strong>, C, C++, JavaScript,
              PHP
            </li>
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Frameworks: </span> Flask,
              Django,React.js, Flutter
            </li>
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Libraries: </span> TensorFlow, Pandas,
              NumPy, Matplotlib
            </li>
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Databases:</span> MySQL, SQLite
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <ul
            className="skill-list"
            style={{ listStyleType: "none", padding: 0 }}
          >
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Tools & Platforms:</span> Git/GitHub, VS
              Code, Jupyter Notebook, Android Studio, Code::Blocks
            </li>
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">
                Documentation & Productivity:
              </span>{" "}
              LaTeX, MS Word, MS
            </li>{" "}
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">Interpersonal Skills: </span>Teamwork
              and Collaboration, Leadership, Adaptability, Work Ethic, Problem
              Solving, Empathy and Understanding, Communication
            </li>
            <li>
              <HiCheckCircle className="icon" />
              <span className="keyword">
                Additional Technologies & Tools:
              </span>{" "}
              Web Scraping, ChatGPT, Bing-Chat, Bard, Claude-2
            </li>
          </ul>
        </Col>
      </Row>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
