import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ayushsharma2440"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
