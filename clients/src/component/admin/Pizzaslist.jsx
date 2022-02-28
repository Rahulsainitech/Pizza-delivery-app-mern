import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizza } from "../../action/pizzaAction";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loader from "../Loader";
import Error from "../Error";
import { Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletePizzaById } from "../../action/pizzaAction";

const Pizzaslist = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas, loading, error } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizza());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={"Error while loading page :" + error} />
      ) : (
        <>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>Sr/no</th>
                <th>Pizza Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>{" "}
            </thead>
            <tbody>
              {pizzas.map((pizzas) => {
                return (
                  <tr>
                    <td>
                      <Image src={pizzas.image} style={{width:"180px",height:"80px"}}/>
                    </td>
                    <td>{pizzas.name}</td>
                    <td>
                      Small :{pizzas.prices[0]["small"]} <br />
                      Medium :{pizzas.prices[0]["medium"]} <br />
                      Large :{pizzas.prices[0]["large"]} <br />
                    </td>
                    <td>{pizzas.category}</td>
                    <td style={{ cursor: "pointer" }}>
                    <Link to={"/admin/editpizaa/"+pizzas._id}>
                      <AiOutlineEdit className="text-primary" /></Link> &nbsp;{" "}
                      <RiDeleteBin5Fill className="text-danger" onClick={()=>dispatch(deletePizzaById(pizzas._id))} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default Pizzaslist;
