import { Container, Row, Col, Card } from "react-bootstrap";
import { HiCheckCircle } from "react-icons/hi";

const projectsData = [
  {
    name: "Food Nutrition Checker",
    link: "https://github.com/Zannatul007/Food-Nutrition-Checker",
    stacks: "Python, Flask, HTML",
    features: [
      "Developed a web app for food recognition using an ensemble of Vision Transformers (ViT) for 24 Bangladeshi foods",
      "Calculated and scaled nutrient values and ingredient quantities from user inputs",
      "Backend with Flask and Pandas; dynamic results via HTML templates, supporting image uploads/URLs",
    ],
  },
  {
    name: "Library Management System",
    link: "https://github.com/Zannatul007/library_management_system_sqlite_updated",
    stacks: "Python, SQLite",
    features: [
      "Developed a Python-based CLI system with user authentication and book/member management.",
      "Implemented secure data storage using SQLite and enabled CSV import/export.",
      "Applied object-oriented design principles for modular and maintainable code.",
    ],
  },
  {
    name: "Day Care Management System",
    link: "https://github.com/Zannatul007/CLOUD-CHILDREN-AUG-LATEST-2",
    stacks: "HTML, CSS, JavaScript, Bootstrap, PHP",
    features: [
      "Developed a web-based system for daycare reservations and service bookings.",
      "Implemented admin features for tracking and managing reservations.",
      "Designed the user interface with HTML, CSS, JavaScript, and Bootstrap for responsiveness.",
    ],
  },
  {
    name: "Cardio Checker App",
    link: "https://github.com/Zannatul007/cardio_checker_app",
    stacks: "Flutter, Firebase",
    features: [
      "Developed a health app to monitor BMI and predict heart disease risks.",
      "Integrated machine learning for risk prediction and personalized nutrition advice.",
      "Used Firebase for backend services, including authentication and data storage.",
    ],
  },
  {
    name: "Culinary and Cuisine",
    link: "https://github.com/Zannatul007/Zannatul007.github.io",
    stacks: "HTML, CSS, JavaScript",
    features: [
      "Showcases a variety of Bangladeshi and international dishes with detailed recipes",
      "Recipes with ingredients, steps, tips, and video guidance",
      "Responsive design for seamless browsing on desktop and mobile devices",
    ],
  },
  {
    name: "Chatting Site",
    link: "https://github.com/Zannatul007/Chatting_Site",
    stacks: "PHP, CSS, HTML,JavaScript, Bootstrap",
    features: [
      "One-to-one chat for private messaging",
      "Group chat for multiple users",
      "Real-time message display with a simple interface",
    ],
  },
];

export const Projects = () => {
  return (
    <div>
      <h1 className="projects-title">Projects</h1>
      <Row className="m-4">
        {projectsData.map((project, idx) => (
          <Col md={4} sm={12} key={idx} className="mb-4 d-flex">
            <Card className="h-100 shadow-sm d-flex flex-column">
              <Card.Header
                className="d-flex flex-column justify-content-center"
                style={{ minHeight: "100px" }} // same height for all headers
              >
                <h5 className="mb-1">
                  {project.name} |{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </h5>
                <small>
                  <strong>Stacks: </strong>
                  <i>{project.stacks}</i>
                </small>
              </Card.Header>
              <Card.Body className="flex-grow-1">
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {project.features.map((feature, i) => (
                    <li key={i} className="mb-2 align-items-start">
                      <HiCheckCircle 
                        className="icon"
                      
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
