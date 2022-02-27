import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch} from "react-redux";
import { addToCart } from "../action/cartAction";
const Pizza = ({ pizza }) => {
  const [varient, SetVariant] = useState("small");
  const [quantity, SetQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }} key={pizza._id}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "160px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>varient</h6>
                <select
                  value={varient}
                  onChange={(e) => SetVariant(e.target.value)}
                >
                  {pizza.varients.map((value) => {
                    return <option key={value}>{value}</option>;
                  })}
                </select>
              </Col>
              <Col md={6}>
                <h6>quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => SetQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => {
                    return <option>{i + 1}</option>;
                  })}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>
              <h6>
                price:{pizza.prices[0][varient] * quantity}
                <FaRupeeSign />
              </h6>
            </Col>
            <Col md={6}>
              <Button onClick={()=>addToCartHandler()} className="bg-warning">Add to cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "230px" }}
            />
          </div>
          <div>
            <h5>Description</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
