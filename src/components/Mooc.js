import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "../styles/education.css";
import { Contact } from "./Contact";

const courses = [
  { title: "Deep Learning Specialization", platform: "[Coursera]" },
  { title: "Introduction to Data Science in Python", platform: "[Coursera]" },
  { title: "Applied Machine Learning in Python", platform: "[Coursera]" },
  { title: "Learn Python Programming Masterclass", platform: "[Udemy]" },
  { title: "Learn Python Programming Masterclass", platform: "[Udemy]" },
  { title: "Introduction to Javascript: The Basics", platform: "[Coursera]" },
  {
    title: "Become a JavaScript Pro with these 7 Skills",
    platform: "[Coursera]",
  },
  { title: "User-Defined Functions in JavaScript", platform: "[Coursera]" },
  { title: "Interactivity with JavaScript", platform: "[Coursera]" },
];

export const Mooc = () => {
  return (
    <div>
      <h1 className="education-title">Online Course and Workshop</h1>
      <Row className="mt-4">
    
        <Col xs={12} md={12} className="achievements-col">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {courses.map((course, index) => (
              <li key={index} className="course-item">
                <HiOutlineBadgeCheck className="icon" />
                <span className="course-title">{course.title}</span>
                <br />
                <span className="course-platform">{course.platform}</span>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="achievements-col" xs={12} md={12}></Col>
      </Row>
      <footer>
        <Contact /> 
        </footer>
    </div>
  );
};
