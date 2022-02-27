import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return <Spinner animation="border" style={{position:"absolute",top:"45vh",left:"49vw"}} size="lg" variant="success" /> 
}

export default Loader