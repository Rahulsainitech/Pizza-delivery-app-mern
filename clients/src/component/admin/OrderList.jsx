import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { deliverOrder, getallOrders } from '../../action/OrderAction';
import Error from "../Error";
import Loader from "../Loader";
import { Button, Table } from 'react-bootstrap';

const OrderList = ()=>{
  const allOrderState = useSelector(state=>state.allUserOrdersReducer)
  const {error ,loading,orders}= allOrderState
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getallOrders())
  },[dispatch])


  return (
    <>
    {error && <Error error={"Error while getallOrders"+error}/>}
    {loading && <Loader/>}
      <h3>All Orders List</h3>
      <Table striped bordered hover variant="dark" responsive>
  <thead>
    <tr>
      <th>OrderId</th>
      <th>Email</th>
      <th>User ID</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {orders && orders.map((order)=>{
      return(
        <tr>
      <td>{order._id}</td>
      <td>{order.email}</td>
      <td>{order.transectionId}</td>
      <td>Rs :{order.orderAmount}/-</td>
      <td>{order.createdAt.substring(0,10)}</td>
      <td>{order.isDeliverd?
       <h6 className='text-success'>Deliverd</h6>:
       <Button
       className='bt-danger btn-sm'
       onClick={()=>dispatch(deliverOrder(order._id))}
       >Deliver</Button>}</td>
    </tr>
    
      )
    })}
  </tbody>
</Table>
    </>
  )
}

export default OrderList