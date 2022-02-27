import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { logoutUser } from "../action/userAction";

const Navbar1 = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar1" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="images/png1234.png" style={{height:"60px",width:"100%"  }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  {/* <Nav.Link >{currentUser.name}</Nav.Link> */}
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  <LinkContainer to="/order">
                    <NavDropdown.Item >
                      Order
                    </NavDropdown.Item></LinkContainer>
                    <NavDropdown.Item onClick={()=>dispatch(logoutUser())}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/signin">
                    <Nav.Link>Signin</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <TiShoppingCart style={{ fontSize: "1.5rem" }} />
                  <sup
                    style={{
                      border: "1px solid black",
                      borderRadius: "50%",
                      padding: "0 3px",
                      background: "red",
                      color: "white",
                    }}
                  >
                    {cartState.cartItems.length}
                  </sup>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
