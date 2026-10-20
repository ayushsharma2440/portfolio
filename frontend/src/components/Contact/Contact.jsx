import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineSend,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Your message was sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "danger",
          message:
            data.error || "Failed to submit message. Please check the backend connection.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        type: "danger",
        message:
          "Unable to reach the backend server. Please make sure the backend is running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <Container fluid className="project-section" style={{ minHeight: "90vh" }}>
        <Particle />
        <Container>
          <h1 className="project-heading">
            Get In <strong className="purple">Touch</strong>
          </h1>
          <p style={{ color: "white" }}>
            Have a project in mind or want to collaborate? Send me a message!
          </p>

          <Row style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            {/* Contact Details Card */}
            <Col md={5} style={{ padding: "20px" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  padding: "35px",
                  borderRadius: "15px",
                  border: "1px solid rgba(199, 112, 240, 0.3)",
                  boxShadow: "0 4px 20px rgba(119, 53, 136, 0.25)",
                  textAlign: "left",
                  height: "100%",
                }}
              >
                <h3 style={{ color: "#c770f0", fontWeight: 700, marginBottom: "25px" }}>
                  Contact Information
                </h3>
                
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "rgba(199, 112, 240, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      color: "#c770f0",
                      marginRight: "15px",
                    }}
                  >
                    <AiOutlineMail />
                  </div>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.85rem" }}>Email</div>
                    <a
                      href="mailto:ayushsharma2440@gmail.com"
                      style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
                    >
                      ayushsharma2440@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "rgba(199, 112, 240, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      color: "#c770f0",
                      marginRight: "15px",
                    }}
                  >
                    <AiOutlinePhone />
                  </div>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.85rem" }}>Phone</div>
                    <a
                      href="tel:+917014968183"
                      style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}
                    >
                      +91-7014968183
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "rgba(199, 112, 240, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      color: "#c770f0",
                      marginRight: "15px",
                    }}
                  >
                    <AiOutlineEnvironment />
                  </div>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.85rem" }}>Location</div>
                    <span style={{ color: "#fff", fontWeight: 500 }}>
                      Jaipur, Rajasthan, India
                    </span>
                  </div>
                </div>

                <hr style={{ borderColor: "rgba(199, 112, 240, 0.3)" }} />

                <div style={{ paddingTop: "10px" }}>
                  <h5 style={{ color: "#ddd", fontSize: "1rem", marginBottom: "15px" }}>
                    Connect on Social Profiles:
                  </h5>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <a
                      href="https://github.com/ayushsharma2440"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#700c86",
                        fontSize: "1.2rem",
                        textDecoration: "none",
                      }}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://linkedin.com/in/ayushsharma2440"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#700c86",
                        fontSize: "1.2rem",
                        textDecoration: "none",
                      }}
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col md={7} style={{ padding: "20px" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  padding: "35px",
                  borderRadius: "15px",
                  border: "1px solid rgba(199, 112, 240, 0.3)",
                  boxShadow: "0 4px 20px rgba(119, 53, 136, 0.25)",
                  textAlign: "left",
                }}
              >
                <h3 style={{ color: "#c770f0", fontWeight: 700, marginBottom: "25px" }}>
                  Send a Message
                </h3>

                {status.message && (
                  <Alert variant={status.type} style={{ borderRadius: "10px" }}>
                    {status.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label style={{ color: "#eee" }}>Your Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        background: "rgba(20, 15, 35, 0.8)",
                        border: "1px solid rgba(199, 112, 240, 0.4)",
                        color: "#fff",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{ color: "#eee" }}>Your Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="e.g. johndoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        background: "rgba(20, 15, 35, 0.8)",
                        border: "1px solid rgba(199, 112, 240, 0.4)",
                        color: "#fff",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label style={{ color: "#eee" }}>Your Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        background: "rgba(20, 15, 35, 0.8)",
                        border: "1px solid rgba(199, 112, 240, 0.4)",
                        color: "#fff",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                    }}
                  >
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <>
                        <AiOutlineSend /> &nbsp;Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
