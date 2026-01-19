import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Etech from "../../Assets/Projects/Etech.png";
import Udrive from "../../Assets/Projects/Udrive.png";
import Emg from "../../Assets/Projects/Emg.png";
import TassarImage from "../../Assets/Projects/tassar.png";
import PersonalProjectOne from "../../Assets/Projects/PersonalProjectOne.png";
import PersonalProjectTwo from "../../Assets/Projects/PersonalProjectTwo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Here are a few projects <strong className="purple">I've worked on </strong>
          recently.
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Udrive}
              isBlog={false}
              isGhLink={false}
              title="Udrive"
              description="I developed this project, using React.js, Next.js, and some modern tools like Mapbox and MUI. I worked extensively on integrating map pages and geolocation features. While these pages were removed in the latest release, this project taught me invaluable lessons in building scalable, high-performance applications with complex integrations."
              demoLink="https://udrive.ae/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TassarImage}
              isBlog={false}
              isGhLink={false}
              title="Tassar"
              description=""
              demoLink="https://tasarr.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emg}
              isBlog={false}
              isGhLink={false}
              title="Express Mail Georgia"
              description="I developed this project using Vite, and Material UI (MUI). My focus was solely on building the UI, designing responsive and visually appealing pages with a smooth UX. The project features a range of modern UI elements like date pickers, maps, and slick carousels, leveraging libraries like React-Slick and MUI's extensive components."
              demoLink="https://emg.zip24.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Etech}
              isBlog={false}
              isGhLink={false}
              title="E-Tech Solutions"
              description="I designed a modern, responsive website for a software house using React.js, Next.js, and a GitHub-inspired theme. The site showcases their services and portfolio with a clean, user-friendly interface, ensuring seamless navigation and fast performance across devices."
              demoLink="https://etspk.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PersonalProjectOne}
              isBlog={false}
              isGhLink={true}
              title="Health Care Risk Pridiction"
              description="I designed & developed a personalized healthcare risk prediction system using machine learning to predict diabetes risk based on health and lifestyle data. Built with XGBoost and Streamlit, the app provides real-time predictions and personalized health recommendations. This project sharpened my skills in ML, web development, and deployment on Streamlit Cloud."
              demoLink="https://healthcareriskpridiction-zunulnoor.streamlit.app/"
              ghLink="https://github.com/ZunulNoor/HealthCar-Risk-Pridiction"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PersonalProjectTwo}
              isBlog={false}
              isGhLink={true}
              title="Dvago (UI Replica)"
              description="A one-page UI replica of a medical store website built with React.js and Vite, leveraging modern tools like React Router for smooth navigation and React Bootstrap for responsive design. This project helped me enhance my frontend skills by integrating component-based architecture, utilizing third-party libraries like Axios for data handling, and maintaining code quality with ESLint."
              demoLink="https://dvago.vercel.app/"
              ghLink="https://github.com/ZunulNoor/Dvago"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
