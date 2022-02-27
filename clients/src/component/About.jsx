import React from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container className="about">
        <h1>Technical Pizza Point</h1>
        <Row>
        <Col md={3} sm={6} className="img order-md-last m-auto">
            {" "}
            <Image src="https://imageio.forbes.com/specials-images/imageserve/515124952/960x0.jpg?fit=bounds&format=jpg&width=960" />
            <h6 className="py-3 bg-primary text-white text-center">
              Dr. Geeta Nirmal (manager)
            </h6>
          </Col>
          <Col md={9} >
            <p >
              The thing that is remembered by most in any wedding, is the
              wedding catering services. TECHNICAL PIZZA POINT'S has got your back in this
              event and any other party, to ensure you have the best catering
              service your guests have seen. The professionalism, competence,
              and warmth of the catering services, will make your job as a host
              much easier. If you are looking for catering services near me,
              TECHNICAL PIZZA POINT'S is the place to begin. Whether it is a bachelorette party
              catering or birthday catering, TECHNICAL PIZZA POINT'S is the way to ensure you
              are stress-free and enjoy the party. With a great selection of
              beverages, options of veg and non veg pizza, and sides, your
              guests will keep trying new things till they leave! Don’t forget
              the innovative items like burger pizza that will keep things
              interesting. TECHNICAL PIZZA POINT'S is already the best at virtual pizza party
              and now you can bring that joy to your party at a venue too!
            </p>
          </Col>
         
        </Row>
        <h2>Our Speciality</h2>
        <Row>
          <Col md={6}>
            <p>
              When you are planning that pizza party, you don’t have to think
              twice about the taste and quality because everyone knows Domino's
              has got it all. When you are planning your virtual pizza party,
              you can get in touch with TECHNICAL PIZZA POINT'S beforehand and let your
              requirement be known. After that, all you need to do is place the
              order and pizza delivery time. And just like that, TECHNICAL PIZZA POINT'S will
              deliver boxes of gooey delights to everyone. Dig into your pizza
              and chill! VIRTUAL PIZZA PARTY WITH YOUR OFFICE PALS If you are
              looking to host an office pizza party with your pals, you can make
              use of the E-Gift voucher to unlock attractive discounts and save
              more. TECHNICAL PIZZA POINT'S is set to bring the warmth of friendship to the
              virtual parties with the scrumptious and well-loved items on the
              menu. The magical touch of cheese burst crust can turn any meeting
              into a party!
            </p>
          </Col>
          <Col md={6} sm={12} className="img">
            <Image src="https://www.india.com/wp-content/uploads/2014/08/pizza2.jpg" />
          </Col>
        </Row>
        <Row>
          <h3 className="chief">Our Chief</h3>
          <Col md={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://media-cdn.tripadvisor.com/media/photo-s/1a/41/f9/2e/our-head-pizza-chef-giulio.jpg"
              />
              <Card.Body>
                <Card.Title>Vipul&nbsp; (5yrs exp)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/smiling-chef-holding-big-peel-with-pizza-picture-id1000842142?k=20&m=1000842142&s=612x612&w=0&h=5LIMn5AMmuRghqjMOW_Toizaekv5T22AGeH96OvtRLk="
              />
              <Card.Body>
                <Card.Title>Jacobina&nbsp;(7yrs)exp</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/chef-takes-out-a-hot-pizza-from-the-oven-picture-id1063976282?k=20&m=1063976282&s=612x612&w=0&h=k43wDUMzYPp8K4fxYIUvE3lpVzZLnZW4_IWUFG4KXEM="
              />
              <Card.Body>
                <Card.Title>Ujjwal &nbsp;(1yrs exp)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src="https://c8.alamy.com/comp/FRMA0J/pizza-chef-put-sauce-on-base-FRMA0J.jpg"
              />
              <Card.Body>
                <Card.Title>Thapa &nbsp; (5yrs exp)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
