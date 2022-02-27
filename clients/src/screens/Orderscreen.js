import React, { useEffect } from "react";
import { getUserOrders } from "../action/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/Loader";
import Error from "../component/Error";
import { Col, Container, Row } from "react-bootstrap";

const Orderscreen = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);

  const { loading, error, orders } = orderState;
  console.log("orders", orders);
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <>
      {loading && <Loader />}
      {error && <Error error={"something went wrong :" + error} />}
      <Container className="bg-light" style={{ minHeight: "70vh" }}>
      <h4 className="text-center my-3 py-2 bg-danger">Your Order</h4>
        <Row>
          {orders &&
            orders.map((order) => {
              return (
                <>
                  <Col md={4}>
                    <h4>Order Items</h4>
                    {order.orderItems.map((item) => {
                      return (
                        <>
                          <h6 key={item.name}>
                            {item.name}[{item.varient}]{"  "}*{"  "}
                            {item.quantity}
                            {"  "}={"  "}
                            {item.price}
                          </h6>
                        </>
                      );
                    })}
                  </Col>
                  <Col md={4}>
                    <h4>Address</h4>
                    <h6>Street :{order.shippingAddress.street}</h6>
                    <h6>City :{order.shippingAddress.city}</h6>
                    <h6>PinCode :{order.shippingAddress.pincode}</h6>
                    <h6>Country :{order.shippingAddress.country}</h6>
                  </Col>
                  <Col md={4}>
                    <h4>Order Info</h4>
                    <h6>Order Amount:{order.orderAmount}</h6>
                    <h6>transectionId:{order.transectionId}</h6>
                    <h6>Order Id :{order._id}</h6>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Orderscreen;
