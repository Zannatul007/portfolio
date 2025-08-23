import { Col, Row } from "react-bootstrap";
import navIcon1 from "../assets/google_scholar.svg";
import navIcon2 from "../assets/github.svg";
import navIcon3 from "../assets/linkedin.svg";
import proPic from "../assets/portfolio_image.jpg";
import { Contact } from "./Contact";
export const Home = () => {
  return (
    <div>
      <Row className="home-row">
        <Col className="home-col-0" md={1}></Col>
        <Col className="home-col-1 mt-4" xs={12} md={5}>
          <h2 className="home-title">Zannatul Fardaush Tripty</h2>
          <p className="home-description">
            B.Sc. in{" "}
            <span className="highlight">
              Computer Science and Engineering, Chittagong University of
              Engineering and Technology,Bangladesh
            </span>
            <br></br>
          </p>
          <p>My research interest lies in the broad spectrum of:</p>
          <ul className="research-education-list">
            <li>Machine Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Large Language Models</li>
            <li>Multimodal Learning</li>
          </ul>
          <div className="social-icon">
            <a href="https://scholar.google.com/citations?user=eaxlZQoAAAAJ&hl=en">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/Zannatul007">
              <img src={navIcon2} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/zannatul-fardaush-tripty-8481241b2">
              <img src={navIcon3} alt="" />
            </a>
          </div>
          <div>
            <button className="download-button ms-4 mt-4">
              <a
                href="/Zannatul_Fardaush_Tripty_ACV.pdf"
                download="Zannatul_Fardaush_Tripty_ACV.pdf"
                className="home-button-link"
                style={{ textDecoration: "none", color: "white" }}
              >
                Download CV
              </a>
            </button>
          </div>
        </Col>
        <Col className="home-col-2 mt-4" xs={12} md={6}>
          <img
            src={proPic}
            alt="Zannatul Fardaush Tripty"
            className="home-image"
          />
        </Col>
      </Row>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};
