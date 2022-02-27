import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch,useSelector } from "react-redux";
import { placeOrder } from "../action/OrderAction";
import Loader from "./Loader";
import Error from "./Error"
import Success from "./Success"

const Checkout = ({ subTotal }) => {
  const orderState = useSelector(state=>state.placeOrderReducer)
  const {loading,error,success} = orderState
    const dispatch =useDispatch()
    const tokenHandler =(token)=>{
        dispatch(placeOrder(token,subTotal))
        console.log(token)
    }
  return (<>
    {loading && <Loader/>}
    {error && <Error error={"Something went wrong :"+error}/>}
    {success && <Success success="order placed success"/>}
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51KWXjESHh66WoN9CMKkGq5e14k4t1BrEHdI2BE1LDUm6KwbdvmTjlDsh5wxNmQfEG7lNyVs9kI0fVPIXSLytjAf400MIMWprMj"
      currency="INR"
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  </>);
};

export default Checkout;
