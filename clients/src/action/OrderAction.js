import axios from "axios" 
import swal from 'sweetalert';


export const placeOrder = (token,subtotal)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        const res = await axios.post("/api/orders/placeorder",{
            token,
            subtotal,
            currentUser,
            cartItems,
        })
        dispatch({type:"PLACE_ORDER_SUCCESS",payload:res.data});
        // console.log(res)
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAIL",payload:error});
        // console.log(error);
    }
}

export const getUserOrders =()=>async(dispatch,getState)=>{
    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
        type:"USER_ORDER_REQUEST",
    });
    try {
        const response = await axios.post("/api/orders/getuserorder",{
            userid:currentUser._id,
        });
        // console.log(response)
        dispatch({type:"USER_ORDER_SUCCESS",payload:response.data});
    } catch (error) {
        dispatch({type:"USER_ORDER_FAIL",payload:error})
    }
}

export const getallOrders =()=>async(dispatch,getState)=>{
    // const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
        type:"ALL_ORDER_REQUEST",
    });
    try {
        const response = await axios.get("/api/orders/getallorder");
        console.log(response)
        dispatch({type:"ALL_ORDER_SUCCESS",payload:response.data});
    } catch (error) {
        dispatch({type:"ALL_ORDER_FAIL",payload:error})
    }
}

export const deliverOrder =(orderid)=>async(dispatch)=>{
    // const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
        type:"GET_ALL_ORDER_REQUEST",
    });
    try {
        const response = await axios.post("/api/orders/deliverorder",{orderid});
        const orders = await axios.get("/api/orders/getallorder");
        swal("Pizza Deliver Successfully", "success");
        console.log(response)
        dispatch({type:"GET_ALL_ORDER_SUCCESS",payload:orders.data});
        window.location.href ="/admin/orderlist"
    } catch (error) {
        dispatch({type:"GET_ALL_ORDER_FAIL",payload:error})
    }
}