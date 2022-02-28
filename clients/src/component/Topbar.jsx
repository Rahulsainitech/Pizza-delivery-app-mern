import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";
const Topbar = () => {
  return (
    <>
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
        <Container fluid>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         
          <Navbar.Collapse id="responsive-navbar-nav">
          <h6 className="text-light text-truncate"><MdLocalOffer className="text-warning"/>&nbsp;&nbsp;
            Free Home delievry on order Above 500/-Rupees
          </h6>
          <Nav className="ms-auto">
            <LinkContainer activeClassName to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer> 
            <LinkContainer activeClassName to="/about">
              <Nav.Link>About US</Nav.Link>
            </LinkContainer>
            <LinkContainer activeClassName to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer activeClassName to="/terms&policy">
              <Nav.Link>Terms and policy</Nav.Link>
            </LinkContainer> 
            <LinkContainer activeClassName to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer> 
          </Nav></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
