import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ayush Sharma</span> from{" "}
            <span className="purple">Jaipur, Rajasthan, India</span>.
            <br />
            I’m currently pursuing my <span className="purple">B.Tech in Computer Science</span> at{" "}
            <span className="purple">JK Lakshmipat University</span> (Graduation: 2024 - 2028) with a current{" "}
            <span className="purple">CGPA of 9.15</span>.
            <br />
            I am honored to have been awarded a{" "}
            <span className="purple">100% Merit-Based Scholarship</span> and featured in the official{" "}
            <span className="purple">Honors List</span> of the university for academic excellence.
            <br />
            <br />
            Apart from coding and software engineering, here are a few other activities I love:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Spriting and Weight Lifting ⚡
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about History & Civilization 🛠️
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
