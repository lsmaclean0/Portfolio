import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import About from '../routes/About';

export default function NavBar() {
    return (
        <Navbar bg="transparent" fixed="top" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    )
}