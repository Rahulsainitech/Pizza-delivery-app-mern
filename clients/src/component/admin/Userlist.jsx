import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../action/userAction";
import Loader from "../Loader";
import Error from "../Error";
import { Table, Button } from "react-bootstrap";
import { deleteUserById } from "../../action/userAction";
import { addAdmin } from "../../action/userAction";

const Userlist = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllUserReducer);
  const { users, error, loading } = userState;
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <>
      {error && <Error error={"error while loading users :" + error} />}
      {loading && <Loader />}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Register date</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt.substring(0, 10)}</td>
                  <td>
                    {user.isAdmin ? (
                      <Button className="btn-sm" 
                      onClick={()=>dispatch(addAdmin(user._id))}
                      >remove admin</Button>
                    ) : (
                      <Button className="btn-sm"
                      onClick={()=>dispatch(addAdmin(user._id))}
                      >add admin</Button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn-danger btn-sm"
                      onClick={() => dispatch(deleteUserById(user._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Userlist;
