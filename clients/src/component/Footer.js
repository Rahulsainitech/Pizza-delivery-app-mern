import React from "react";
import { Row, Col,  Container, Image, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaLocationArrow} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container>
        <Image
          src="images/png1234.png"
          style={{
            height: "60px",
            width: "190px",
            padding: "4px",
            marginTop: "1rem",
            border: "1px solid white",
          }}
        />
        <Row className="pt-2 ">
          <Col md={4} sm={6} xs={6} >
            <LinkContainer to="/">
              <Nav.Link>Home  <FaLocationArrow/></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us  <FaLocationArrow/></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us <FaLocationArrow/></Nav.Link>
            </LinkContainer>

            <Nav.Link href="https://mern-rahulsaini-tech.herokuapp.com" target="new">
              Dev contact <FaLocationArrow/>
            </Nav.Link>
          </Col>
          <Col md={4} sm={6} xs={6} className="text-danger">
          <h4>Connect with us</h4>
            <h6>
              <Nav.Link href="https://mern-rahulsaini-tech.herokuapp.com">
               Linkdin
              </Nav.Link>
            </h6>
            <h6>
              <Nav.Link href="https://mern-rahulsaini-tech.herokuapp.com">
                Facebook
              </Nav.Link>
            </h6>
            <h6>
              <Nav.Link href="https://mern-rahulsaini-tech.herokuapp.com">
                Instagram
              </Nav.Link>
            </h6>
            <h6>
              <Nav.Link href="https://mern-rahulsaini-tech.herokuapp.com">
                Git Hub
              </Nav.Link>
            </h6>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <h3 className="text-danger">Address</h3>
            <address className="text-primary">
              E-Block Room NO-38 <br /> Harsh Bhavan <br /> University market <br/>Kurukshetra University <br/>136119,Kurukshetra
            </address>
          </Col>
          <footer className="text-center text-info py-3">
            -----Copyright &copy; 2022-2030 All Right reserved----
          </footer>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
