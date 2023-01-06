import React from "react";
import {Navbar, Container, Nav, NavDropdown, Form,} from "react-bootstrap";

const header = () => {
  return (
    <Navbar bg="black" Navbar="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto" navbarScroll
          >
            <Nav.Link href="#action1">My Notes</Nav.Link>
            <NavDropdown title="Shridhar" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
         
            </NavDropdown> 
          </Nav>
          <nav>
          <Form >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
