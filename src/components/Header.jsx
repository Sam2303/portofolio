import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { fetchCv } from '../api/Airtable'

const Header = () => {
  const [cv, setCV] = useState('');
  fetchCv(setCV);
  return (
    <Navbar expand="lg" bg="light" fixed='top'>
      <Container>
        <Navbar.Brand href='#home'>Sam Parsons</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#tech">Tech Stack</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href={cv}>CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
