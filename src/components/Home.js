import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/head-tail" className="nav-link">
                Head & Tail
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className="heading text-center text-color">Let's have a toss!!</h1>
    </div>
  );
}

export default Home;
