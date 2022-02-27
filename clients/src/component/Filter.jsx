import React,{useState} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { filterPizza } from "../action/pizzaAction";

const Filter = () => {
    const dispatch = useDispatch()
    const [searchKey,setSearchkey]=useState("")
    const [category,setCategory]=useState("all")
  return (
    <div className="p-4 filter">
      <Form>
        <Row>
          <Col>
            <Form.Control 
            value={searchKey}
            onChange={(e)=>setSearchkey(e.target.value)}
            placeholder="Search Pizza...." />
          </Col>
          <Col>
           <select className="form-select" value={category}
            onChange={(e)=>setCategory(e.target.value)}>
               <option selected>ALL</option>
               <option>veg</option>
               <option>nonveg</option>
           </select>
          </Col>
          <Col><Button onClick={()=>dispatch(filterPizza(searchKey,category))}>Search</Button></Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filter;
