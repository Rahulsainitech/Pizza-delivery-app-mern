import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../action/userAction";
import Loader from "../component/Loader";
import Success from "../component/Success";
import Error from "../component/Error";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, [dispatch]);

  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, success, error } = loginState;

  const loginHandler = () => {
    // e.preventDefault()
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <>
      {loading && <Loader />}
      {success && <Success success="signup successfully" />}
      {error && <Error error={"Error while loading login page :" + error} />}
      <Container className="login">
        <Form>
        <h3>Sign IN</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-warning">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={() => loginHandler()}>
            Signin
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
