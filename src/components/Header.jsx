import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand>Sam Parsons</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Tech Stack</Nav.Link>
            <Nav.Link href="/">Projects</Nav.Link>
            <Nav.Link href="/">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Nav.propTypes = {};

export default Header;
