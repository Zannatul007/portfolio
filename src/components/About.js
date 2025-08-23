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

const items = [
  { icon: DL, text: "Deep Learning" },
  { icon: nlp, text: "Natural Language Processing" },
  { icon: cv, text: "Computer Vision" },
  { icon: multi, text: "Multimodal Learning" },
  { icon: xai, text: "Explainable AI" },
  { icon: DL, text: "Data Science" },
  { icon: llm, text: "Large Language Models" },
  { icon: se, text: "Software Engineering" },
];

export const About = () => {
  return (
    <div>
      <h2 className="about-title">About Me</h2>
      <div className="p-4  mx-5">
        <div className="about-text">
          <p>
            Hi! I am a passionate <strong>Python developer</strong> with a
            strong interest in machine learning and deep learning. Over the
            years, I have also developed a deep fascination for{" "}
            <strong>Natural Language Processing and Computer Vision</strong>,
            which has become one of my key areas of expertise. I enjoy applying
            my knowledge to real-world projects and exploring innovative
            solutions to challenging problems. I am also active in{" "}
            <strong>extracurricular activities</strong>, having played various
            roles in different clubs and organizations. This exposure has helped
            me develop strong leadership, teamwork, and communication skills,
            making me a well-rounded individual.
          </p>

          <p>
            I recently graduated from <strong>CUET</strong> with a CGPA of 3.78
            (honors), ranking 9th out of 131 students. I completed an internship
            as a <strong>Software Engineer</strong> at{" "}
            <strong>Newroz Technologies LTD</strong>, which gave me hands-on
            experience in building practical software solutions. Currently, I am
            working as a <strong>Research Assistant at EliteLab</strong>, where
            I combine my technical skills with research, continuously learning
            and contributing to innovative projects. These experiences have
            strengthened my problem-solving abilities and reinforced my passion
            for technology and research.
          </p>

          <p>
            I consider myself a <strong>dedicated, punctual, and honest</strong>{" "}
            individual who is always eager to learn and take on new challenges.
            I thrive in collaborative environments and enjoy mentoring and
            supporting peers whenever possible. I am particularly interested in
            developing solutions that have a meaningful impact on society, and I
            aim to keep expanding my expertise in machine learning, NLP, and
            software development to achieve this goal. In the future, I hope to
            contribute to cutting-edge projects that combine research,
            technology, and innovation.
          </p>
        </div>
      </div>
      <h2
        className=" text-center mb-4"
        style={{ fontSize: "2rem", color: "#0d3a61" }}
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
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
