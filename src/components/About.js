import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="info text-size text-color">
      <h1 className="heading">About Me!</h1>
      <p className="para">
        Hello visitors! My name is <mark>Kishan Jani</mark>. I am Interested in
        Front-end Technologies like React.JS library, JavaScript, HTML, CSS, and
        other frameworks.
      </p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}

export default About;
