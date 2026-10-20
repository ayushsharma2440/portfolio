import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sabrangImg from "../../Assets/Projects/chatify.png";
import attendanceImg from "../../Assets/Projects/emotion.png";
import linkliImg from "../../Assets/Projects/codeEditor.png";
import backendImg from "../../Assets/Projects/blog.png";
import pythonImg from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and systems I've engineered recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sabrangImg}
              isBlog={false}
              title="SABRANG 2025 Fest Portal"
              description="Annual university cultural fest portal (Role: Tech Coordinator & Backend Lead). Developed REST APIs using Node.js with JWT authentication, CashFree payment gateway integration, individual & team registrations, automated ticket generation with email dispatch, and a Next.js admin check-in dashboard. Generated ₹100,000+ in revenue."
              ghLink="https://github.com/ayushsharma2440"
              demoLink="https://sabrang.jklu.edu.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendanceImg}
              isBlog={false}
              title="GPS & Face Verification Attendance"
              description="Replaced physical registers with an automated smart attendance system using GPS tracking & Mappls API and facial recognition via face-recognition.js. Validates students' authentic on-campus presence from anywhere within campus boundaries, preventing false signatures, with a dedicated warden management panel."
              ghLink="https://github.com/ayushsharma2440"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkliImg}
              isBlog={false}
              title="Linkli — Advanced URL Shortener"
              description="Full-stack URL shortening platform built with Node.js, Express.js, and MongoDB. Features custom aliases, time-based expiration, one-time self-destruct links, password-protected URLs, dynamic QR codes, Google OAuth 2.0 with Passport.js, device/OS/browser analytics, and custom domain mapping."
              ghLink="https://github.com/ayushsharma2440"
              demoLink="https://www.linkli.xyz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backendImg}
              isBlog={false}
              title="Backend Database Applications Engine"
              description="Comprehensive backend application developed under IBM certification curriculum using Node.js, Express, and MongoDB. Implements aggregation pipelines, schema validation, optimized indexing, and robust error handling for high-throughput CRUD operations."
              ghLink="https://github.com/ayushsharma2440"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              isBlog={false}
              title="Data Structures & Algorithms Suite"
              description="Comprehensive algorithmic collection developed under University of Michigan certification program. Implements data structures, graph search algorithms, tree traversals, and asymptotic complexity benchmarks in Python."
              ghLink="https://github.com/ayushsharma2440"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
