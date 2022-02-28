import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../action/cartAction";
import Checkout from "../component/Checkout";

const Cartscreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItem = cartState.cartItems;
  const dispatch = useDispatch();
  const subtotal = cartItem.reduce((x,item)=> x+item.price,0)
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="mt-5">
            <h3 className="bg-danger p-2">Cart Item</h3>
            {!cartItem? <h3>Loading ...</h3>:cartItem.map((item) => {
              return (
                <>
                  <Row
                    style={{
                      margin: "5px 5px",
                      padding: "7px",
                      border: "1px solid green",
                      position:"relative"
                    }}
                    key={item._id}
                  >  
                    <Col sm={4} md={7}  className="my-2">
                      <h5>
                        {item.name} [{item.varient}]
                      </h5>
                      <h6>
                        {"  "}
                        prices: {item.quantity}
                        {" X "}
                        {item.prices[0][item.varient]}= {item.price}
                      </h6>
                      <h6>
                        &nbsp;Quantity:&nbsp;{" "}
                        <BsFillPlusCircleFill
                          style={{ cursor: "progress" ,fontSize:"1.3rem"}}
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity + 1, item.varient)
                            );
                          }}
                          className="text-success"
                        />
                        &nbsp;{item.quantity} &nbsp;
                        <AiFillMinusCircle
                          style={{ cursor: "progress",fontSize:"1.3rem" }}
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity - 1, item.varient)
                            );
                          }}
                          className="text-danger"
                        />
                      </h6>
                    </Col>
                    <Col sm={6} md={5} >
                   
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "200px", height: "100px" ,zIndex:-1}}
                      />
                      <FaTrashAlt
                       onClick={() => {
                            dispatch(
                              deleteFromCart(item)
                            );
                          }}
                        style={{
                          fontSize: "1rem",
                          color: "red",
                          position:"absolute",
                          top:"3px",
                          right:"3px",
                          cursor:"progress",
                          zIndex:4
                        }}
                      />
                    </Col>
                  </Row>
                </>
              );
            })}
          </Col>
          <Col md={5} sm={12} className="sm-order-1 mt-5 ">
            <h3 className="bg-primary text-white p-2">Payment Info</h3>
            <h4 className="p-2">Sub Total:</h4>
            <h4 className="p-2">RS : {subtotal}/-</h4>
            {/* <Button>Check Out</Button> */}
            <Checkout className="p-2" subTotal={subtotal}/> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cartscreen;
