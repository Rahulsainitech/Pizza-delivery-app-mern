import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById,updatePizzaById } from "../../action/pizzaAction";
import { Row, Col, Form, Button } from "react-bootstrap";
import Error from "../Error";
import Loader from "../Loader";
import Success from "../Success";

const EditPizza = ({ match }) => {
  const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { loading, error, pizza } = getPizzaByState;
  const updatedPizzaState = useSelector(state=>state.updatePizzaByIdReducer)
  const {updateerror,updatesuccess,updateloading}=updatedPizzaState
  console.log("pizz by id", pizza);
  const [name, setName] = useState();
  const [smallPrice, setsmallPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  useEffect(() => {
    if(pizza){
        if (pizza._id === match.params.pizzaId) {
            setName(pizza.name);
            setlargePrice(pizza.prices[0]["large"]);
            setCategory(pizza.category);
            setDescription(pizza.description);
            setImage(pizza.image);
            setmediumPrice(pizza.prices[0]["medium"]);
            setsmallPrice(pizza.prices[0]["small"]);
          } else {
            dispatch(getPizzaById(match.params.pizzaId));
          }
    }else{
        dispatch(getPizzaById(match.params.pizzaId));
    }
  }, [dispatch,pizza,match.params.pizzaId]);

  const updateform = (e) => {
    e.preventDefault();
    const updatedPizza = {
        _id:match.params.pizzaId,
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
    dispatch(updatePizzaById(updatedPizza));
    console.log(updatedPizza);
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
      {/* {success && <Success success="add new pizza successfully" />} */}
      {loading && <Loader />}
      {updatesuccess && <Success success="data updated successfully" />}
      {updateerror && <Error error={"error while updating :"+updateerror}/>}
      {updateloading && <Loader />}
      <Form
        onSubmit={(e) => updateform(e)}
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
              <Form.Label>Small Size</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
                placeholder="Enter Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>medium size</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
                placeholder="Enter Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large Size</Form.Label>
              <Form.Control
                value={largePrice}
                onChange={(e) => setlargePrice(e.target.value)}
                placeholder="Enter Price"
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
          Update Pizza
        </Button>
      </Form>
    </>
  );
};

export default EditPizza;
