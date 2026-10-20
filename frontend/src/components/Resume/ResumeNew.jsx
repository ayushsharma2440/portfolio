import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeImg from "../../Assets/Ayush_Sharma_Resume.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGraduationCap, FaCertificate, FaAward, FaFilePdf, FaFileWord } from "react-icons/fa";

function ResumeNew() {
  const [format, setFormat] = useState("pdf");

  // Backend API route — reads from .env (VITE_API_URL), falls back to localhost for dev
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const backendDownloadUrl = `${API_URL}/api/resume/${format}`;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Format Selector & Download Button (Top) */}
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <p style={{ color: "#d1c4e9", fontSize: "1.05rem", marginBottom: "12px", fontWeight: 500 }}>
            Choose Resume Format to Download:
          </p>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
            <ButtonGroup style={{ background: "rgba(255, 255, 255, 0.08)", padding: "4px", borderRadius: "10px" }}>
              <Button
                variant={format === "pdf" ? "primary" : "outline-light"}
                onClick={() => setFormat("pdf")}
                style={{
                  borderRadius: "8px",
                  padding: "8px 20px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "none",
                  boxShadow: format === "pdf" ? "0 0 15px rgba(199, 112, 240, 0.6)" : "none",
                }}
              >
                <FaFilePdf style={{ marginRight: "6px", color: format === "pdf" ? "#fff" : "#ff6b6b" }} />
                PDF Format
              </Button>

              <Button
                variant={format === "docx" ? "primary" : "outline-light"}
                onClick={() => setFormat("docx")}
                style={{
                  borderRadius: "8px",
                  padding: "8px 20px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "none",
                  marginLeft: "6px",
                  boxShadow: format === "docx" ? "0 0 15px rgba(199, 112, 240, 0.6)" : "none",
                }}
              >
                <FaFileWord style={{ marginRight: "6px", color: format === "docx" ? "#fff" : "#4dabf7" }} />
                Word (.docx)
              </Button>
            </ButtonGroup>
          </div>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={backendDownloadUrl}
              target="_blank"
              download={`Ayush_Sharma_Resume.${format}`}
              style={{ maxWidth: "270px", padding: "10px 20px", fontSize: "1rem", fontWeight: 600 }}
            >
              <AiOutlineDownload style={{ fontSize: "1.2rem" }} />
              &nbsp;Download CV ({format.toUpperCase()})
            </Button>
          </Row>
        </div>

        {/* Academic & Certifications Highlights */}
        <Container className="mb-5">
          <Row style={{ justifyContent: "center", gap: "20px" }}>
            <Col md={5} className="resume-card-box p-4" style={{
              background: "rgba(255, 255, 255, 0.04)",
              borderRadius: "15px",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              boxShadow: "0 4px 15px rgba(119, 53, 136, 0.2)",
              textAlign: "left"
            }}>
              <h3 style={{ color: "#c770f0", fontSize: "1.4rem", fontWeight: 700, marginBottom: "15px" }}>
                <FaGraduationCap /> Education & Achievements
              </h3>
              <h5 style={{ fontWeight: 600 }}>JK Lakshmipat University, Jaipur</h5>
              <p style={{ color: "#e2d2f9", marginBottom: "6px" }}>
                B.Tech in Computer Science &bull; <strong>CGPA: 9.15</strong> (2024 - 2028)
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "0.95rem", color: "#ccc" }}>
                <li><FaAward style={{ color: "#f5a623" }} /> <strong>100% Merit-Based Scholarship</strong></li>
                <li>Official University Honors List for academic excellence</li>
              </ul>
            </Col>

            <Col md={5} className="resume-card-box p-4" style={{
              background: "rgba(255, 255, 255, 0.04)",
              borderRadius: "15px",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              boxShadow: "0 4px 15px rgba(119, 53, 136, 0.2)",
              textAlign: "left"
            }}>
              <h3 style={{ color: "#c770f0", fontSize: "1.4rem", fontWeight: 700, marginBottom: "15px" }}>
                <FaCertificate /> Certifications
              </h3>
              <ul style={{ paddingLeft: "15px", listStyle: "none", fontSize: "0.92rem", color: "#ddd" }}>
                <li style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#fff" }}>IBM</strong> &bull; Node.js & MongoDB: Developing Back-end Database Applications
                  <div style={{ color: "#9b7eac", fontSize: "0.82rem" }}>ID: ZG22BOQAFUYX</div>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#fff" }}>University of Michigan</strong> &bull; Python Data Structures
                  <div style={{ color: "#9b7eac", fontSize: "0.82rem" }}>ID: IDYCTOACB10P</div>
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>University of Michigan</strong> &bull; Programming for Everybody (Python)
                  <div style={{ color: "#9b7eac", fontSize: "0.82rem" }}>ID: 2KXO6MRZ2OPK</div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        {/* High-res Resume Display */}
        <Row className="resume justify-content-center">
          <Col md={9} lg={8} className="d-flex justify-content-center">
            <div
              style={{
                boxShadow: "0 8px 30px rgba(129, 72, 144, 0.4)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid rgba(197, 115, 230, 0.4)",
                maxWidth: "100%",
                background: "#fff"
              }}
            >
              <img
                src={resumeImg}
                alt="Ayush Sharma Resume"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>
          </Col>
        </Row>

        {/* Bottom Format & Download Button */}
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={backendDownloadUrl}
              target="_blank"
              download={`Ayush_Sharma_Resume.${format}`}
              style={{ maxWidth: "270px", padding: "10px 20px", fontSize: "1rem", fontWeight: 600 }}
            >
              <AiOutlineDownload style={{ fontSize: "1.2rem" }} />
              &nbsp;Download CV ({format.toUpperCase()})
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
