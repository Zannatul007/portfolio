import { Contact } from "./Contact";
import Grid from "@mui/material/Grid";
import { FaBeer, FaCoffee, FaApple, FaAndroid } from "react-icons/fa";

import multi from "../assets/multi.png";
import DL from "../assets/dL.png";
import cv from "../assets/cv.jpg";
import nlp from "../assets/nlp.png";
import xai from "../assets/dL.png";
import se from "../assets/swe.jpg";
import llm from "../assets/llm.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const items = [
  { icon: DL, text: "Deep Learning" },
  { icon: nlp, text: "Natural Language Processing" },
  { icon: cv, text: "Computer Vision" },
  { icon: multi, text: "Multimodal Learning" },
  { icon: xai, text: "Explainable AI" },
  { icon: DL, text: "Generative AI" },
  { icon: llm, text: "Large Language Models" },
  { icon: se, text: "Software Engineering" },
];

export const About = () => {
  return (
    <div>
      <h2 className="about-title">About Me</h2>

      <div className="p-4  mx-5">
        <Row>
          <Col className="mb-4" md={7} xs={12}>
            <div className="about-text">
              <p>
                I am a passionate <strong>Python developer</strong> specializing
                in
                <strong>Machine Learning</strong> and{" "}
                <strong>Deep Learning</strong>, with a focus on
                <strong>Natural Language Processing (NLP)</strong> and{" "}
                <strong>Computer Vision</strong>. I enjoy applying advanced AI
                techniques to solve real-world problems and exploring innovative
                solutions.
              </p>

              <p>
                I graduated from <strong>CUET</strong> with a CGPA of 3.78
                (honors), ranking 9th out of 131 students. I have experience as
                a <strong>Software Engineer Intern</strong> at{" "}
                <strong>Newroz Technologies LTD</strong>
                and currently work as a{" "}
                <strong>Research Assistant at Elite Research Lab LLC</strong>,
                contributing to projects in
                <strong>Generative AI, Explainable AI</strong>, and{" "}
                <strong>Large Language Models (LLMs)</strong>. My work focuses
                on designing AI models that are both{" "}
                <strong>innovative and interpretable</strong>.
              </p>

              <p>
                I am a <strong>dedicated, punctual, and collaborative</strong>{" "}
                professional who thrives in team environments, enjoys mentoring,
                and is committed to continuous learning. My goal is to develop
                impactful AI solutions that combine
                <strong>research, technology, and innovation</strong> to address
                real-world challenges.
              </p>
            </div>
          </Col>
          <Col className="mb-4" md={5} xs={12}>
            <h2
              className=" text-center mb-4"
              style={{ fontSize: "1.5rem", color: "#0d3a61" }}
            >
              Area of Interests
            </h2>
            <div className="grid-container">
              {items.map((item, index) => (
                <div className="grid-item" key={index}>
                  <span className="grid-icon">
                    <img src={item.icon} />
                  </span>
                  <span className="text">{item.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      <footer>
        <Contact />
      </footer>
    </div>
  );
};
