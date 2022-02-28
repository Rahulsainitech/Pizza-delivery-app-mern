import React, { useEffect } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Pizzaslist from "../component/admin/Pizzaslist";
import Userlist from "../component/admin/Userlist";
import AddNewPizzs from "../component/admin/AddNewPizzs";
import OrderList from "../component/admin/OrderList";
import EditPizza from "../component/admin/EditPizza";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const Adminscreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      swal("Either you are not login or you do not have admin access");
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <h3 className="bg-dark text-center p-2 m-3 text-white">
            Admin Pannel
          </h3>
          <Col md={10} xs={12} className="mx-auto m-3">
            <ButtonGroup className="button-grp">
              <Button
                className="bg-primary"
                onClick={() => history.push("/admin")}
              >
                All User
              </Button>
              <Button
                className="bg-danger"
                onClick={() => history.push("/admin/pizzalist")}
              >
                All Pizzas
              </Button>
              <Button
                className="bg-primary"
                onClick={() => history.push("/admin/addnewpizza")}
              >
                Add New Pizza
              </Button>
              <Button
                className="bg-danger"
                onClick={() => history.push("/admin/orderlist")}
              >
                All Order
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={12} xs={12} className="pt-4">
            <Switch>
              <Route exact path="/admin" component={Userlist} />
              <Route exact path="/admin/pizzalist" component={Pizzaslist} />
              <Route exact path="/admin/addnewpizza" component={AddNewPizzs} />
              <Route exact path="/admin/orderlist" component={OrderList} />
              <Route
                exact
                path="/admin/editpizaa/:pizzaId"
                component={EditPizza}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Adminscreen;
