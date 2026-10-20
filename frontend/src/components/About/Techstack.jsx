import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiGraphql, SiExpress, SiJsonwebtokens, SiMysql, SiSocketdotio } from "react-icons/si";
import { FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiExpress fontSize={"28px"} />
        <div className="tech-icons-text">Express.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C / C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"32px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio fontSize={"28px"} />
        <div className="tech-icons-text">WebSockets</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens fontSize={"28px"} color="#d63aff" />
        <div className="tech-icons-text">JWT Auth</div>
      </Col>
    </Row>
  );
}

export default Techstack;
