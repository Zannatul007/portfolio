import { Row, Col } from "react-bootstrap";
import "../styles/education.css";
import { HiCheck, HiCheckCircle } from "react-icons/hi";
import { Contact } from "./Contact";

const honorsAchievements = [
  {
    purpose: "Dean’s List Award for Excellent Scholarly Achievement",
    institution: "Chittagong University of Engineering and Technology (CUET)",
  },
  {
    purpose: "University Merit Scholarship",
    institution: "Chittagong University of Engineering and Technology (CUET)",
  },
  {
    purpose:
      "2nd & 5th @DravidianLangTech@EACL 2024 (Fake News Detection, Task 1 & 2)",
    institution:
      "Fourth Workshop on Speech, Vision, and Language Technologies for Dravidian Languages @EACL 2024",
  },
  {
    purpose:
      "2nd & 5th @DravidianLangTech@EACL 2024 (Sentiment Analysis, Tamil & Tulu)",
    institution:
      "Fourth Workshop on Speech, Vision, and Language Technologies for Dravidian Languages @EACL 2024",
  },
  {
    purpose: "Finalist among the top 6 CUET teams",
    institution: "HULT Prize at CUET 2020",
  },
  {
    purpose: "1st Runner-up - CUET CSE Department Programming Contest 2022",
    institution: "Chittagong University of Engineering and Technology (CUET)",
  },

  {
    purpose:
      "Secondary School Certificate (SSC) General Scholarship Award - 2016",
    institution: "Bangladesh Education Board",
  },
  {
    purpose: "Junior School Certificate (JSC) General Scholarship Award - 2014",
    institution: "Bangladesh Education Board",
  },
];

const activities = [
  {
    purpose: "CUET NLP Lab",
    institution: "Member ",
    duration: "Jan 2024 - Present",
  },
  {
    purpose: "CUET Computer Club",
    institution: "Assistant Organizing Secretary (Programming)",
    duration: "Aug 2023 - Jun 2024",
  },
  {
    purpose: "HULT PRIZE at CUET",
    institution: "Organizing Team Member",
    duration: "Sep 2019 - Dec 2021",
  },
  {
    purpose: "CUET Career Club",
    institution: "Executive Member",
    duration: "Mar 2019 - Aug 2022",
  },
];

export const Achievements = () => {
  return (
    <div>
      <h1 className="education-title">Achievements and Activities</h1>
      <Row className="m-4">
        <Col md={1}></Col>
        <Col xs={12} md={6} className="m-3" >
          <h2 className="text-center mb-4">Honors & Achievements</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {honorsAchievements.map((item, index) => (
              <li key={index}>
                <HiCheckCircle className="icon" />
                <span className="achievement-purpose">{item.purpose}</span>
                <br />
                <span className="achievement-institution">
                  {item.institution}
                </span>
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={12} md={4} className="m-3">
          <h2 className=" text-center mb-4">
            Extracurricular Activities
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {activities.map((item, index) => (
              <li key={index} className="achievement-item">
                <HiCheckCircle className="icon" />
                <span className="achievement-purpose">{item.purpose}</span>
                {item.institution && (
                  <>
                    <br />
                    <span className="achievement-institution">
                      {item.institution}
                    </span>
                  </>
                )}

                <span className="achievement-duration">{item.duration}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
