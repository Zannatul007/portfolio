import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/education.css";
import cuet_logo from "../assets/cuet_logo.png";
import sagc_logo from "../assets/sagc_logo.png";
import bgphs_logo from "../assets/bgphs_logo.jpg";
import dkg_logo from "../assets/dkg.png";
import { Contact } from "./Contact";

const educationData = [
  {
    level: "Bachelor of Science (B.Sc.)",
    date: "February 2019 - June 2024",
    role: "Department of Computer Science and Engineering",
    institution:
      "Chittagong University of Engineering and Technology (CUET), Chittagong, Bangladesh",
    cgpa: "3.78 / 4.00",
    merit: "9th among 131 students",
    logo: cuet_logo,
  },
  {
    level: "Higher Secondary Education",
    date: "June 2016 - July 2018",
    role: "Higher Secondary Certificate (HSC)",
    institution:
      "Shaheed Bir Uttam Lt. Anwar Girl's College, Dhaka, Bangladesh",
    major: "Science (11th and 12th Standard)",
    gpa: "5.00 / 5.00",
    logo: sagc_logo,
  },
  {
    level: "Secondary Education",
    date: "January 2014 - May 2016",
    role: "Secondary School Certificate (SSC)",
    institution: "Begumganj Govt. Pilot High School, Noakhali, Bangladesh",
    major: "Science (9th and 10th Standard)",
    gpa: "5.00 / 5.00",
    logo: bgphs_logo,
  },
  {
    level: "Middle School Education",
    date: "January 2011 - December 2013",
    role: "Junior School Certificate (JSC)",
    institution: "Begumganj Govt. Pilot High School, Noakhali, Bangladesh",
    details: "From 6th to 8th Standard",
    gpa: "5.00 / 5.00",
    logo: bgphs_logo,
  },
  {
    level: "Primary and Pre-Primary School Education",
    date: "January 2006 - December 2010",
    role: "Primary School Certificate (PSC)",
    institution: "Chowmuhani Pre Cadet Academy, Noakhali, Bangladesh",
    details: "Till 5th Standard",
    gpa: "5.00 / 5.00",
    logo: dkg_logo,
  },
];

export const Education = () => {
  return (
    <div>
      <h1 className="education-title">Education</h1>
      {educationData.map((edu, idx) => (
        <div key={idx}>
          <Row className="education-container">
            <Col className="education-logo" md={2} xs={12}>
              <img
                src={edu.logo}
                alt={`${edu.level} Logo`}
                className="cuet-logo"
              />
            </Col>
            <Col md={10} xs={12} className="education-description">
              <div className="title-date-row">
                <h2>{edu.level}</h2>
                <span className="education-date">{edu.date}</span>
              </div>
              <hr className="title-divider" />
              <p className="education-role">{edu.role}</p>
              <p className="education-institution">{edu.institution}</p>
              {edu.major && (
                <p>
                  <strong>Major:</strong> {edu.major}
                </p>
              )}
              {edu.cgpa && (
                <p>
                  <strong>CGPA:</strong> {edu.cgpa}
                </p>
              )}
              {edu.merit && (
                <p>
                  <strong>Merit Position:</strong> {edu.merit}
                </p>
              )}
              {edu.gpa && (
                <p>
                  <strong>GPA:</strong> {edu.gpa}
                </p>
              )}
              {edu.details && <p>{edu.details}</p>}
            </Col>
            {idx !== educationData.length - 1 && (
              <hr className="section-divider" />
            )}
          </Row>
        </div>
      ))}
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
