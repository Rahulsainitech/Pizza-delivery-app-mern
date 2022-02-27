import axios from "axios";
import swal from "sweetalert";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/signin";
};

export const getAllUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  try {
    const res = await axios.get("/api/users/getallusers");
    console.log(res);
    dispatch({ type: "GET_USER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_FAIL", payload: error });
  }
};

export const deleteUserById = (userId) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userId });
    swal("User Delete Successfully", "success");
    window.location.reload();
  } catch (error) {
    swal("Error while deleting the User");
  }
};

export const addAdmin = (userid) => async (dispatch) => {
  dispatch({
    type: "Add_ADMIN_REQUEST",
  });
  try {
    const response = await axios.post("/api/users/addnewadmin", { userid });
    swal("Successfully update on admin acess", "success");
    console.log(response);
    dispatch({ type: "Add_ADMIN_SUCCESS" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "Add_ADMIN_FAIL", payload: error });
  }
};
