import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Computer Science student at{" "}
              <i>
                <b className="purple">JK Lakshmipat University, Jaipur</b>
              </i>{" "}
              (maintaining a <b className="purple">9.15 CGPA</b> with a{" "}
              <b className="purple">100% Merit Scholarship</b>).
              <br />
              <br />
              I love turning ideas into fast, reliable, and scalable digital products.
              I am proficient in core languages like
              <i>
                <b className="purple"> Java, C, Python, JavaScript, and SQL</b>
              </i>
              .
              <br />
              <br />
              My primary fields of interest include developing robust&nbsp;
              <i>
                <b className="purple">RESTful APIs & Backend Architecture</b>,{" "}
              </i>
              , and exploring automated smart solutions using GPS and Computer Vision.
              <br />
              <br />
              Whenever possible, I channel my energy into building production-ready applications with{" "}
              <b className="purple">Node.js, Express</b>, and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and <b className="purple">Next.js</b>
              </i>
              , backed by databases like <b className="purple">MongoDB & MySQL</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Ayush Sharma"
                style={{
                  borderRadius: "50%",
                  border: "4px solid #c770f0",
                  boxShadow: "0 0 30px rgba(199, 112, 240, 0.4)",
                  maxWidth: "280px",
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
