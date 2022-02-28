import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../action/pizzaAction";
import Error from "../Error";
import Loader from "../Loader";
import Success from "../Success";

const AddNewPizzs = () => {
  const [name, setName] = useState();
  const [smallPrice, setsmallPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.addPizzaReducer);
  const { error, success, loading } = userState;

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
    console.log(pizza);
    setName();
    setlargePrice();
    setCategory();
    setDescription();
    setImage();
    setmediumPrice();
    setlargePrice();
    setsmallPrice();
  };
  return (
    <>
      {error && <Error error={"error while adding pizza :" + error} />}
      {success && <Success success="add new pizza successfully" />}
      {loading && <Loader />}
      <Form
        onSubmit={(e) => submitForm(e)}
        style={{ minHeight: "70vh" }}
        className="bg-light my-3 p-3"
      >
      <h3 className="text-center">Add New Pizza</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Pizza Name"
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
                placeholder="Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>medium</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
                placeholder="Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large</Form.Label>
              <Form.Control
                value={largePrice}
                onChange={(e) => setlargePrice(e.target.value)}
                placeholder="Price"
              />
            </Form.Group>
          </Row>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter Image Url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write speciality of pizza"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>category</Form.Label>
          <Form.Control
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="enter category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </>
  );
};

export default AddNewPizzs;
