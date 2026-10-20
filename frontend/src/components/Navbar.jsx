import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={() => updateExpanded(false)}>
          <span style={{ fontWeight: 800, fontSize: "1.6rem", color: "#c770f0", letterSpacing: "1px" }}>
            AS<span style={{ color: theme === "light" ? "#2b2738" : "#fff" }}>.</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {/* Dark / Light Mode Toggle Button (Replaces GitHub button) */}
            <Nav.Item className="theme-toggle-item ms-md-3 mt-2 mt-md-0">
              <Button
                onClick={toggleTheme}
                variant="outline-light"
                className="theme-toggle-btn"
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                aria-label="Toggle Dark and Light theme"
                style={{
                  borderRadius: "22px",
                  padding: "6px 15px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  border: "1.5px solid rgba(199, 112, 240, 0.6)",
                  background: theme === "dark" ? "rgba(147, 76, 206, 0.25)" : "rgba(255, 255, 255, 0.95)",
                  color: theme === "dark" ? "#fff" : "#2b1c40",
                  boxShadow: theme === "dark" ? "0 0 10px rgba(199, 112, 240, 0.3)" : "0 2px 10px rgba(119, 53, 136, 0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                {theme === "dark" ? (
                  <>
                    <BsSun style={{ color: "#ffd43b", fontSize: "1.1rem" }} />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <BsMoonStarsFill style={{ color: "#7b2cbf", fontSize: "1rem" }} />
                    <span>Dark</span>
                  </>
                )}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
