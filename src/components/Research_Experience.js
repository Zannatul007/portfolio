import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/education.css"; // reuse same CSS
import newroz_logo from "../assets/newroz_logo.jpeg";
import nlp_logo from "../assets/cuet_nlp.jpeg";
import bs_logo from "../assets/bs-23.jpeg";
import elite_logo from "../assets/elite.png";
import { HiCheckCircle } from "react-icons/hi";
import { Contact } from "./Contact";

const experiences = [
  {
    title: "Research Assistant",
    date: "September 2025 - Ongoing",
    role: "LLM, xAI, NLP",
    institution: "Elite Lab, New York, USA",
    logo: elite_logo,
    responsibilities: [],
  },
  {
    title: "Software Engineer (Intern)",
    date: "February 2025 - April 2025",
    role: "Python Developer",
    institution: "Newroz Technologies LTD, Dhaka, Bangladesh",
    logo: newroz_logo,
    responsibilities: [
      "Developed and maintained Python applications.",
      "Designed modular, scalable codebases using OOP principles.",
      "Implemented secure data storage solutions with SQLite.",
      "Collaborated with team members to debug, optimize, and deliver production-ready features.",
    ],
  },
  {
    title: "Industrial Trainee",
    date: "October 2023 - October 2023",
    role: "",
    institution: "Brain Station 23, Dhaka, Bangladesh",
    logo: bs_logo,
    responsibilities: [
      "Collaborated on developing the Employee Management System to streamline task assignments and employee management using React, JavaScript, HTML, and CSS.",
      "Key contributions included designing an intuitive UI/UX for dashboards, managing employee lists, implementing add/edit/delete employee functionalities, and developing a task management system to assign and track tasks efficiently.",
    ],
  },
];

export const Experience = () => {
  return (
    <div>
      <h1 className="experience-title">Experience</h1>
      {experiences.map((exp, index) => (
        <Row key={index} className="education-container">
          <Col className="education-logo" md={2} xs={12}>
            <img
              src={exp.logo}
              alt={`${exp.title} Logo`}
              className="cuet-logo"
            />
          </Col>
          <Col md={10} xs={12} className="education-description">
            <div className="title-date-row">
              <h2>{exp.title}</h2>
              <span className="education-date">{exp.date}</span>
            </div>
            <hr className="title-divider" />
            {exp.role && <p className="education-role">{exp.role}</p>}
            <p className="education-institution">{exp.institution}</p>
            {exp.responsibilities.length > 0 && (
              <ul
                className="work_list"
                style={{ listStyle: "none", paddingLeft: 0 }}
              >
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>
                    <HiCheckCircle className="icon" /> {item}
                  </li>
                ))}
              </ul>
            )}
          </Col>
          {index !== experiences.length - 1 && (
            <hr className="section-divider" />
          )}
        </Row>
      ))}
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
