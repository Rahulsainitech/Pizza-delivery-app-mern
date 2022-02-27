import React from "react";
import { Row, Col, Container, Table,Image } from "react-bootstrap";
import {FiPhoneCall} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {GoDeviceMobile} from "react-icons/go";

const Contact = () => {
  return (
    <>
      <Container className="contact">
        <Row>
          <Col md={6}>
            <h2 className="mt-2">Technical Pizza Point</h2>
            <p>
            Authentic Italian food is delightful and can turn around the mood and lift spirits as nothing can. The most famous Italian food loved all over the world is pizza and pasta. The creamy bowl of pasta at TECHNICAL PIZZA POINT will take you to the exotic lanes of Italy. The freshness and crunch of veggies and tenderness of meats on the pizza, make TECHNICAL PIZZA POINT the top contender for the best Italian food near me. The magic of this food can be experienced at the banquets near me whenever you are planning a gathering. Get the best of TECHNICAL PIZZA POINT at banquets whether it is a corporate event or a private party!
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="tex-dark" colSpan={3}>
                    ----Contact Details-----
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><FiPhoneCall/></td>
                  <td>phone</td>
                  <td>1234-5678-3434</td>
                </tr>
                <tr>
                  <td><GoDeviceMobile/></td>
                  <td>Call</td>
                  <td>1234-5678-1111</td>
                </tr>
                <tr>
                  <td><HiOutlineMail/></td>
                  <td>Email</td>
                  <td>123Rahul@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6} className="img">
              <Image src="https://th.bing.com/th/id/R.d7b4e1b7dc52cbf9143eff05ef10721a?rik=5c2%2bcTTDS0I3fw&riu=http%3a%2f%2fretaildesignblog.net%2fwp-content%2fuploads%2f2014%2f11%2fNicks-Pizza-by-Loko-Design-Rio-Claro-Brazil.jpg&ehk=Smx9MuynZNZvrDhBm8T5CH5JWTXtAxFlt%2fe5rfAgxHo%3d&risl=&pid=ImgRaw&r=0" style={{width:"100%",height:"100%"}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
