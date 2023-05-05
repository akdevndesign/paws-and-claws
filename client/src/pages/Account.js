import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Account() {
  return (
    <section className="login account-forms">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="login-side">
            <div className="col-8 mx-auto">
              <Form className="login-form">
                <h1 className="text-center">Paws and Claws</h1>
                <h3 className="text-center">Login</h3>
                <div className="col-8 mx-auto">
                  <Form.Group controlId="formBasicUsername" className="mt-4 mb-4">
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mt-4 mb-4">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword" className="mt-4 mb-4">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="text-center mt-5">
                    <Button variant="primary" type="submit" className="btn-block" id="login-btn">
                      Login
                    </Button>
                  </div>
                </div>
                <p className="mt-3 mb-0 text-center">
                  Don't have an account? <a href="#">Create one here</a>
                </p>
              </Form>
            </div>
          </Col>
          <Col md={6} className="d-flex">
            <div className="col-8 mx-auto text-center info-side">
              <h2>A pet can help reduce stress and improve your mental health!</h2>
              <p>
                Pets, especially dogs and cats, can offer emotional support and become loyal and affectionate
                companions, which can improve overall well-being and reduce stress and anxiety levels.
                Additionally, pets can encourage owners to be more active, through daily walks and playtime,
                which can promote physical health and a sense of routine.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}