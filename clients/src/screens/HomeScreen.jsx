import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../action/pizzaAction";
import Pizza from "../component/Pizza.jsx";
import Loader from "../component/Loader";
import Error from "../component/Error";
import Filter from "../component/Filter";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector(state => state.getAllPizzaReducer);
  const { pizzas, loading, error } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizza());
  }, [dispatch]);
  return (
    <>
      <Container className="home">
      
        {loading ? (
         <Loader/>
        ) : error ? (
          <Error error={"Error while loading page :"+error}/>
        ) : (
          <Row className="homerow">
          <Filter/>
            {pizzas.map((pizzas) => {
              return (
                <Col md={4}>
                  <Pizza pizza={pizzas} />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
