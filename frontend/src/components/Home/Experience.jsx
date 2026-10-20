import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import hughesOffice from "../../assets/hughes-office.png";
import Tilt from "react-parallax-tilt";

function Experience() {
  return (
    <Container fluid className="experience-section" style={{ paddingBottom: "50px" }}>
      <Container>
        <h1 className="project-heading" style={{ fontSize: "2.4em", marginBottom: "10px" }}>
          Work <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "#d1c4e9", fontSize: "1.05rem", marginBottom: "40px" }}>
          Industry internship and technical leadership roles where I engineered real-world software solutions.
        </p>

        {/* Hughes Systique Internship Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(199, 112, 240, 0.35)",
            borderRadius: "18px",
            boxShadow: "0 8px 30px rgba(119, 53, 136, 0.25)",
            padding: "30px",
            marginBottom: "35px",
            textAlign: "left",
          }}
        >
          <Row className="align-items-center">
            {/* Office Image Column */}
            <Col lg={4} md={5} className="mb-4 mb-md-0 text-center">
              <Tilt>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "2px solid rgba(199, 112, 240, 0.4)",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
                    maxHeight: "340px",
                  }}
                >
                  <img
                    src={hughesOffice}
                    alt="Hughes Systique Gurugram Office"
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(to top, rgba(12, 5, 19, 0.95), transparent)",
                      padding: "15px 10px 10px",
                      color: "#fff",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    Hughes Systique &bull; Gurugram
                  </div>
                </div>
              </Tilt>
            </Col>

            {/* Experience Details Column */}
            <Col lg={8} md={7}>
              <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
                <div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.5rem", marginBottom: "4px" }}>
                    Summer Intern — Engineering
                  </h3>
                  <h5 style={{ color: "#c770f0", fontWeight: 600, fontSize: "1.15rem", marginBottom: "10px" }}>
                    Hughes Systique Corporation (HSC)
                  </h5>
                </div>
                <div
                  style={{
                    background: "rgba(199, 112, 240, 0.15)",
                    border: "1px solid rgba(199, 112, 240, 0.4)",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    color: "#e2d2f9",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                >
                  <FaCalendarAlt style={{ marginRight: "6px" }} />
                  May 2026 – July 2026
                </div>
              </div>

              <div style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "15px" }}>
                <span style={{ marginRight: "18px" }}>
                  <FaMapMarkerAlt style={{ color: "#c770f0", marginRight: "5px" }} />
                  Gurugram, Haryana &bull; Onsite
                </span>
                <span>
                  <FaUserTie style={{ color: "#c770f0", marginRight: "5px" }} />
                  Mentored by Deepak Dahuja (AVP - Engineering)
                </span>
              </div>

              <ul style={{ color: "#ddd", fontSize: "0.95rem", paddingLeft: "20px", lineHeight: 1.7 }}>
                <li>
                  Engineered an innovative digital technology showcase platform for organization-wide engineering project demos.
                </li>
                <li>
                  Streamlined the end-to-end visitor journey with seamless entry, structured feedback collection, and live analytics dashboards for stakeholders.
                </li>
                <li>
                  Integrated AI capabilities to deliver intelligent demo recommendations, enhance attendee engagement, and automate interactions.
                </li>
              </ul>

            </Col>
          </Row>
        </div>

        {/* SABRANG Tech Coordinator Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(199, 112, 240, 0.35)",
            borderRadius: "18px",
            boxShadow: "0 8px 30px rgba(119, 53, 136, 0.25)",
            padding: "30px",
            textAlign: "left",
          }}
        >
          <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
            <div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.4rem", marginBottom: "4px" }}>
                Tech Coordinator & Backend Lead
              </h3>
              <h5 style={{ color: "#c770f0", fontWeight: 600, fontSize: "1.1rem", marginBottom: "10px" }}>
                SABRANG 2025 (Annual University Cultural Fest) &bull; JK Lakshmipat University
              </h5>
            </div>
            <div
              style={{
                background: "rgba(199, 112, 240, 0.15)",
                border: "1px solid rgba(199, 112, 240, 0.4)",
                padding: "6px 14px",
                borderRadius: "20px",
                color: "#e2d2f9",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
            >
              <FaCalendarAlt style={{ marginRight: "6px" }} />
              May 2025 – October 2025
            </div>
          </div>

          <div style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "15px" }}>
            <FaMapMarkerAlt style={{ color: "#c770f0", marginRight: "5px" }} />
            Jaipur, Rajasthan
          </div>

          <ul style={{ color: "#ddd", fontSize: "0.95rem", paddingLeft: "20px", lineHeight: 1.7 }}>
            <li>
              Developed robust REST APIs using Node.js with JWT authentication, individual/team registrations, and automated ticket generation with email dispatch.
            </li>
            <li>
              Integrated CashFree payment gateway, driving over ₹100,000+ in revenue through website event registrations.
            </li>
            <li>
              Designed database schemas and built a Next.js admin check-in dashboard for on-ground event management, deployed on Railway.
            </li>
          </ul>
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
