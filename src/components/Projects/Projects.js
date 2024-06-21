import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://wedigitalindia.com/uploads/category/4a71386405f67a61db325dd65a631523.jpg"}
              isBlog={false}
              title="CMS"
              description="I led the development of the Company Management System, leveraging Java and Spring Boot for backend functionalities, while employing Angular for frontend interface Utilized MySQL for database management. Key responsibilities included full-stack development, ensuring seamless integration of frontend and backend components to meet the needs of Admins, Employees, and Clients."
             ghLink="https://github.com/sumitDhakar/company-management"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://img.freepik.com/free-photo/stethoscope-blue-background_23-2147612257.jpg?t=st=1716539463~exp=1716543063~hmac=143d9e691d4b3bc64b3439b39769e48800e26b3dde0748cb7843ad93aa89da0d&w=996"}
              isBlog={false}
              title="CICO (CHECK-IN-CHECK-OUT)"
              description="A comprehensive student management system designed for efficient administration of student activities such as syllabus management, student leaderboards, tests, and more. It features a backend developed in Java for robust data handling and logic implementation, coupled with a sleek Angular frontend for intuitive user interaction and seamless navigation."
              ghLink="https://github.com/sumitDhakar/ChatApplication"
 
            />
          </Col>

      
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
