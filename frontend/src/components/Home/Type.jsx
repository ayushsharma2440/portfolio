import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Backend & REST API Developer",
          "Ex-Summer Intern at Hughes Systique",
          "CS Undergrad @ JKLU (9.15 CGPA)",
          "Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
