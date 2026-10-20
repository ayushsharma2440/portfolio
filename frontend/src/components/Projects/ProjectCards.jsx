import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontWeight: 700 }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem", flexGrow: 1 }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "15px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
